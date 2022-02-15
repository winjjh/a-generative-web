var color = '#';
var letters = ['f6c9cc', 'a8c0c0', 'FEBF36', 'FF7238', '6475A0', 'acc7bf', '5e5f67', 'c37070', 'eae160', 'bf7aa3', 'd7d967'];

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