<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo __t('Weider\'s Six Timer', $l); ?></title>
    <meta name="description" content="<?php echo __t('Weider\'s Six A6W Workuot Free Online Timer.', $l); ?>">
    <meta name="viewport" content="width=device-width">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        body {
            padding-top: 60px;
            padding-bottom: 40px;
        }
    </style>
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css">
    <link rel="stylesheet" href="css/main.css">

    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body>
<!--[if lt IE 7]>
<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
<![endif]-->

<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="#"><?php echo __t('Weider\'s Six', $l); ?></a>
            <div class="nav-collapse collapse">
                <ul class="nav">
                    <li><a href="#about"><?php echo __t('About', $l); ?></a></li>
                    <li><a href="#settings"><?php echo __t('Settings', $l); ?></a></li>
                    <li><a href="#summary"><?php echo __t('Session Summary', $l); ?></a></li>
                    <li><a href="#timer"><?php echo __t('Timer', $l); ?></a></li>
                    <li><a href="#links"><?php echo __t('Links', $l); ?></a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </div>
</div>

<div class="container">
<h1><?php echo __t('Weider\'s six (A6W) workout <strong>timer</strong>', $l); ?></h1>
<section class="about">
    <a name="about"></a>
    <div class="">
        <h2><?php echo __t('About Weider\'s Six Training', $l); ?></h2>
        <p><?php echo __t('Weider six (A6W) is an ABS traing. If you want to have a flat stomach or a 6 pack this is the workout for you!!', $l); ?></p>


        <p><?php echo __t('Each training session consists of 6 exercises each of which is repeated the number of times assigned for the day
            performed everyday for 42 days (6weeks).
            The training comes in two variants - 42 and 48 day. The later one allows you to workout for 6 days and have one day brake.
            However, every few days the number of repetitions in each set will increase, therefore making it more challenging for you and your muscles.', $l); ?></p>

        <h3><?php echo __t('Weider Six - exercise 1', $l); ?></h3>
        <p><?php echo __t('Lay down on your back with your hands flat on the ground along your body.
            Lift one of your legs to reach an angle of 90 degrees between your upper body and your thigh as well as between your thigh and calf.
            Slightly lift your shoulders and reach with your arms to your knee. Hold in that position until timer runs out and you hear a beep (approx 3 sec).
            Swap your legs and repeat.', $l); ?></p>

        <h3><?php echo __t('Weider Six - exercise 2', $l); ?></h3>
        <p><?php echo __t('Lay down on your back with your hands flat on the ground along your body.
            Lift both of your legs to reach an angle of 90 degrees just like in previous exercise.
            Slightly lift your shoulders and reach with your arms to your knee.
            Hold in that position until timer runs out and you hear a beep (approx 3 sec).
            Swap your leg and repeat.', $l); ?></p>

        <h3>Weider Six - exercise 3</h3>
        <p>Put your hands behind your head but bare in mind not to push your head and neck forward.
            Keep your elbows wide open and lift your shoulders.
            Lift one of your legs to reach an angle of 90 degrees between your upper body and your thigh as well as between your thigh and calf.
            Hold in that position until timer runs out and you hear a beep (approx 3 sec).
            Swap your leg and repeat.</p>

        <h3>Weider Six - exercise 4 </h3>
        <p>Put your hands behind your head but bare in mind not to push your head and neck forward.
            Keep your elbows wide open and lift your shoulders.
            Lift both of your legs to get 90 degree angles.
            Hold in that position until timer runs out and you hear a beep (approx 3 sec).
        </p>

        <h3>Weider Six - exercise 5 </h3>
        <p>Put your hands behind your head but bare in mind not to push your head and neck forward.
            Keep your elbows wide open and lift your shoulders.
            Lift one of your legs to reach an angle of 90 degrees between your upper body and your thigh as well as between your thigh and calf.
            Hold in that position until timer runs out and you hear a beep (approx 3 sec).
            Swap your leg but this time keep you leg up just a few centimeters above the floor.</p>

        <h3>Weider Six - exercise 6 </h3>
        <p>Put your hand behind your head but bare in mind not to push your head and neck forward.
            Keep your elbows wide open and lift your shoulders.
            Straighten your legs and lift your feet up to 45 degree angle.
            Hold in that position until timer runs out and you hear a beep (approx 3 sec).
        </p>
    </div>
</section>

<section class="basicSettings">
    <a name="basicSettings"></a>
    <div class="">
        <h2>Basic Settings</h2>
        <div class="row">
            <div class="span6">
                <label for="currentDay">Workout day</label>
                <select class="span2" id="currentDay">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                    <option class="sixDaySchedule addline" disabled>43</option>
                    <option class="sixDaySchedule addline" disabled>44</option>
                    <option class="sixDaySchedule addline" disabled>45</option>
                    <option class="sixDaySchedule addline" disabled>46</option>
                    <option class="sixDaySchedule addline" disabled>47</option>
                    <option class="sixDaySchedule addline" disabled>48</option>
                </select>
            </div>
            <div class="span6">
                <label>Training programme</label>
                <div class="btn-group span1">
                    <button class="btn" id="days6">6</button>
                    <button class="btn  btn-primary" id="days7">7</button>
                </div>
                <span class="span2"> days a week</span>
            </div>
        </div>
    </div>
</section>


<section class="about">
    <a name="summary"></a>

    <div class="">
        <h2>Session Summary</h2>

        <div class="row sessionSummary">
                <span class="span12">

                    <span class="ind">Series</span>
                    <span class="btn" id="ser">0</span>
                    <span class=""></span>
                </span>
                <span class="span12">

                        <span class="ind">Repeats</span>
                        <span class="btn" id="rep">0</span>
                        <span class=""></span>

                </span>
                <span class="span12">
                    <span class="ind">Duration</span>
                    <span class="btn" id="dur">0</span>
                    <span class=""></span>
                </span>
        </div>
    </div>
</section>

<section class="ads">
    <div class="" id="topad">
        <script type="text/javascript"><!--
            google_ad_client = "ca-pub-8831880020519536";
            /* weiderTimer */
            google_ad_slot = "5341486721";
            google_ad_width = 728;
            google_ad_height = 90;
            //-->
        </script>
        <script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
    </div>
</section>

<section class="about">
    <a name="timer"></a>
    <div class="row">
        <h2 class="span12 ind">Timer</h2>
        <div class="span12" id="timerRoot">
            <div class="row">
                <div class="span4">
                    <div class="displayMode elapsed row hidden">
                        <h3 class="span12">Done:</h3>
                        <div class="span4"><div><span class="btn" id="currentSeries"></span> series done</div></div>
                        <div class="span4"><div><span class="btn" id="currentExercise"></span> exercises done</div></div>
                        <div class="span4"><div><span class="btn" id="currentRepeat"></span> repeats done</div></div>
                    </div>
                    <div class="displayMode togo row">
                        <h3 class="span12">Left:</h3>
                        <div class="span4"><div><span class="btn" id="seriesToGo"></span> series left</div></div>
                        <div class="span4"><div><span class="btn" id="exerciseToGo"></span> exercises left</div></div>
                        <div class="span4"><div><span class="btn" id="repeatsToGo"></span> repeats left</div></div>
                    </div>
                </div>
                <div class="mainTimer span8"><span id="mainTimer">6</span>s</div>
            </div>
        </div>
        <div class="timerControls row">
            <div class="span12 offset4">
                <button class="btn btn-large btn-primary" type="button" id="ctrlStart">Start</button>
                <button class="btn btn-large btn-primary disabled" type="button" id="ctrlPause">Pause</button>
                <button class="btn btn-large btn-primary disabled" type="button" id="ctrlReset">Reset</button>
            </div>
        </div>
    </div>
</section>

<section class="timerSettings">
    <a name="settings"></a>
    <div class="row">
        <h2 class="span12">Timer Settings</h2>
        <div class="span6">
            <div class="row">
                <div class="input-prepend input-append numericStepper ind">
                    <label for="sessionInterval" class="span2">Series Interval</label>
                    <button class="btn" id="sessionInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                    <input class="span1" id="sessionInterval" type="text">
                    <button class="btn" id="sessionInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
                </div>
                <div class="input-prepend input-append numericStepper ind">
                    <label for="exerciseInterval" class="span2">Exercise Interval</label>
                    <button class="btn" id="exerciseInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                    <input class="span1" id="exerciseInterval" type="text">
                    <button class="btn" id="exerciseInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
                </div>
                <div class="input-prepend input-append numericStepper ind">
                    <label for="repeatInterval" class="span2">Repeat Interval</label>
                    <button class="btn" id="repeatInterval-minus" type="button"><i class="icon-minus-sign"></i></button>
                    <input class="span1" id="repeatInterval" type="text">
                    <button class="btn" id="repeatInterval-plus"  type="button"><i class="icon-plus-sign"></i></button>
                </div>
            </div>
        </div>
        <div class="span6">
            <div class="row">
                <label>Display time/repeats</label>
                <div class="btn-group">
                    <button class="btn" id="timeElapsed">Elapsed</button>
                    <button class="btn  btn-primary" id="timeLeft">Left</button>
                </div>
            </div>
            <div class="row">
                <label>Play sound</label>
                <div class="btn-group">
                    <button class="btn btn-primary" id="soundYes">Yes</button>
                    <button class="btn" id="soundNo">No</button>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="ads">
    <div id="bottomad">
        <script type="text/javascript"><!--
            google_ad_client = "ca-pub-8831880020519536";
            /* weiderTimer-bottom */
            google_ad_slot = "8294953123";
            google_ad_width = 728;
            google_ad_height = 90;
            //-->
        </script>
        <script type="text/javascript"
                src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
        </script>
    </div>
</section>
<section class="comments">
    <div class="fb-comments" data-href="http://weidersix.com" data-width="470" data-num-posts="10"></div>
</section>

<hr>

<footer>
    <p>&copy; 2013 <a href="https://plus.google.com/113554707557454153853" rel="publisher">Google+</a></p>

</footer>

</div> <!-- /container -->
<script>
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-38600665-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.8.3.min.js"><\/script>')</script>
<script src="http://connect.facebook.net/en_US/all.js"></script>
<!--<script src="js/weider.min.js"></script>-->
<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/vendor/buzz.js"></script>
<script src="js/core.js"></script>
<script src="js/extensions/EventsComponent.js"></script>
<script src="js/extensions/FacebookComponent.js"></script>
<script src="js/extensions/StorageComponent.js"></script>
<script src="js/extensions/TrackerComponent.js"></script>
<script src="js/Sandbox.js"></script>
<script src="js/appCore.js"></script>
<script src="js/weider/extensions/SettingsComponent.js"></script>
<script src="js/weider/extensions/ScheduleComponent.js"></script>
<script src="js/weider/extensions/SoundComponent.js"></script>
<script src="js/weider/modules/WeekdaysModule.js"></script>
<script src="js/weider/modules/DayPickerModule.js"></script>
<script src="js/weider/modules/SummaryModule.js"></script>
<script src="js/weider/modules/TimeDisplayModule.js"></script>
<script src="js/weider/modules/TimerModule.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/main.js"></script>
<script type="text/javascript">
    WebFontConfig = {
        google: { families: [ 'Nunito:700:latin' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=141251042715707";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

</script>

</body>
</html>
