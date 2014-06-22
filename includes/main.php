<?php
function __t($txt,$lang){
    $translates = array(
        'Weider\'s Six Timer'=>array('pl'=>'Szóstka Weidera darmowy Timer/Licznik'),
    );

/*    var_dump($txt);
    var_dump($lang);
    var_dump($translates);*/
    if($lang === 'en')return $txt;
    if(!empty($translates[$txt]) && !empty($translates[$txt][$lang])){
        return $translates[$txt][$lang];
    }
    return $txt;
}
echo 'main';
?>