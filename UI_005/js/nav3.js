// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_list = document.querySelectorAll("li.main_nav");
/**
 * JS 에서는 함수의 매개변수로 직접 함수를 전달할수 있다.
 */
nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert(nav_text + " 메뉴 클릭");
  });
});
