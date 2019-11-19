const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem (event) {
  event.preventDefault(); // stop the page reload
  let text = (this.querySelector('[name=item]')).value;
  let item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map(
    (plate, i) => {
      return `
        <li>
          <input type="checkbox" 
                 data-index=${i} 
                 id="item${i}" 
                 ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
  }).join('');
}

const toggleDone = (event) => {
  if (!event.target.matches('input')) return; 
  
  let element = event.target;
  let index = element.dataset.index;
  
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);