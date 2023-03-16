const menu = [
    {
        id: 1,
        title: 'egg',
        category: 'breackfast',
        price: 6.56,
        img: './images/my-1.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 2,
        title: 'green eating',
        category: 'lunch',
        price: 15.55,
        img: './images/my-2.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 3,
        title: 'meat balls with noodles',
        category: 'dinner',
        price: 27.89,
        img: './images/my-3.jpg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 4,
        title: 'buttermilk pancakes',
        category: 'dessert',
        price: 15.99,
        img: './images/item-1.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 5,
        title: 'dinner double',
        category: 'dinner',
        price: 13.99,
        img: './images/item-2.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    },
    {
        id: 6,
        title: 'gozilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        remote_img: '',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita illo minima asperiores! Neque iste, accusantium inventore doloribus minus voluptatibus reprehenderit qui rem veniam soluta aspernatur magnam obcaecati! Sit, error laudantium.'
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');


const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
        return `
        <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
      `
    });
    // console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert', 'shakes'];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];

const displayMenuButtons = () => {
  let menuButtons = categories.map(category => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  })
  console.log('displayButtons before join', menuButtons);
  menuButtons = menuButtons.join('');
  console.log('displayButtons after join/n', menuButtons);
  btnContainer.innerHTML = menuButtons;
}


window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

