const InputBox = document.getElementById("input-box");
const ListContianer = document.getElementById("list-contianer");

console.log(ListContianer);
console.log(InputBox.value);

const addTask = () => {
  console.log(ListContianer.innerHTML);
  if (InputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContianer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#128473;";
    li.appendChild(span);
  }
  InputBox.value = "";
  SaveData();
};

ListContianer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  SaveData();
});

console.log(`Bhairav`, ListContianer.innerHTML);

const SaveData = () => {
  localStorage.setItem("data", ListContianer.innerHTML);
};

const GetData = () => {
  ListContianer.innerHTML = localStorage.getItem("data");
};
GetData();
