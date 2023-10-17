// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const header = document.querySelector(".header");
// const headerHeight2 = header.getBoundingClientRect().height;
const headerHeight = header.offsetHeight;
// console.log(headerHeight);
document.addEventListener("scroll", () => {
    // console.log(window.screenY);
    if (window.scrollY > headerHeight) {
        header.classList.add("header--dark");
    } else {
        header.classList.remove("header--dark");
    }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
    console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
