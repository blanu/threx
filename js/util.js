function loadAssets(sources, audioSources, callback)
{
    var toLoad=0;
    var loaded=0;
    var asset;
    var images={};
    var audio={};
            
    for(asset in audioSources)
    {
        console.log('loading '+asset);
        audio[asset]=new buzz.sound(audioSources[asset]);
    }    
    console.log('loaded audio');
    console.log(audio);
    
    for(asset in sources)
    {
        toLoad++;
    }    
    
    for(asset in sources)
    {
        images[asset]=new Image();
        images[asset].onload=function() {
            loaded++;
            if(loaded==toLoad)
            {
                callback(images, audio);
            }
        }
        
        images[asset].src=sources[asset];
    }    
}
