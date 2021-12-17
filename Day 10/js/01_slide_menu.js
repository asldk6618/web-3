
// 문서 준비 이벤트$(function() {
// jQuery   - $(function() {})
// js       - document.addEventListener('DOMContentLoaded', () => {})

// 슬라이드 바 off
let slideOn = 'off'
let animateTime = 1500

$(function() {

    // 메인 메뉴 - 마우스 클릭 이벤트
    $('nav > ul > li').on('click', function() {
        // 현재 선택한 메인 메뉴 아래 서브 메뉴만 슬라이드
        // $(this).children('.submenu').stop().slideToggle(1000)

        // 모든 서브 메뉴 슬라이드
        $('.submenu').stop().slideToggle(animateTime)
    })

    // 햄버거 메뉴 클릭 이벤트
    $('.slide-open').on('click', () => {
        // 햄버거 메뉴 클릭 on
        if( slideOn == 'off' ) {
            slideBarOpen()
        } else {
            slideBarClose()
        }
    })

    // 슬라이드 바 바깥 + X버튼 클리 시, 슬라이드 닫힘
    $('.bg, .cancel').on('click', () => {
        slideBarClose()
    })
})


// 슬라이드바 열림(함수)
function slideBarOpen() {
    // 슬라이드 열림 애니메이션
    $('.slide').animate({left: 0}, animateTime)

    // 햄버거 버튼 애니메이션 
    $('.slide-open').children('span').addClass('on')

    // 슬라이드 바 바깥영역 - fade
    //$('.bg').css('display', 'block')
    $('.bg').fadeIn(animateTime)

    slideOn = 'on'
       
}

// 슬라이드바 닫힘(함수)
function slideBarClose() {
    // 슬라이드 닫힘 애니메이션
    $('.slide').animate({left: '-400px'}, animateTime)

    // 햄버거 버튼 애니메이션
    $('.slide-open').children('span').removeClass('on')

    // 슬라이드 바 바깥 영역 - fade
    //$('.bg').css('display', 'none')
    $('.bg, .ccancel').fadeOut(animateTime)

    slideOn = 'off'
}