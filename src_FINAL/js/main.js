const config = {
  arrows: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendArrows: '.mybuttons',
  prevArrow: '<span class="mybuttons__item mybuttons__item_prev"><</span>',
  nextArrow: '<span class="mybuttons__item mybuttons__item_next">></span>',
  dots: true,
  appendDots: '.mydotts',
  dotsClass: 'dots-box',
  customPaging: function (slider, i) {
    return '<button></button>';
},
  responsive: [
    {
      breakpoint: 639,
      settings: {
          slidesToShow: 1,
      }
  },
      {
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
          }
      },
      {
        breakpoint: 9900,
        settings: {
            slidesToShow: 4,
        }
      
    }
  ]
}

let sl = $('.menuSlider');

function initializeSlider() {
  if (!sl.hasClass('slick-initialized')) {
      sl.slick(config);
  }
}

$(document).ready(function () {
  initializeSlider();
});

$(window).on('resize', function () {
  const windowWidth = $(window).width();
});


$('.menuSlider').each(function(index) {
  const uniqueButtonsClass = `custom-buttons-${index}`;
        const uniqueDottsClass = `custom-dotts-${index}`;
        $(this).parent().prepend(`<div class="mybuttons ${uniqueButtonsClass}"></div>`);
        $(this).parent().append(`<div class="mydotts ${uniqueDottsClass}"></div>`);

        $(this).slick({
            ...config,
            appendArrows: `.${uniqueButtonsClass}`,
            appendDots: `.${uniqueDottsClass}`
        });
      });

