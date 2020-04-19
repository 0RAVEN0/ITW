/**********************************************************************/
/*                   Author = Romana Dzubarova                        */
/*                   Login = xdzuba00                                 */
/*                   Date = 13.04.2020                                */
/**********************************************************************/

$(document).ready(function () {
    $(".bars").click(function () {
        $("li").toggleClass("active");
    });
});

$(window).on('scroll' ,function () {

    if($(window).scrollTop()){
        $('.navbar').addClass('fix');
    }
    else{
        $('.navbar').removeClass('fix');
    }
})