$(function() {

    // 오른쪽으로 스와이프
    $(window).on('swiperight', function() {
        $('.sidebar').addClass('on')
    })

    // 왼쪽으로 스와이프
    $(window).on('swipeleft', function() {
        $('.sidebar').removeClass('on')
    })

})