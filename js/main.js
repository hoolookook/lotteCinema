
$(document).ready(function(){
    var owl = $('#owl1');
    var two = $('#owl2');

    owl.owlCarousel({
        items:1,                 // 한번에 보여줄 아이템 수
        loop:true,               // 반복여부
        margin:0,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:3000,    // 재생간격
        autoplayHoverPause:true  //마우스오버시 멈출지 여부
        
    });    


    two.owlCarousel({
        items:5,                 // 한번에 보여줄 아이템 수
        loop:true,               // 반복여부
        margin:5,               // 오른쪽 간격
        autoplay:false,           // 자동재생 여부
        autoplayTimeout:0,    // 재생간격
        autoplayHoverPause:true,  //마우스오버시 멈출지 여부
        
    });   
    
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })

});


//upward text

var rollUl = $('#upward').find('ul');
var li = $('#upward').find('li');
var liLeng = li.length;
var liHeight = li.outerHeight();
var _index = 0;
var i = 1;

setInterval(function() {
    // TweenMax.to("rollUl", 1.5, {
    //   top: -(liHeight),
    //   ease: Expo.easeInOut,
    //   onComplete: topReturn
    // });
    TweenMax.to("rollUl", 1.5, {
        top: -(liHeight),
        ease: Expo.easeInOut,
        onComplete: topReturn
      });
  }, 3500)

function topReturn() {
  var liFirst = $('#upward').find('li:first');
  var liLast = $('#upward').find('li:last');
  rollUl.css({
    'top': 0
  });
  liFirst.insertAfter(liLast);
}
