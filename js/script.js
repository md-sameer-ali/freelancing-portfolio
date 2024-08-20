$( document ).ready(function () {
    // Show the first tab and hide the rest
    $('.tab_ul li:first-child').addClass('active');
    $('.tab_content_area').hide();
    $('.tab_content_area:first').show();

    // Click function
    $('.tab_ul li').click(function () {
        $('.tab_ul li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content_area').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });


    let workSwiper = new Swiper(".workSwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});

