const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function() {
  let bomScrip = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listSpan = document.createElement("span");
  const listButton = document.createElement("button");

  listItem.appendChild(listSpan);
  listSpan.textContent = bomScrip;
  listItem.appendChild(listButton);
  listButton.textContent = "❌";
  list.appendChild(listItem);

  listButton.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();

})