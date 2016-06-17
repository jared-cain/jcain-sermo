window.jQuery = $ = require('jquery');
// require('npm-modernizr');
// require('./utils');

module.export = (function () {

    var carouselInit = function() {
        var carousel = document.getElementById('carousel'),
            navButtons = document.querySelectorAll('#carousel-navigation button'),
            panelCount = carousel.children.length,
            theta = 0,
            // var tz = Math.round( ( panelSize / 2 ) /
            //         Math.tan( Math.PI / numberOfPanels ) ),

            onNavButtonClick = function(e) {
                var increment = parseInt(event.target.getAttribute("data-increment"));
                theta += ( 360 / panelCount ) * increment * -1;

                if (window.matchMedia("(min-width: 768px)").matches){
                    carousel.style['transform'] = `translateZ(-577px) rotateY(${theta}deg)`;
                } else {
                    carousel.style['transform'] = `translateZ(-577px) rotateY(${theta}deg)`;
                }
                console.log("im clicked");
            };

        for(var i = 0; i < 2; i++) {
            navButtons[i].addEventListener('click', onNavButtonClick, false);
        }
    };

    window.addEventListener('DOMContentLoaded', carouselInit, false);

})();
