//scroll
const nav = document.querySelector('header');

window.onscroll = () => {
    this.scrollY > 30 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
}

//type writer js
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    // .pauseFor(1000)
    .typeString('Designer')
    .pauseFor(2000)
    .deleteChars(6)
    .typeString('veloper')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('Youtuber')
    .pauseFor(2000)
    .start();

//mobile nav

const navicon = document.querySelector('.mobile-nav');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

navicon.addEventListener('click',function () {
    menu.classList.add('open');
})
close.addEventListener('click', function () {
    menu.classList.remove('open');
})
//loader
const loader = document.querySelector(".loader");
window.onload = function () {
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 500);
    }, 2500);
}
//jquery
    /*$(document).ready(function () {
        //Preloader
        preloaderFadeOutTime = 4000;
        function hidePreloader() {
            var preloader = $('.loader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });*/
/*
    <!--script>
        // $(document).ready(function(){
        // 	$('div#loading').removeAttr('id');
        // });
        var preloader = document.getElementById("loading");
        // window.addEventListener('load', function(){
        // 	preloader.style.display = 'none';
        // 	})

        function myFunction() {
            preloader.style.display = 'none';
        };
    </script-->

*/
//slick
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});