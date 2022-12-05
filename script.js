let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  let txt = inputTextArea.value;
  wordCount.textContent = txt.split(/\s+/).filter((item) => item.trim()).length;
  characCount.textContent = txt.length;
});
