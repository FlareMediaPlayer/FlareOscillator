'use strict';
/**
 * Part of the FlareMediaPlayer Project
 * 
 * visit www.FlareMediaPlayer.com
 * Contact develop@brianparra.com
 */
class FlareOscillator{

    constructor() {

        this.running = false;
        this._this = this;
        this.updateFunctions = {};

    }

    run() {

        var _this = this;
        this._loopFunction = function (time) {
            return _this.updateRequestAnimationFrame(time);
        };
        this.running = true;
        this._eventId = window.requestAnimationFrame(this._loopFunction);

    }

    /**
     * Stop running the update loop
     * @function stop
     */
    stop() {

        window.cancelAnimationFrame(this._eventId);
        this.running = false;

    }

    /**
     * This is the loop function using RequestAnimationFrame
     * Perform update logic here
     * @param {number} time update time
     * @function updateRequestAnimationFrame
     */
    updateRequestAnimationFrame(time) {

        //console.log(time);

        this._eventId = window.requestAnimationFrame(this._loopFunction);
        //this.updateFunction.call();
        for (var updateFunction in this.updateFunctions) {
            this.updateFunctions[updateFunction].call();
        }

    }
    
    registerUpdateFunction(updateFunction) {

        this.updateFunctions[updateFunction] = updateFunction;

    }

};

module.exports = FlareOscillator;