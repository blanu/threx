function initWinning()
{
    console.log('initWinning');
    var theme=new buzz.sound('assets/audio/rap.mp3');
    theme.play();
}

$(document).ready(initWinning);