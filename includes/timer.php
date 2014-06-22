<?php
/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 16:29
 */
include $lang.'/timerVars.php';
?>


<a name="timer"></a>
<div class="row">
    <h2 class="span12 ind"><?php echo $tiTitle ;?></h2>
    <div class="span12" id="timerRoot">
        <div class="row">
            <div class="span12" id="mobileUserInfo">In order to hear the timer sounds please enable 'Play Sound' option in the Timer Settings section before you start.</div>
            <div class="span4">
                <div class="excerciseImg"></div>
            </div>
            <div class="mainTimer span4"><span id="mainTimer">5</span>s</div>
            <div class="span4">
                <div class="displayMode elapsed row hidden">
                    <h3 class="span12"><?php echo $tiDone ;?>:</h3>
                    <div class="span4"><div><span class="btn" id="currentSeries"></span> <?php echo $tisdone ;?></div></div>
                    <div class="span4"><div><span class="btn" id="currentExercise"></span> <?php echo $tiedone ;?></div></div>
                    <div class="span4"><div><span class="btn" id="currentRepeat"></span> <?php echo $tirdone ;?></div></div>
                </div>
                <div class="displayMode togo row">
                    <h3 class="span12"><?php echo $tileft ;?>:</h3>
                    <div class="span4"><div><span class="btn" id="seriesToGo"></span> <?php echo $tisleft ;?></div></div>
                    <div class="span4"><div><span class="btn" id="exerciseToGo"></span> <?php echo $tieleft ;?></div></div>
                    <div class="span4"><div><span class="btn" id="repeatsToGo"></span> <?php echo $tirleft ;?></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="timerControls row">
        <div class="span12 offset4">
            <button class="btn btn-large btn-primary" type="button" id="ctrlStart"><?php echo $tiStart ;?></button>
            <button class="btn btn-large btn-primary disabled" type="button" id="ctrlPause"><?php echo $tiPause ;?></button>
            <button class="btn btn-large btn-primary disabled" type="button" id="ctrlReset"><?php echo $tiReset ;?></button>
            <div class="fb-like" data-href="http://weidersix.com" data-width="120" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
        </div>
    </div>
</div>