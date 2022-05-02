function noscroll(e) {
    e.preventDefault();
}

$(function () {
    $('.Toggle').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        if ($('.Toggle').hasClass('active')) {
            document.addEventListener('touchmove', noscroll, { passive: false });
            document.addEventListener('wheel', noscroll, { passive: false });
            return;
        }
        document.removeEventListener('touchmove', noscroll);
        document.removeEventListener('wheel', noscroll);
        return;
    });
});