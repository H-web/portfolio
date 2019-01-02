var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
  document.write('<link rel="stylesheet" type="text/css" href="css/ie_style.css">');
  $(document).ready(function() {
    $('.trump1_1').mouseenter(function(){
      $('.trump1_1').css('opacity','0');
    });
    $('.trump1_2').mouseenter(function(){
      $('.trump1_2').css('opacity','0');
    });
    $('.trump1_3').mouseenter(function(){
      $('.trump1_3').css('opacity','0');
    });
    $('.trump1_4').mouseenter(function(){
      $('.trump1_4').css('opacity','0');
    });
    $('.trump1_5').mouseenter(function(){
      $('.trump1_5').css('opacity','0');
    });
    $('.trump1_6').mouseenter(function(){
      $('.trump1_6').css('opacity','0');
    });
    $('.trump1_7').mouseenter(function(){
      $('.trump1_7').css('opacity','0');
    });
    $('.trump1_8').mouseenter(function(){
      $('.trump1_8').css('opacity','0');
    });

  });
}else{
   document.write('<link rel="stylesheet" type="text/css" href="css/style.css">');
  $(document).ready(function() {
    $('.flip-container1').mouseenter(function(){
      $('.flipper1').css('transform','rotateY(180deg)');
    });
    $('.flip-container2').mouseenter(function(){
      $('.flipper2').css('transform','rotateY(180deg)');
    });
    $('.flip-container3').mouseenter(function(){
      $('.flipper3').css('transform','rotateY(180deg)');
    });
    $('.flip-container4').mouseenter(function(){
      $('.flipper4').css('transform','rotateY(180deg)');
    });
    $('.flip-container5').mouseenter(function(){
      $('.flipper5').css('transform','rotateY(180deg)');
    });
    $('.flip-container6').mouseenter(function(){
      $('.flipper6').css('transform','rotateY(180deg)');
    });
    $('.flip-container7').mouseenter(function(){
      $('.flipper7').css('transform','rotateY(180deg)');
    });
    $('.flip-container8').mouseenter(function(){
      $('.flipper8').css('transform','rotateY(180deg)');
    });
  });

  }



$(document).ready(function() {


$('#fullpage').fullpage({
  anchors:['page1','page2','page3','page4','page5','page6','page7'],
  sectionsColor: ['#fff', '#414141', '#414141', '#fff', '#414141', '#fff'],
  responsiveWidth:760,
});

$('.work').slick({
  centerMode: true,
  centerPadding: '5px',
  slidesToShow: 1,
  prevArrow:'<i class="fas fa-angle-left"></i>',
  nextArrow:'<i class="fas fa-angle-right"></i>',
  dots:true,
  autoplay:false,
  autoplaySpeed:2000,
});

$('.chevrolet').click(function(){
  window.open('chevrolet/index.html','_blank');
});

$('.vips').click(function(){
  window.open('vips/index.html','_blank');
});

$('.hansol').click(function(){
  window.open('hansol/index.html','_blank');
});

$('.cafebene').click(function(){
  window.open('cafebene/index.html','_blank');
});

$('.hollys').click(function(){
  window.open('hollys/index.html','_blank');
});

});

function popupOpen(){
  var popUrl = "busanArtMuseum/index.html";
  var popOption = "width=370, height=550, resizable=no,toolbar=no, menubar=no, status=no;";
  window.open(popUrl,"",popOption);

};


// alert('이 사이트는 chrome 브라우저에 최적화 되어 있습니다!')
