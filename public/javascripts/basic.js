function setTime() {
  var curTime = new Date();
  var h = curTime.getHours();
  var m = curTime.getMinutes();
  var aop = "";
  if (m < 10)
    m = "0" + m;
  if (h > 11)
    aop = "PM";
  else
    aop = "AM";
  h = (h + 12) % 12;
  var text = h + ':' + m;  
  setTimeout("setTime()", 1000);
  document.getElementById('time').innerHTML=text;
  document.getElementById('aop').innerHTML=aop;
}

$(document).ready(function() {
  //Isotope stuff
  console.log('Here!');
  var $container = $('#container');
  var thisWidth = $(window).width() * .8;
  $container.width(thisWidth);
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    },
    layoutMode : 'masonry'
  });
  
  //Isotope filter stuff
  $('.myfilter a').click(function() {
    $('.myfilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
  

  setTime();
});
