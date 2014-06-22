/**
 * User: Tomasz Witkowski
 * Date: 20/09/12
 * Time: 15:21
 */
(function (packageName) {
    "use strict";
    var EVENTS = {}, eventify, t, l;
    eventify = EVENTS.eventify = function (target1, targetN) {
        for (t = 0; t < arguments.length; t++) {
            var target = arguments[t];
            if (!target.__listeners) {
                if (!target.events) {target.events = {};}
                target.__listeners = {};
                target.dispatchEvent = function (eventType, eventData) {
                    if (this.events[eventType]) {this.events[eventType].dispatch(this, eventData);}
                    if (typeof(this.events['allEvents'])  !== 'undefined'){
                        if(typeof(eventData) === 'undefined'){
                            eventData = {};
                        }
                        this.events['allEvents'].orginEventType = eventType;
                        this.events['allEvents'].dispatch(this, eventData);
                    }
                };
                target.addEventListener = function (eventType, callback, bubbles) {
                    return new EVENTS.Listener(this, eventType, callback, bubbles);
                };
                target.removeEventListener = function (eventType, callback) {
                    var listeners = this.__listeners[eventType];
                    for (var l = 0; listeners && l < listeners.length; l++)
                        if (listeners[l] === callback || listeners[l].callback === callback) listeners.splice(l, 1);
                };
            }
        }
    };
    var Event = EVENTS.Event = function (type) {
        this.type = type;
        this.history = [];
        this.orginEventType = type;
    };
    Event.prototype = {
        bubbleTo: null,
        currentTarget: null,
        dispatch: function (target, eventData, currentTarget) {
            this.target = target;
            this.currentTarget = currentTarget || target;
            var timeStamp = new Date();
            this.timeStamp = timeStamp;
            this._stopProp = false;
            if (!currentTarget) {
                var histObj = {
                    eventData: eventData,
                    timeStamp: timeStamp
                };
            } else {
                var histObj = currentTarget.events[this.type].history[currentTarget.events[this.type].history.length - 1];
            }
            histObj.target = target;
            histObj.currentTarget = currentTarget || target;
            this.history.push(histObj);
            var listeners = target.__listeners[this.type],
                result;

            for (l = 0; listeners && l < listeners.length; l++) {
                var listener = listeners[l];
                if (eventData) {result = listener.callback.call(target, this, eventData);}
                else {result = listener.callback.call(target, this);}
                if (typeof (result) !== "undefined" && result !== null) {this.result = result;}
                if (this._stopImmProp) {break;}
            }
            if (this.bubbleTo !== null && !this._stopProp) this.bubbleTo.events[this.type].dispatch(this.bubbleTo, eventData, this.currentTarget);
        },
        result: true,
        _stopImmProp: false,
        stopImmediatePropagation: function () {
            this._stopImmProp = true
        },
        _stopProp: false,
        stopPropagation: function () {
            this._stopProp = true
        },
        target: null,
        type: null,
        history: null,
        toString: function(){
                return 'EventObject';
        }
    };
    var Listener = EVENTS.Listener = function (target, eventType, callback, bubbles) {
        this.target = target;
        this.callback = callback;
        this.bubbles = (bubbles !== null) ? bubbles : true;
        if (!target.events[eventType]) target.events[eventType] = this.event = new EVENTS.Event(eventType);
        this.event = target.events[eventType];
        if (!target.__listeners[eventType]) target.__listeners[eventType] = [];
        target.__listeners[eventType].push(this);
    };
    Listener.prototype = {
        bubbles: true,
        callback: function (evt, data) {},
        remove: function () {
            var idx = Array.indexOf(this.target.__listeners[this.event.type], this);
            this.target.__listeners[this.event.type].splice(idx, 1);
            delete this;
        },
        event: null,
        target: null
    };
    packageName.Events = EVENTS;
})(namespace('salvin.extensions'));
