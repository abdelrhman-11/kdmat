
//start a type machine-effect
$(window).on('load' , function(){  
var theText = $('.typer').data('text'),
    theTextLength = theText.length,
    n = 0;
    theTyper = setInterval(function(){
    $('.typer').each(function(){
    $(this).html($(this).html()+theText[n]);
    });
    n +=1;
    if (n == theTextLength){
        clearInterval(theTyper);
    }
    },100);
});

/***************************************/
//when i click icon-menue
$(function(){
    var content = $('.parent-nav ul'),
         icon = $('.parent-nav .icon');
    $(icon).on('click',function(){
    $(content).toggleClass(icon).slideToggle(1);
    });
    },3000);


/***************************************/
//when i click icon-menue to add class active to icon
$('.icon').click(function(){
    $('.icon').toggleClass('active');
    });


/***************************************/
//when i click on navbar to remove me to pecific section i clicked on//
$('.lis ul li').click(function(e){
e.preventDefault();
$('html,body').animate({
scrollTop: $('#' + $(this).data('scroll')).offset().top
},1000);
});


/****************************************/
/*when i click on subscribe move me to the section*/
$('.car h4').click(function(e){
e.preventDefault();
$('html,body').animate({
scrollTop:$('#' + $(this).data('scroll')).offset().top
},1000);
});
/****************************************/
//scroll top to scrolling me to top//
$("#icon").click(function(){
$("html, body").animate({scrollTop:0},1000);
});
/**************************************/
//start counterTo from zero and added
    $('.conta').countTo({
        offset: 400,
        delay:1000,
        offset:300 
    });
//end counterTo
/*************************************************************/
//start loading page "holding-page"
     $(window).on('load' , function(){
        $('.spi').fadeOut(2000,function(){
        $("body").css("overflow","auto");
        });
        });
//end loading page
//hover for mobile-media//
function watchForHover() {
    var hasHoverClass = false;
    var container = document.body;
    var lastTouchTime = 0;

    function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

watchForHover();
  
 
  