function initLoading()
{
    console.log('initLoading');
    var theme=new buzz.sound('assets/audio/openingSong.mp3');
    theme.play();
}

$(document).ready(initLoading);