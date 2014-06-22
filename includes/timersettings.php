<?php
/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 16:29
 */
include $lang.'/timersettingsVars.php';
?>


<a name="settings"></a>
<div class="row">
    <h2 class="span12"><?php echo $tsTitle ;?></h2>
    <div class="span6">
        <div class="row">
            <div class="input-prepend input-append numericStepper ind">
                <label for="sessionInterval" class="span2"><?php echo $tsSeries ;?></label>
                <button class="btn" id="sessionInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                <input class="span1" id="sessionInterval" type="text">
                <button class="btn" id="sessionInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
            </div>
            <div class="input-prepend input-append numericStepper ind">
                <label for="exerciseInterval" class="span2"><?php echo $tsExercise ;?></label>
                <button class="btn" id="exerciseInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                <input class="span1" id="exerciseInterval" type="text">
                <button class="btn" id="exerciseInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
            </div>
            <div class="input-prepend input-append numericStepper ind">
                <label for="repeatInterval" class="span2"><?php echo $tsRepeat ;?></label>
                <button class="btn" id="repeatInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                <input class="span1" id="repeatInterval" type="text">
                <button class="btn" id="repeatInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
            </div>
        </div>
    </div>
    <div class="span6">
        <div class="row">
            <label><?php echo $tsDisp ;?></label>
            <div class="btn-group">
                <button class="btn" id="timeElapsed"><?php echo $tsDispElapsed ;?></button>
                <button class="btn  btn-primary" id="timeLeft"><?php echo $tsDispLeft ;?></button>
            </div>
        </div>
        <div class="row">
            <label><?php echo $tsSoundTitle ;?></label>
            <div class="btn-group">
                <button class="btn" id="soundYes"><?php echo $tsSoundYes ;?></button>
                <button class="btn  btn-primary" id="soundNo"><?php echo $tsSoundNo ;?></button>
            </div>
        </div>
    </div>
</div>