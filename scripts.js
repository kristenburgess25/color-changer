var chooseColors =
['00','33','66','99','cc','ff'];
var rand = function () {
  return Math.floor(Math.random()*6);
};
var randomColor = function() {
  var r = chooseColors[rand()];
  var g = chooseColors [rand()];
  var b = chooseColors [rand()];
  return "#"+r+g+b;
};

$(document).ready(function() {
  $('#randombtn').click(function(){
    $('body').css('background', randomColor());
    })
})

$('#resetbtn').click(function(){
  $('body').css('background', '#ffffff')
})
