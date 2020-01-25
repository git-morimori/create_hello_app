const helloElement = document.getElementById("hello");
const clickElement = document.getElementById("click");

hello.addEventListener("mouseover", event => {
  clickElement.textContent = "";
  helloElement.style.color = "red";
  helloElement.textContent = "(n_n) /~";
});
hello.addEventListener("mouseleave", event => {
  clickElement.textContent = "↑click↑";
  helloElement.style.color = "#ff00b3";
  helloElement.textContent = "Hello!";
});
hello.addEventListener("click", event => {
  clickElement.textContent = "";
  helloElement.textContent = "こんにちは";
  helloElement.id = "ja";
});
