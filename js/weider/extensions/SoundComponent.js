/**
 * User: Tomasz Witkowski
 * Date: 07/02/13
 * Time: 14:44
 */
(function (packageName) {
    "use strict";
    var that, Sound;

    Sound = function () {
        that = this;
        var core = null,
            buzz = null,
            soundsSupported = false,
            soundReady = false,
            format = null,
            initialized = false,
            timerSound = null,
            events = ['abort','canplay','canplaythrough','dataunavailable','durationchange','emptied','empty','ended','error','loadeddata','loadedmetadata','loadstart','pause','play','playing','progress','ratechange','seeked','seeking','suspend','timeupdate','volumechange','waiting'];
        ;
        this.init = function (initObject) {
            initialized = true;
            core = initObject.core;
            buzz = initObject.buzz;
            if(core === null){
                throw new TypeError('Sound:Core is not defined');
            }
            if(buzz === null){
                throw new TypeError('Sound:Buzz is not defined');
            }
            if(buzz.isSupported()){
                if(buzz.isOGGSupported()){
                    //because this file is smaller
                    format = 'ogg';
                }else if(buzz.isAACSupported()){
                    format = 'aac';
                }else if(buzz.isMP3Supported()){
                    format = 'mp3';
                }
            }
//            alert('formtat'+format);
            if(format !== null){
                if(core.isDomReady()){
                    loadSound();
                }else{
                    core.addEventListener('DomReady', loadSound);
                }
            }
        };
        var loadSound = function(){
//            timerSound = new buzz.sound("http://dev.squashinlondon.com/sounds/alarm_beeps."+format,{
            timerSound = new buzz.sound("./sounds/alarm_beeps."+format,{
                preload: false,
                autoplay: false,
                loop: false
            });
            timerSound.load();
//            alert('after load');
            timerSound.bind('error', function(){
                alert("Error: " + this.getErrorMessage());
            });
            for(var i= 0, len = events.length;i<len;i+=1){
                var name = events[i];
                console.log('Bindind event: '+name);

                (function(){
                    var thisEventName = name;
                    timerSound.bind(name,function(){
                        core.dispatchEvent('CoreSound-'+thisEventName);
                    });
                }())
            }
            timerSound.bindOnce("canplaythrough", function(e) {
//                alert("canplaythrough");
                soundReady = true;
                timerSound.setVolume(30);
//                timerSound.setSpeed(4);

            });
        };

        this.soundsSupported = function(){
            return soundsSupported;
        };
        this.canPlay = function(){
            return soundReady;
        };
        this.initialized = function(){
            return initialized;
        };

        this.play = function(){
            if(soundReady){
                timerSound.play();
            }
        };
        this.stop = function(){
            if(soundReady){
                timerSound.stop();
            }
        };
        return this;
    };
    packageName.Sound = Sound;
    packageName.Sound.prototype.toString = function() {return 'Sound Object';};

})(namespace('salvin.weider'));