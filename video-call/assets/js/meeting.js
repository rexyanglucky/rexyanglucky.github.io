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

                this.subscribeEvents();
            }

            //return a promise resolves a remote account name


            _createClass(Client, [{
                key: 'requestRemoteAccount',
                value: function requestRemoteAccount() {
                    var deferred = $.Deferred();
                    var dialog = $(".remoteAccountModal");
                    var accountField = dialog.find(".remoteAccountField");
                    var localAccount = this.localAccount;

                    dialog.find(".callBtn").off("click").on("click", function (e) {
                        //dialog confirm
                        var account = $(".remoteAccountField").val();

                        if (!account) {
                            $(".remoteAccountField").siblings(".invalid-feedback").html("Valid account should be a non-empty numeric value.");
                            $(".remoteAccountField").removeClass("is-invalid").addClass("is-invalid");
                        } else if ('' + account === '' + localAccount) {
                            $(".remoteAccountField").siblings(".invalid-feedback").html("You can't call yourself.");
                            $(".remoteAccountField").removeClass("is-invalid").addClass("is-invalid");
                        } else {
                            $(".startCallBtn").hide();
                            dialog.modal('hide');
                            deferred.resolve(account);
                        }
                    });

                    //start modal
                    dialog.modal({ backdrop: "static", focus: true });

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
                        dialog.modal('hide');
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

                    $(".startCallBtn").show();

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

                    $(".startCallBtn").off("click").on("click", $.proxy(function (e) {
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
                        dialog.modal('hide');
                        _this2.ringCalled(false);
                        signal.rejectCall(call, 0);
                    });

                    dialog.find(".acceptBtn").off("click").on("click", function (e) {
                        dialog.modal('hide');
                        $(".startCallBtn").hide();
                        _this2.ringCalled(false);
                        signal.acceptCall(call).done(function (call) {
                            rtc.init(call.channelName, true);
                        }).catch(function (err) {
                            Logger.log('Accept call failed: ' + err);
                        });
                    });

                    this.ringCalled(true);
                    dialog.modal({ backdrop: "static" });
                }

                //delegate callback called when call end by peer

            }, {
                key: 'onInviteEndByPeer',
                value: function onInviteEndByPeer() {
                    var signal = this.signal;
                    $(".calledModal").modal('hide');
                    this.ringCalled(false);
                    this.endCall(signal.call_active || signal.call_holding, true);
                }
            }]);

            return Client;
        }();

        var appid = "e35545b1552e426d93a535a6e96385ff",
            appcert = "57fdba25dc7b406391424cc3cd5dc5de";
        var localAccount = Browser.getParameterByName("account");
        // let signal = new SignalingClient(appid);
        var signal = new SignalingClient(appid, appcert);
        var rtc = new RtcClient(appid);
        var client = new Client(signal, rtc, localAccount);
        var channelName = Math.random() * 10000 + "";
        //by default call btn is disabled

        signal.login(localAccount).done(function (_) {
            //once logged in, enable the call btn
            $(".startCallBtn").prop("disabled", false);
        });
    });
})(jQuery);