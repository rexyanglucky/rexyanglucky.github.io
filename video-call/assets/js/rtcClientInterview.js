'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RtcClient = function () {
    function RtcClient(appid) {
        _classCallCheck(this, RtcClient);

        this.appid = appid;
        this.rtc = AgoraRTC.createClient({ mode: 'interop' });
        this.localStream = null;
        this.uid = null;
        this.remoteStreams = [];
        this.videoProfile = "720p_6";
        this.dynamicKey = null;
        this.published = false;
        this.muted = false;

        this.subscribeWindowResizeEvent();
        this.subscribeStreamEvents();
    }

    //life cycle


    _createClass(RtcClient, [{
        key: 'init',
        value: function init(channelName, autoPublish) {
            var _this = this;

            var deferred = $.Deferred();
            var appid = this.appid;
            var uid = this.uid;
            var client = this.rtc;
            this.getDynamicKey(channelName).then($.proxy(function (key) {
                client.init(appid, $.proxy(function (_) {
                    client.join(key, channelName, undefined, $.proxy(function (uid) {
                        var options = {
                            streamID: uid,
                            audio: true,
                            video: true,
                            screen: false
                        };
                        _this.uid = uid;
                        var localStream = AgoraRTC.createStream(options);
                        localStream.setVideoProfile(_this.videoProfile);

                        _this.localStream = localStream;

                        localStream.init($.proxy(function (_) {
                            _this.rearrangeStreams();
                            if (autoPublish) {
                                client.publish(localStream);
                            }
                            deferred.resolve(localStream);
                        }, _this));
                    }, _this), function (err) {
                        deferred.reject(err);
                    });
                }, _this));
            }, this));

            return deferred.promise();
        }
    }, {
        key: 'end',
        value: function end() {
            var deferred = $.Deferred();
            var client = this.rtc;
            var localStream = this.localStream;

            if (localStream === null) {
                return deferred.resolve().promise();
            }

            this.clearStreams();

            if (this.published) {
                client.unpublish(this.localStream);
                this.published = false;
            }
            localStream.close();
            this.localStream = null;

            this.remoteStreams = [];

            client.leave(function (_) {
                deferred.resolve();
            }, function (_) {
                deferred.reject();
            });
            return deferred;
        }
    }, {
        key: 'applyMute',
        value: function applyMute() {
            var localStream = this.localStream;

            if (localStream !== null) {
                if (this.muted) {
                    localStream.disableAudio();
                } else {
                    localStream.enableAudio();
                }
            }
        }
    }, {
        key: 'toggleMute',
        value: function toggleMute() {
            this.muted = !this.muted;
            this.applyMute();
        }

        //events

    }, {
        key: 'subscribeWindowResizeEvent',
        value: function subscribeWindowResizeEvent() {
            var _this2 = this;

            var videoSize = void 0;
            $(window).resize($.proxy(function (e) {
                videoSize = _this2.calculateStreamSize();
                if (_this2.localStream !== null) {
                    _this2.resizeStream(_this2.localStream, videoSize);
                }
            }, this));
        }
    }, {
        key: 'subscribeStreamEvents',
        value: function subscribeStreamEvents() {
            var _this3 = this;

            var client = this.rtc;
            client.on('stream-added', function (evt) {
                var stream = evt.stream;
                Logger.log("New stream added: " + stream.getId());
                Logger.log("Timestamp: " + Date.now());
                Logger.log("Subscribe ", stream);
                client.subscribe(stream, function (err) {
                    Logger.log("Subscribe stream failed", err);
                });
            });

            client.on('peer-leave', $.proxy(function (evt) {
                Logger.log("Peer has left: " + evt.uid);
                Logger.log("Timestamp: " + Date.now());
                Logger.log(evt);

                _this3.removeRemoteStream(evt.uid);
                _this3.rearrangeStreams();
            }, this));

            client.on('stream-subscribed', $.proxy(function (evt) {
                var stream = evt.stream;
                Logger.log("Got stream-subscribed event");
                Logger.log("Timestamp: " + Date.now());
                Logger.log("Subscribe remote stream successfully: " + stream.getId());
                Logger.log(evt);
                _this3.addRemoteStream(stream);
                _this3.rearrangeStreams();
            }, this));

            client.on("stream-removed", function (evt) {
                var stream = evt.stream;
                Logger.log("Stream removed: " + evt.stream.getId());
                Logger.log("Timestamp: " + Date.now());
                Logger.log(evt);
                _this3.removeRemoteStream(stream.getId());
                _this3.rearrangeStreams();
            });

            client.on('stream-published', $.proxy(function (evt) {
                _this3.published = true;
            }, this));
        }
    }, {
        key: 'rearrangeStreams',
        value: function rearrangeStreams() {
            var remoteStreams = this.remoteStreams;
            var localStream = this.localStream;
            this.clearStreams();

            if (localStream === null) {
                return;
            }

            Logger.log('Rearranging streams, local:' + localStream.getId() + ', remote: ' + (remoteStreams.length === 0 ? "NONE" : remoteStreams[0].id));

            if (remoteStreams.length === 0) {
                this.displayStream($("#media_warp"), localStream, "fullscreen");
            } else if (remoteStreams.length === 1) {
                this.displayStream($("#media_warp"), remoteStreams[0].stream, "fullscreen");
            }
            this.displayStream($("#media_warp"), localStream, "side");
        }

        //utils

    }, {
        key: 'clearStreams',
        value: function clearStreams() {
            $("[role=stream]").remove();
        }
    }, {
        key: 'addRemoteStream',
        value: function addRemoteStream(stream) {
            this.remoteStreams.push({
                stream: stream,
                id: stream.getId()
            });
        }
    }, {
        key: 'removeRemoteStream',
        value: function removeRemoteStream(streamId) {
            this.remoteStreams = this.remoteStreams.filter(function (item) {
                return item.id !== streamId;
            });
        }
    }, {
        key: 'resizeStream',
        value: function resizeStream(stream, size) {

            $("#" + stream.getId()).css({
                width: size.width + 'px',
                height: size.height + 'px'
            });
        }
    }, {
        key: 'displayStream',
        value: function displayStream(container, stream, mode) {
            // cleanup, if network connection interrupted, user cannot receive any events.
            // after reconnecting, the same node id is reused,
            // so remove html node with same id if exist.
            $('#' + stream.getId()).remove();
            container.append('<div id="' + stream.getId() + '" class="' + (stream === this.localStream ? "agora-local" : "agora_remote") + '" role="stream" data-stream-id="' + stream.getId() + '"></div>');

            if (mode === "fullscreen") {
                var size = this.calculateStreamSize();

                $("#" + stream.getId()).css({
                    width: size.width + 'px',
                    height: size.height + 'px'
                });
            } else {
                $("#" + stream.getId()).removeClass("side_stream").addClass("side_stream");
                $("#" + stream.getId()).css({
                    width: '160px',
                    height: '120px'
                });
            }
            stream.play(stream.getId());
        }
    }, {
        key: 'getDynamicKey',
        value: function getDynamicKey(channelName) {
            // if dynamic not enabled
            return new $.Deferred().resolve(undefined).promise();

            // if dynamic key enabled
            // return $.ajax({
            //     url: 'service url to get your dynamic key'
            // })
        }
    }, {
        key: 'getResolutionArray',
        value: function getResolutionArray(reso) {
            switch (reso) {
                case "120p":
                    return [160, 120];
                case "240p":
                    return [320, 240];
                case "360p":
                    return [640, 360];
                case "480p":
                    return [640, 480];
                case "720p":
                    return [1280, 720];
                case "1080p":
                    return [1920, 1080];
                default:
                    return [1280, 720];
            }
        }
    }, {
        key: 'calculateStreamSize',
        value: function calculateStreamSize() {
            var viewportWidth = $(window).width(),
                viewportHeight = $(window).height(),
                curResolution = this.getResolutionArray(this.videoProfile),
                width = void 0,
                height = void 0,
                newWidth = void 0,
                newHeight = void 0,
                ratioWindow = void 0,
                ratioVideo = void 0;

            width = viewportWidth - 100;
            height = viewportHeight - 80;
            ratioWindow = width / height;
            ratioVideo = curResolution[0] / curResolution[1];
            if (ratioVideo > ratioWindow) {
                // calculate by width
                newWidth = width;
                newHeight = width * curResolution[1] / curResolution[0];
            } else {
                // calculate by height
                newHeight = height;
                newWidth = height * curResolution[0] / curResolution[1];
            }

            newWidth = Math.max(newWidth, 160);
            newHeight = Math.max(newHeight, 120);
            return {
                width: newWidth,
                height: newHeight
            };
        }
    }]);

    return RtcClient;
}();