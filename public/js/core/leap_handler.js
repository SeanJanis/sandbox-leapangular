//
// Handlers for Leap Motion event callbacks.
//
function LeapMotionHandler(params) {
    this._lm = params.controller ? params.controller : null;
    this._scope = params.scope ? params.scope : null;
}

LeapMotionHandler.prototype = {
    //
    // Register event listeners on the Leap Motion controllers
    //
    subscribeListeners: function() {
        if (!this._lm) {
            return;
        }

        this._lm.on('ready', this.onReady.bind(this));
        this._lm.on('connect', this.onConnected.bind(this));
        this._lm.on('deviceConnected', this.onDeviceConnected.bind(this));
        this._lm.on('deviceDisconnected', this.onDeviceDisconnected.bind(this));
        this._lm.connect();
    },

    onReady: function() {
        this.updateStatusUI("Ready");
    },

    onConnected: function() {
        this.updateStatusUI("Connected");
    },

    onDeviceConnected: function() {
        this.updateStatusUI("Device Connected");
    },

    onDeviceDisconnected: function() {
        this.updateStatusUI("Device Disconnected");
    },

    updateStatusUI: function(statusText) {
        console.log("status: " + statusText);
        this._scope.lmDeviceStatus = statusText;
        this._scope.$apply();
    }
};
