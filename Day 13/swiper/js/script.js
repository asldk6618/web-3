
$(function() {

    // 스와이퍼 시작
    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',          //슬라이드 병행 : 'vertical', 'horizontal'
        loop: true,                       // 반복여부
        autoplay : {                      // 자동재생
            delay : 2000,                 // 슬라이드 당 2초씩 자동재생
            pauseOnMouseEnter: true,      // 슬라이드 위에 마우스 올리면 자동재생 멈춤
            disableOnInteraction : true,  // 인터렉션(화살표, 드래그,..)중에 자동재생 비활성화 여부
        },

        /*이펙트*/
        effect: 'fade',                  //사라지면서 다음 사진 나옴
        fadeEffect: {
          crossFade: true
        },


        // 페이지 네이션(... 그 페이지)
        pagination: {
          el: '.swiper-pagination',   //페이지 네이션이 적용될 요소(선택자)
          type: 'progressbar',             //'bullets'  : ...
                                        // 'fraction' : (현재번호 / 전체번호)
                                        // 'progressbar' : 페이지 넘겨진 만큼 위에 게이지가 채워짐(진행률나타냄)
                                        //'custom' : 
          clickable: true,            //페이지 네이션 클릭 가능여부
        },
      
        // 네비게이션 화살표
        navigation: {
          nextEl: '.swiper-button-next',   // 다음 화살표가 적용될 요소
          prevEl: '.swiper-button-prev',   // 이전 화살표가 적용될 요소
        },
      
        // 스크롤바
        scrollbar: {
          el: '.swiper-scrollbar',         // 스크롤바가 적용될 요소
          hide : true,                      // 스크롤바 숨김(움직일때만 보여짐)
          draggble : true,                 // 스크롤바 드래그 가능 여부
          snapOnRelease : true,            // 스크롤바를 놓을때, 슬라이드 위치를 알아서 맞춤
        },
      });
})