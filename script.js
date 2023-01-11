$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        console.log("scroll")
        /* Check the location of each desired element */
        $('.fade').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window >= ((bottom_of_object + top_of_object) / 2)) {

                $(this).animate({ 'opacity': '1' }, 750);
                $(this).animate({ 'transform': 'none' }, 750);

            }

        });

    });

});