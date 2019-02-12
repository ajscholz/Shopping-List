var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var item = document.getElementsByTagName('li');
var delButton = document.getElementsByClassName('delete-button');

function inputLength() {
  return input.value.length;
}

function addDeleteButton() {
  var button = document.createElement('button');
  button.appendChild(document.createTextNode('Delete Item'))
  button.classList.add('delete-button');
  button.addEventListener('click', deleteListItem);
  ul.appendChild(button);
}

function createListElement() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.addEventListener('click', toggleListClass);
  input.value = '';
  addDeleteButton();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleListClass(event) {
  event.target.classList.toggle('done')
}

function deleteListItem(event) {
  var b = event.target;
  var i = event.target.previousElementSibling;
  b.remove();
  i.remove();
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener('click', toggleListClass);
}

for (var i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener('click', deleteListItem);
}
