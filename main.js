var color = '#';
var letters = ['0000FF', 'aefbfb', 'FEBF36', 'ff9b39', 'ad47ff', '42ffc7', '5e5f67', 'c90076', 'ffd62a', 'ffe0f7', '67d967'];

color += letters[Math.floor(Math.random() * letters.length)];
document.getElementById('wrap').style.background = color;

function vidPlay() {  
    $("#video1").get(0).play();  
  };
  function vidPause() {
      $("#video1").get(0).pause();
  };
  $(document).ready(function(){
    $("#textToggler").click(function(){
      $(".toggleText").toggle();
    });
  });
  function toggleImage() {
    $(".hiddenclickimg").toggle();
  };