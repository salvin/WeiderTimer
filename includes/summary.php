<?php
/**
 * User: Tomasz Witkowski
 * Date: 13/10/13
 * Time: 16:29
 */
include $lang.'/summaryVars.php';
?>


<a name="summary"></a>
<div class="">
    <h2><?php echo $sumTitle ;?></h2>

    <div class="row sessionSummary">
                <span class="span12">

                    <span class="ind"><?php echo $sumSeries ;?></span>
                    <span class="btn" id="ser">0</span>
                    <span class=""></span>
                </span>
                <span class="span12">

                        <span class="ind"><?php echo $sumRepeats ;?></span>
                        <span class="btn" id="rep">0</span>
                        <span class=""></span>

                </span>
                <span class="span12">
                    <span class="ind"><?php echo $sumDuration ;?></span>
                    <span class="btn" id="dur">0</span>
                    <span class=""></span>
                </span>
    </div>
</div>