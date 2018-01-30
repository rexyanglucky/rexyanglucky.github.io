'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignalingClient = function () {
    function SignalingClient(appid, appcertificate) {
        _classCallCheck(this, SignalingClient);

        this.signal = Signal(appid);
        this.channel = null;
        this.appid = appid;
        this.appcert = appcertificate;
        this.uid = null;
        this.localAccount = null;

        this.onMessageInstantReceive = null;
        this.onMessageChannelReceive = null;
    }

    _createClass(SignalingClient, [{
        key: 'login',
        value: function login(account) {
            var _this = this;

            var deferred = $.Deferred();
            var appid = this.appid;
            var appcert = this.appcert;
            Logger.log('Logging in ' + account);
            //starts login
            var session = this.signal.login(account, '_no_need_token');
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

            session.onLogout = $.proxy(function () {
                window.location.href = 'index.html';
            });

            session.onMessageInstantReceive = $.proxy(this._onMessageInstantReceive, this);
            this.session = session;
            this.localAccount = account;

            return deferred.promise();
        }
    }, {
        key: 'logout',
        value: function logout() {
            this.session.logout();
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(account, text) {
            this.session.messageInstantSend(account, text);
        }
    }, {
        key: 'broadcastMessage',
        value: function broadcastMessage(text) {
            this.channel && this.channel.messageChannelSend(text);
        }
    }, {
        key: 'join',
        value: function join(channelName) {
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

            channel.onMessageChannelReceive = $.proxy(this._onMessageChannelReceive, this);
            this.channel = channel;

            return deferred.promise();
        }
    }, {
        key: 'leave',
        value: function leave() {
            var _this2 = this;

            var deferred = $.Deferred();
            var channel = this.channel;

            if (channel === null) {
                return deferred.resolve().promise();
            }

            channel.onChannelLeaved = $.proxy(function (ecode) {
                Logger.log('channel.onChannelLeaved');
                _this2.channel = null;
                deferred.resolve();
            }, this);
            channel.channelLeave();
            return deferred;
        }
    }, {
        key: '_onMessageInstantReceive',
        value: function _onMessageInstantReceive(account, uid, msg) {
            if (this.onMessageInstantReceive) {
                this.onMessageInstantReceive(account, msg);
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