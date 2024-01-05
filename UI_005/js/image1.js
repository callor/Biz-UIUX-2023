const IMG_TAG_NAME = "IMG";
const ALT_TEXT = {
  인증사진: "인증사진",
  바라보기: "바라보기",
  스피츠: "스피츠",
  눈치보기: "눈치보기",
  놀아죠: "놀아조",
  첫만남: "첫_만남",
};
const img_container = document.querySelector("section.img_container");
const img_container_click_handler = (event) => {
  const target = event.target;
  const tag_name = target.tagName;
  if (tag_name === IMG_TAG_NAME) {
    const alt_text = target.getAttribute("alt");
    // alert("클릭 : " + tag_name + alt_text);
    if (alt_text === ALT_TEXT.인증사진) {
      document.location.href = "./01.html";
    } else if (alt_text === ALT_TEXT.바라보기) {
      document.location.href = "./03.html";
    }
  }
};
img_container.addEventListener("click", img_container_click_handler);
