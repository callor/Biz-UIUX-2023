// DOM 객체를 변수에 할당하여 JS 코드에서 사용할 준비하기
/**
 * 화면의 nav 의 요소들인 li tag 를 클릭했을 때 반응하는
 * event handler 를 설정하고 싶다
 * 각각의 li tag 를 querySelector() 하여 개별적인 event handler를
 * 설정 할수 있다.
 * 하지만 li tag 의 개수가 많아지면 그만큼 코드의 길이 길어진다
 * 또한 유사한 코드가 중복되어 작성된다
 *
 * 이럴때 li tag 의 부모 tag 요소에 event handler 를 설정하고
 * event bubbling 을 역으로 이용하여
 * event 처리를 간소화 시킨다
 *
 * nav.main_nav tag 에 event 를 설정하고
 * li tag 가 클릭되었을때 할일을 지정하였다
 *
 */

const main_nav = document.querySelector("nav.main_nav");
main_nav.addEventListener("click", (event) => {
  const target = event.target;
  const tag_name = event.target.tagName;
  const nav_text = target.innerText;
  if (tag_name === "LI") {
    // alert("네비 요소 클릭 : " + nav_text);
    if (nav_text === "HOME") {
      document.location.href = "./index.html";
    } else if (nav_text === "로그인") {
      importHTML(img_container, "./login.html");
    } else if (nav_text === "회원가입") {
      importHTML(img_container, "./join.html");
    }
  }
});
