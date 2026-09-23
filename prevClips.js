prevClips = ['white-knight-prev','far-fetched-prev','garbage-prev','tetsuya-prev']
    function PrevClip() {
      var index = Math.floor(Math.random() * 1000) % prevClips.length;
      var id = prevClips[index];
      var audioElement = document.getElementById(id);
      audioElement.play ();
    }