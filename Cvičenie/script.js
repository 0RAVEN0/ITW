$(document).ready(function () {
    $(".bars").click(function () {
        $("li").toggleClass("active");
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, function(){
                window.location.hash = this.hash;
            });
        }
    });
});

$(window).on('scroll' ,function () {

    if($(window).scrollTop()){
        if ($(document).scrollTop() >= 200){
            $('.navbar').addClass('fix');
        }
        else{
            $('.navbar').removeClass('fix');
        }
    }

})

