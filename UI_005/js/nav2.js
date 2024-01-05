// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_list = document.querySelectorAll("li.main_nav");
// const nav_login = document.querySelector("li.main_nav.login");
// const nav_join = document.querySelector("li.main_nav.join");

const nav_click_handler = (event) => {
  const target = event.target;
  const nav_text = target.innerText;
  alert(nav_text + " 메뉴 클릭");
};

// nav_list[0].addEventListener("click", nav_click_handler);
// nav_list[1].addEventListener("click", nav_click_handler);
// nav_list[2].addEventListener("click", nav_click_handler);

// for (let i = 0; i < nav_list.length; i++) {
//   nav_list[i].addEventListener("click", nav_click_handler);
// }

// const add_event = (item) => {
//   item.addEventListener("click", nav_click_handler);
// };
// nav_list.forEach(add_event);

/**
 * JS 에서는 함수의 매개변수로 직접 함수를 전달할수 있다.
 */
nav_list.forEach((item) => {
  item.addEventListener("click", nav_click_handler);
});
