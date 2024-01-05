const importHTML = (tag, file) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      tag.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
};
