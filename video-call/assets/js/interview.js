'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
    $(function () {
        var Client = function () {
            //construct a meeting client with signal client and rtc client
            function Client(sclient, rclient, localAccount) {
                _classCallCheck(this, Client);

                this.signal = sclient;
                this.rtc = rclient;
                this.localAccount = localAccount;

                //ring tones resources
                this.sound_ring = new Howl({
                    src: ['./assets/sound/basic_ring.mp3'],
                    loop: true
                });

                this.sound_tones = new Howl({
                    src: ['./assets/sound/basic_tones.mp3'],
                    loop: true
                });

                this.signal.onInviteReceived = $.proxy(this.onInviteReceived, this);
                this.signal.onInviteEndByPeer = $.proxy(this.onInviteEndByPeer, this);
                this.signal.onMessageChannelReceive = $.proxy(this.onMessageChannelReceive, this);

                this.subscribeEvents();
            }

            _createClass(Client, [{
                key: 'sendMessage',
                value: function sendMessage(text) {
                    if (!text.trim()) return false; // empty
                    var chatMsgContainer = $(".chart_warp");
                    var msg_item = { ts: new Date(), text: text, account: this.localAccount };
                    chatMsgContainer.append(this.buildMsg(text, true, msg_item.ts));
                    chatMsgContainer.scrollTop(chatMsgContainer[0].scrollHeight);
                    this.signal.broadcastMessage(JSON.stringify(msg_item));
                }
            }, {
                key: 'buildMsg',
                value: function buildMsg(msg, me, ts) {
                    var html = "";
                    var timeStr = ts.toString();
                    if (timeStr) {
                        html += '<div>' + timeStr + '</div>';
                    }
                    var className = me ? "message right clearfix" : "message clearfix";
                    html += "<li class=\"" + className + "\">";
                    html += "<img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg\">";
                    html += "<div class=\"bubble\">" + Utils.safe_tags_replace(msg) + "<div class=\"corner\"></div>";
                    html += "<span>" + this.parseTwitterDate(ts) + "</span></div></li>";

                    return html;
                }
            }, {
                key: 'parseTwitterDate',
                value: function parseTwitterDate(tdate) {
                    var system_date = new Date(Date.parse(tdate));
                    var user_date = new Date();
                    // if (K.ie) {
                    //     system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
                    // }
                    var diff = Math.floor((user_date - system_date) / 1000);
                    if (diff <= 1) {
                        return "just now";
                    }
                    if (diff < 20) {
                        return diff + " seconds ago";
                    }
                    if (diff < 40) {
                        return "half a minute ago";
                    }
                    if (diff < 60) {
                        return "less than a minute ago";
                    }
                    if (diff <= 90) {
                        return "one minute ago";
                    }
                    if (diff <= 3540) {
                        return Math.round(diff / 60) + " minutes ago";
                    }
                    if (diff <= 5400) {
                        return "1 hour ago";
                    }
                    if (diff <= 86400) {
                        return Math.round(diff / 3600) + " hours ago";
                    }
                    if (diff <= 129600) {
                        return "1 day ago";
                    }
                    if (diff < 604800) {
                        return Math.round(diff / 86400) + " days ago";
                    }
                    if (diff <= 777600) {
                        return "1 week ago";
                    }
                    return "on " + system_date;
                }
            }, {
                key: 'onMessageChannelReceive',
                value: function onMessageChannelReceive(account, msg) {
                    this.onReceiveMessage(account, msg, "channel");
                }
            }, {
                key: 'onReceiveMessage',
                value: function onReceiveMessage(account, msg, type) {
                    var client = this;
                    var chatMsgContainer = $(".chart_warp");
                    var msgJson = JSON.parse(msg);
                    chatMsgContainer.append(client.buildMsg(msgJson.text, false, new Date()));
                    chatMsgContainer.scrollTop(chatMsgContainer[0].scrollHeight);
                }

                //return a promise resolves a remote account name

            }, {
                key: 'requestRemoteAccount',
                value: function requestRemoteAccount() {
                    var deferred = $.Deferred();
                    var localAccount = this.localAccount;

                    var account = Browser.getParameterByName("remoteaccount");
                    deferred.resolve(account);

                    return deferred;
                }

                //return a promise resolves a signaling call result

            }, {
                key: 'call',
                value: function call(channelName, account, requirePeerOnline) {
                    var deferred = $.Deferred();
                    var dialog = $(".callingModal");
                    dialog.find(".callee").html(account);
                    var signal = this.signal;

                    signal.call(channelName, account, requirePeerOnline).done(function (_) {
                        dialog.hide();
                        $('.op_warp').hide();
                        deferred.resolve();
                    }).catch($.proxy(function (err) {
                        Message.show(err.reason);
                        deferred.reject();
                    }, this));

                    return deferred.promise();
                }

                //end given call object, passive means the call is ended by peer

            }, {
                key: 'endCall',
                value: function endCall(call, passive) {
                    var deferred = $.Deferred();
                    var signal = this.signal;
                    var rtc = this.rtc;
                    var btn = $(".toolbar .muteBtn");

                    $('.op_warp').show();
                    rtc.muted = true;
                    btn.removeClass("btn-info").addClass("btn-secondary");
                    btn.find("i").html("mic");

                    //end rtc
                    rtc.end();
                    //end signal call
                    signal.endCall(call, passive);
                    return deferred.promise();
                }

                //ring when calling someone else

            }, {
                key: 'ringCalling',
                value: function ringCalling(play) {
                    if (play) {
                        this.sound_ring.play();
                    } else {
                        this.sound_ring.stop();
                    }
                }
                //ring when being called by someone else

            }, {
                key: 'ringCalled',
                value: function ringCalled(play) {
                    if (play) {
                        this.sound_tones.play();
                    } else {
                        this.sound_tones.stop();
                    }
                }

                //events

            }, {
                key: 'subscribeEvents',
                value: function subscribeEvents() {
                    var _this = this;

                    var signal = this.signal;
                    //toolbar end call btn
                    $(".toolbar .endCallBtn").off("click").on("click", $.proxy(function (e) {
                        _this.ringCalling(false);
                        _this.endCall(signal.call_active || signal.call_holding, false);
                    }, this));

                    //toolbar mute btn
                    $(".toolbar .muteBtn").off("click").on("click", $.proxy(function (e) {
                        var btn = $(e.currentTarget);
                        var rtc = _this.rtc;
                        rtc.toggleMute();
                        if (rtc.muted) {
                            btn.removeClass("btn-secondary").addClass("btn-info");
                            btn.find("i").html("mic_off");
                        } else {
                            btn.removeClass("btn-info").addClass("btn-secondary");
                            btn.find("i").html("mic");
                        }
                    }, this));

                    $('#btn_send_call').off('click').on('click', $.proxy(function (e) {
                        _this.requestRemoteAccount().done($.proxy(function (remoteAccount) {
                            //start calling via signal
                            if (remoteAccount !== "") {
                                _this.ringCalling(true);
                                $.when(rtc.init(channelName, false), _this.call(channelName, remoteAccount, true)).done($.proxy(function (stream, _) {
                                    _this.ringCalling(false);
                                    _this.rtc.rtc.publish(stream);
                                }, _this)).catch($.proxy(function (_) {
                                    _this.ringCalling(false);
                                    _this.endCall(signal.call_active || signal.call_holding, false);
                                }, _this));
                            }
                        }, _this));
                    }, this));

                    $('#message_to_send').off("keydown").on("keydown", function (e) {
                        if (e.keyCode == 13) {
                            e.preventDefault();
                            client.sendMessage($(this).val());
                            $(this).val("");
                        }
                    });
                    $('#btn_send_msg').off('click').on('click', function () {
                        client.sendMessage($('#message_to_send').val());
                        $('#message_to_send').val("");
                    });
                }

                //delegate callback when receiving call

            }, {
                key: 'onInviteReceived',
                value: function onInviteReceived(call) {
                    var _this2 = this;

                    var dialog = $(".calledModal");
                    var signal = this.signal;
                    var rtc = this.rtc;

                    dialog.find(".caller").html(call.peer);
                    dialog.find(".declineBtn").off("click").on("click", function (e) {
                        // dialog.modal('hide');
                        dialog.hide();
                        _this2.ringCalled(false);
                        signal.rejectCall(call, 0);
                    });

                    dialog.find(".acceptBtn").off("click").on("click", function (e) {
                        dialog.hide();
                        $(".startCallBtn").hide();
                        _this2.ringCalled(false);
                        signal.acceptCall(call).done(function (call) {
                            rtc.init(call.channelName, true);
                        }).catch(function (err) {
                            Logger.log('Accept call failed: ' + err);
                        });
                    });

                    this.ringCalled(true);
                    dialog.show();
                }

                //delegate callback called when call end by peer

            }, {
                key: 'onInviteEndByPeer',
                value: function onInviteEndByPeer() {
                    var signal = this.signal;
                    // $(".calledModal").modal('hide');
                    $(".calledModal").hide();
                    this.ringCalled(false);
                    this.endCall(signal.call_active || signal.call_holding, true);
                }
            }]);

            return Client;
        }();

        var appid = "e35545b1552e426d93a535a6e96385ff",
            appcert = "57fdba25dc7b406391424cc3cd5dc5de";
        var localAccount = Browser.getParameterByName("account");
        var remoteAccount = Browser.getParameterByName("remoteaccount");
        // let signal = new SignalingClient(appid);
        var signal = new SignalingClient(appid, appcert);
        var rtc = new RtcClient(appid);
        var client = new Client(signal, rtc, localAccount);
        var channelName = remoteAccount + Math.random() * 10000 + "";

        //by default call btn is disabled

        signal.login(localAccount).done(function (_) {
            //once logged in, enable the call btn
            $("#btn_send_call").css('background', 'cadetblue');
            signal.join('room_test_interview', 2);
        });
    });
})(jQuery);