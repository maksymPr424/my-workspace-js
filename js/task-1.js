const list = document.querySelector('.listUsers');
const input = document.querySelector('[name="input-name"]');
const btnAdd = document.querySelector('#btn-add');
const btnRemove = document.querySelector('#btn-remove');

const validateInput = () => {
  const name = input.value.trim();
  if (name === '') {
    return false;
  }

  return true;
};

const createLi = name => {
  const newLi = document.createElement('li');
  newLi.textContent = name;
  list.appendChild(newLi);
};

const addFunk = e => {
  const name = input.value;
  if (!validateInput()) {
    return;
  }
  createLi(name);
  input.value = '';
};

const removeLi = name => {
  const children = Array.from(list.children);
  const itemToDel = children.find(item => {
    if (item.textContent === name) {
      return item;
    }
  });

  itemToDel.remove();
};

const removeFunk = e => {
  const name = input.value.trim();
  if (!validateInput()) {
    return;
  }
  removeLi(name);
  input.value = '';
};

btnRemove.addEventListener('click', removeFunk);
btnAdd.addEventListener('click', addFunk);
