<?php
    $lang = 'en';
    if($_SERVER['REQUEST_URI'] === '/pl/'){
        $lang = 'pl';
    }
    $debug = false;
include('includes/'.$lang.'/general.php');
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><?php echo $metatitle; ?></title>
    <meta name="description" content="<?php echo $metadesc; ?>">
    <meta name="viewport" content="width=device-width">

    <style>
        body {
            padding-top: 60px;
            padding-bottom: 40px;
        }
    </style>
    <link rel="stylesheet" href="dist/css/allCss.css">

    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    <script type="text/javascript">
        var app_id = '141251042715707';
    </script>
</head>
<body>
   <span itemtype="http://schema.org/WebApplication" itemscope="">
    <meta content="Weider six training timer application" itemprop="name">
    <meta content="Weider six training timer application" itemprop="about">
    <meta content="Javascript enabled" itemprop="browserRequirements">
    <meta content="Training Timer" itemprop="softwareApplicationCategory">
    </span>
<!--[if lt IE 8]>
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
            <a class="brand" href="#"><?php echo $logoTitle; ?></a>
            <div class="nav-collapse collapse">
                <ul class="nav">
                    <?php include('includes/'.$lang.'/nav.php'); ?>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </div>
</div>

<div class="container">
<h1><?php echo $h1; ?></h1>

<section class="basicSettings">
    <?php include('includes/basicSettings.php');  ?>
</section>
<section class="about">
    <?php include('includes/summary.php');  ?>
</section>

<section class="ads">
    <div class="" id="topad">
        <style>
            .weider-responsive-top { width: 320px; height: 50px; }
            @media(min-width: 500px) { .weider-responsive-top { width: 468px; height: 60px; } }
            @media(min-width: 800px) { .weider-responsive-top { width: 728px; height: 90px; } }
        </style>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- weider - responsive - top -->
        <ins class="adsbygoogle weider-responsive-top"
             style="display:inline-block"
             data-ad-client="ca-pub-8831880020519536"
             data-ad-slot="2099337522"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>
</section>
<!--<section class="about currentExcercise">
    <h2>now</h2>
    <div class="">
        <h2><?php /*echo $sumTitle ;*/?>now</h2>


    </div>
</section>-->
<section class="about">
    <?php include('includes/timer.php');  ?>
</section>

<section class="timerSettings">
    <?php include('includes/timersettings.php');  ?>
</section>
<section class="ads">
    <div id="bottomad">
        <style>
            .weider-responsive-bottom { width: 320px; height: 50px; }
            @media(min-width: 500px) { .weider-responsive-bottom { width: 468px; height: 60px; } }
            @media(min-width: 800px) { .weider-responsive-bottom { width: 728px; height: 90px; } }
        </style>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- weider - responsive - bottom -->
        <ins class="adsbygoogle weider-responsive-bottom"
             style="display:inline-block"
             data-ad-client="ca-pub-8831880020519536"
             data-ad-slot="5052803921"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>
</section>

<section class="about">
    <span itemtype="http://schema.org/ExercisePlan" itemscope="">
    <meta content="Weider six 6 pack training" itemprop="name">
    <meta content="Weider 6" itemprop="alternateName">
    <meta content="http://weidersix.com" itemprop="url">
    <meta itemtype="http://schema.org/AerobicActivity" itemprop="category">

    <meta content="Weider six (A6W) is an ABS training. If you want to have a flat stomach or a 6 pack this is the workout for you!" itemprop="description">
    <meta content="Weider six training timer application" itemprop="about">
    <meta content="Daily" itemprop="activityFrequency">
    <meta content="abdominal muscles, flat stomach, 6 pack" itemprop="exerciseType">

    </span>
    <?php include('includes/'.$lang.'/about.php');  ?>
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
<script src="http://connect.facebook.net/en_US/all.js"></script>
<script src="dist/scripts/app.min.js"></script>

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

</script>

</body>
</html>
