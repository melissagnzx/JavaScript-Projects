const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// generate new html list item
const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  // remove space from input
  const todo = addForm.add.value.trim();
  //check that new item is not empty and reset after adding
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//deelte todo item
list.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//search form
const filterTodos = term => {
  //hide items that do not match serach term
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));
  //remove the hidden style
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
