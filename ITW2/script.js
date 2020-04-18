var nav = document.getElementById('fixed-head');
var header = document.getElementsByTagName("A");
var navbar = document.getElementsByClassName("navbar");

window.onscroll = function () {

    if(window.pageYOffset > 1){
        navbar[0].style.position = "fixed";
        navbar[0].style.top = 0;
        navbar[0].style.zIndex = 1;
        //navbar.addClass('fixed');
        if(window.pageYOffset > 450){
            navbar[0].style.background = "rgb(169, 169, 169)";
            navbar[0].style.boxShadow = "5px 5px 15px #494c53";
            header[0].style.color = "#000000";
            header[1].style.color = "#000000";
            header[2].style.color = "#000000";
            header[3].style.color = "#000000";
            header[4].style.color = "#000000";
            header[5].style.color = "#000000";
        }
        else {
            navbar[0].style.background = "none";
            navbar[0].style.boxShadow = "none"
            header[0].style.color = "#ffffff";
            header[1].style.color = "#ffffff";
            header[2].style.color = "#ffffff";
            header[3].style.color = "#ffffff";
            header[4].style.color = "#ffffff";
            header[5].style.color = "#ffffff";
        }
    }
    else{
        // nav.style.position = "absolute";
        navbar[0].style.position = 'relative'; //fixed
        navbar[0].style.top = 70;
        //navbar.removeClass('fixed');

    }
}