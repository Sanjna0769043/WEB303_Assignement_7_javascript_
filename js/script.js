
$(".loader").css("display", "none")

$('.thumb').on('click', function(e) {
  var $link = $(this).children('img').attr('src');
   $(".loader").css("display", "block")
   $('.photo-frame').css("visibility", "hidden") 
    setTimeout(() => {
        $(".loader").css("display", "none")  
         $('.photo-frame').css("visibility", "visible") 
    }, 1000);
  $('.photo-frame').attr('src', $link);
  $(this).children('img').addClass('active');
  $(this).siblings().children('img').removeClass('active')
  
 
});

$(function () {
    $('.photo-frame').on('click', function (e) {
        console.log($(this).clone().attr('src'))
        var $content = $(this).clone().css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        var modal = new Modal();
        //modal code goes here
        modal.open({
            content: $content,
            width: 800,
            height: 450
        });
    });;
});
