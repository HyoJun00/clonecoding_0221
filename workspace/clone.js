// banner
let $bannerBox = $(".banner-box");
let $bannerImgs = $(".banner-img");

// 슬라이드 박스 너비
let slideWidth = 970;
// 슬라이드 이미지 인덱스 번호
let currentIdx = 0;
// 총 슬라이드 이미지 수
let slideCnt = $bannerImgs.length;
console.log("slideCnt : " + slideCnt);

let slideInterval;

// 자동 슬라이드 시작 함수
function startSlide() {
    slideInterval = setInterval(function () {
        moveNext();
    }, 5000);
}

startSlide();

// 자동 슬라이드 중지 함수
function stopSlide(){
    clearInterval(slideInterval);
}

//다음 슬라이드로 이동하는 함수
function moveNext() {
    currentIdx++;
    // 마지막 슬라이드에 도달하면 맨 첫번째 슬라이드로 이동
    if(currentIdx >= slideCnt) {
        currentIdx = 0;
    }
    $bannerBox.css("left", -(currentIdx * slideWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
}

//이전 슬라이드로 이동하는 함수
function movePrev() {
    currentIdx--;
    $bannerBox.css("left", -(currentIdx * slideWidth));
    $bannerBox.css("transition", "0.5s ease");
    checkEnd();
}

// 이전이나 다음 버튼 클릭 시 자동 슬라이드 중지와 재시작 함수 연결
$(".next").on("click", function(){
    moveNext();
    stopSlide(); // 다음 버튼 클릭 시 자동 슬라이드 중지
})

$(".prev").on("click", function(){
    movePrev();
    stopSlide(); // 이전 버튼 클릭 시 자동 슬라이드 중지
})

// 슬라이드 박스에 마우스 호버 시 자동 슬라이드 중지
$bannerBox.on("mouseenter", function(){
    stopSlide();
})

// 슬라이드 박스에서 마우스가 떨어지면 자동 슬라이드 다시 시작
$bannerBox.on("mouseleave", function(){
    startSlide();
})

// 처음 이미지와 마지막 이미지 화살표 감추기
function checkEnd() {
    if (currentIdx <= 0) {
        $(".prev").css("display", "none");
    } else {
        $(".prev").css("display", "block");
    }

    if (currentIdx >= slideCnt - 1) {
        $(".next").css("display", "none");
    } else {
        $(".next").css("display", "block");
    }
}