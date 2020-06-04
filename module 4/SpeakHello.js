
(function(window){
	var helloSpeaker={};
    var speakWordd = "Hello";
    helloSpeaker.speak=function (name) {
       console.log(speakWordd + " " + name);
       }
       window.helloSpeaker=helloSpeaker;
    }
)(window)
