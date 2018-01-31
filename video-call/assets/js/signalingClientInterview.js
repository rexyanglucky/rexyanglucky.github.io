'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignalingClient = function () {
    function SignalingClient(appid) {
        _classCallCheck(this, SignalingClient);

        this.signal = Signal(appid);
        this.call_holding = null;
        this.call_active = null;
        this.channel = null;
        this.appid = appid;
        this.uid = null;

        this.onInviteReceived = null;
        this.onInviteEndByPeer = null;
        this.onMessageChannelReceive = null;
    }

    _createClass(SignalingClient, [{
        key: 'login',
        value: function login(account) {
            var _this = this;

            var deferred = $.Deferred();
            var appid = this.appid;
            this.localAccount = account;
            Logger.log('Logging in ' + account);
            //starts login
            var session = this.signal.login(account, "_no_need_token");

            //if success
            session.onLoginSuccess = $.proxy(function (uid) {
                Logger.log('login success ' + uid);
                _this.uid = uid;
                deferred.resolve();
            }, this);

            //if fail
            session.onLoginFailed = $.proxy(function (ecode) {
                Logger.log('login failed ' + ecode);
                _this.session = null;
                deferred.reject();
            }, this);

            session.onInviteReceived = $.proxy(this._onInviteReceived, this);
            this.session = session;

            return deferred.promise();
        }
    }, {
        key: 'call',
        value: function call(channelName, peer, require_peer_online) {
            var _this2 = this;

            var deferred = $.Deferred();
            var extra = {};

            if (require_peer_online) {
                extra["_require_peer_online"] = 1;
            }

            var extra_msg = JSON.stringify(extra);

            Logger.log('call ' + peer + ' , channelName : ' + channelName + ', extra : ' + extra_msg);

            var call = this.session.channelInviteUser2(channelName, peer, extra_msg);

            call.onInviteAcceptedByPeer = $.proxy(function (extra) {
                _this2.call_active = _this2.call_holding;
                _this2.call_holding = null;
                _this2.join(call.channelName).then(function (_) {
                    Logger.log('call.onInviteAcceptedByPeer ' + extra);
                    deferred.resolve();
                });
            }, this);

            call.onInviteRefusedByPeer = $.proxy(function (extra) {
                Logger.log('call.onInviteRefusedByPeer ' + extra);
                var status = JSON.parse(extra).status;
                deferred.reject({ reason: 'Call refused. ' + _this2.statusText(status) });
            }, this);

            call.onInviteFailed = $.proxy(function (extra) {
                Logger.log('call.onInviteFailed ' + extra);
                deferred.reject({ reason: 'Invite failed: ' + JSON.parse(extra).reason });
            }, this);

            call.onInviteEndByPeer = $.proxy(this._onInviteEndByPeer, this);

            this.call_holding = call;

            return deferred.promise();
        }

        /**
         * 
         * @param {string} channelName 
         * @param {number} type 2 初始加载频道
         */

    }, {
        key: 'join',
        value: function join(channelName, type) {
            var deferred = $.Deferred();
            Logger.log('Joining channel ' + channelName);

            var channel = this.session.channelJoin(channelName);
            channel.onChannelJoined = function (_) {
                Logger.log('channel.onChannelJoined');
                deferred.resolve();
            };

            channel.onChannelJoinFailed = function (ecode) {
                Logger.log('channel.onChannelJoinFailed ' + ecode);
                deferred.reject(ecode);
            };
            // if (type&&type === 2) {
            channel.onMessageChannelReceive = $.proxy(this._onMessageChannelReceive, this);
            // }
            this.channel = channel;

            return deferred.promise();
        }
    }, {
        key: 'leave',
        value: function leave() {
            var _this3 = this;

            var deferred = $.Deferred();
            var channel = this.channel;

            if (channel === null) {
                return deferred.resolve().promise();
            }

            channel.onChannelLeaved = $.proxy(function (ecode) {
                Logger.log('channel.onChannelLeaved');
                _this3.channel = null;
                deferred.resolve();
            }, this);
            channel.channelLeave();
            return deferred;
        }
    }, {
        key: 'acceptCall',
        value: function acceptCall(call) {
            var deferred = $.Deferred();
            this.call_active = this.call_holding;
            this.call_holding = null;
            if (this.channel) {
                this.channel.channelSetAttr('name', call.channelName, function () {});
                call.channelInviteAccept();
            } else {
                this.join(call.channelName).done(function (_) {
                    call.channelInviteAccept();
                    deferred.resolve({
                        peer: call.peer,
                        channelName: call.channelName
                    });
                }).catch(function (err) {
                    deferred.reject(err);
                });
            }

            return deferred.promise();
        }
    }, {
        key: 'rejectCall',
        value: function rejectCall(call, status) {
            var deferred = $.Deferred();
            status = status || 0;
            call.channelInviteRefuse(JSON.stringify({ status: status }));
            return deferred.resolve().promise();
        }
    }, {
        key: 'endCall',
        value: function endCall(call, passive) {
            var _this4 = this;

            var deferred = $.Deferred();
            var channel = this.channel;

            call.onInviteEndByMyself = $.proxy(function (extra) {
                Logger.log('call.onInviteEndByMyself ' + extra);
                _this4.call_holding = _this4.call_holding === call ? null : _this4.call_holding;
                _this4.call_active = _this4.call_active === call ? null : _this4.call_active;
                _this4.leave();
            }, this);

            if (!passive) {
                call.channelInviteEnd();
            } else {
                this.call_active = null;
                this.call_holding = null;
            }
            return deferred.promise();
        }
    }, {
        key: 'statusText',
        value: function statusText(status) {
            switch (status) {
                case 0:
                    return "Peer rejected.";
                case 1:
                    return "Peer is busy.";
            }
        }
    }, {
        key: 'broadcastMessage',
        value: function broadcastMessage(text) {
            this.channel && this.channel.messageChannelSend(text);
        }

        //session events delegate

    }, {
        key: '_onInviteReceived',
        value: function _onInviteReceived(call) {
            Logger.log('recv invite from ' + call.peer + ', ' + call.channelName + ', ' + call.extra);

            //incoming call for accept or refuse
            if (this.call_active !== null) {
                //busy
                this.rejectCall(call, 1);
            } else {
                call.onInviteEndByPeer = $.proxy(this._onInviteEndByPeer, this);
                this.call_holding = call;
                if (this.onInviteReceived !== null) {
                    this.onInviteReceived(call);
                }
            }
        }

        //call events delegate

    }, {
        key: '_onInviteEndByPeer',
        value: function _onInviteEndByPeer(extra) {
            Logger.log('call.onInviteEndByPeer ' + extra);
            if (this.onInviteEndByPeer !== null) {
                this.onInviteEndByPeer();
            }
        }
    }, {
        key: '_onMessageChannelReceive',
        value: function _onMessageChannelReceive(account, uid, msg) {
            if (this.onMessageChannelReceive && this.localAccount !== account) {
                this.onMessageChannelReceive(this.channel.name, msg);
            }
        }
    }]);

    return SignalingClient;
}();