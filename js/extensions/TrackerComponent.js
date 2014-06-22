/**
 * User: Tomasz Witkowski
 * Date: 14/03/13
 * Time: 15:42
 */
(function (packageName) {
    "use strict";
    var that, GATracker;

    GATracker = function () {
        that = this;
        var core = null,
            ga = null,
            gaReady = false,
            gaTimer = null,
            startTimer = function(){
                gaTimer = setInterval(timerAction,1000);
            },
            timerAction = function(){
                if(typeof(_gaq) !== 'undefined'){
                    ga = _gaq;
                    gaReady = true;
                    stopTimer();
                }
            },
            stopTimer = function(){
                clearInterval(gaTimer);
            }
        ;
        this.init = function (initObject) {
            core = initObject.core;
            ga = _gaq;
            if(core === null){
                throw new TypeError('GATracker:Core is not defined');
            }
            if(ga === null || typeof(ga) === 'undefined'){
                console.log('GA not ready yet. Starting timer.');
                startTimer();
            }else{
                gaReady = true;
            }
        };
        this.trackEvent = function(category, action, opt_label, opt_value, opt_noninteraction){
            if(!gaReady){ console.log('GA not ready yet.'); return;}
            opt_value = (typeof opt_value !== 'undefined')?opt_value:0;
            opt_noninteraction = (typeof opt_noninteraction !== 'undefined')?opt_noninteraction:true;
            opt_label = (typeof opt_label !== 'undefined')?opt_label:'';
            _gaq.push(['_trackEvent', category, action, opt_label, opt_value, opt_noninteraction]);
        };

        return this;
    };
    packageName.Tracker = GATracker;
    packageName.Tracker.prototype.toString = function() {return 'Tracker Object';};

})(namespace('salvin.extensions'));