prevClips = ['WKPrev0108','FarPrev0108','GCPrev0108','TetsuyaPrev0108']
function PrevClip() {
  var index = Math.floor(Math.random() * 1000) % prevClips.length;
  var id = prevClips[index];
  var audioElement = document.getElementById(id);
  audioElement.play ();
}