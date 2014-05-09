$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        resize : true,
        scrollingSpeed: 1500,
        easing: 'easeOutQuart',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
    	menu: '#myMenu',
        navigation: true,
        autoScrolling: true,
        scrollOverflow: true,
        normalScrollElementTouchThreshold: 5,




    	'onLeave': function(index, direction){

            if(index == '1' && direction =='down'){
                $(".logo").fadeOut(1);
            }   

            if(index == '2' && direction =='down' || direction == 'up'){
                $(".logo").fadeOut(1);
            }

            if(index == '3' && direction == 'up'){
                $(".logo").fadeOut(1);
            }
                   
        },

        'afterLoad': function(anchorLink, index){
			

            if(index == '1'){
                $(".logo").fadeIn(700);
            }

			if(index == '2'){
				$(".logo").fadeIn(700);

			 }

            if(index == '3'){
              $(".logo").fadeIn(700);


          }


		},


    });
});

$('.logo').click(function(e) {  
            $.fn.fullpage.moveTo('firstPage');        
});


// $(".").animate({top:100, opacity:"show"}, 1300);
// $(".box1").animate({top:0, opacity:"hide"}, 0);

// $('img').hide().one("load",function(){
//     $(this).fadeIn(800);
// }).each(function(){
//     if(this.complete) $(this).trigger("load");
// })




