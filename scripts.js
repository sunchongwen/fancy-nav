// const selectElement = (element) => document.querySelector(element);
// selectElement('.menu-icons').addEventListener('click', () => {
//     selectElement('nav').classList.toggle('active');
// })
// 两种写法
$(document).ready(function () {
    $(".menu-icons").on("click", function () {
        $("nav").toggleClass("active");
    })
})