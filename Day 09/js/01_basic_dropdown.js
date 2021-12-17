

$(function() {

    // 메인 메뉴 - 마우스 올렸을때 이벤트
    $('nav > ul > li').on('mouseover', function() {
        $(this).children('.submenu').stop().slideDown(1000)
    })
    // 메인 메뉴 - 마우스가 벗어날때 이벤트
    $('nav > ul > li').on('mouseout', function() {
        $(this).children('.submenu').stop().slideUp(1000)
    })
    // 메인 메뉴 - 마우스 클릭 이벤트
    $('nav > ul > li').on('click', function() {
        $(this).children('.submenu').stop().slideToggle(1000)
    })


})