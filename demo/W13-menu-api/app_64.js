const supabaseUrl = 'https://casmvaldsmrrajnyisdj.supabase.co';
const supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhc212YWxkc21ycmFqbnlpc2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTQ0MzQsImV4cCI6MTk5MzMzMDQzNH0.kE36-ZbXFn5HpyA5cqcCQmkX98TzPrybzvtA-vyKiQ4';

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// import { menu } from './data.js';
// const url = './api/data.json';
const url = 'https://casmvaldsmrrajnyisdj.supabase.co/rest/v1/menu_64?select=*';


let menu;

const displayMenuItems = (menu) => {
    let displayMenu = menu.map((item) => {
      return `<article class="menu-item">
      <img src=${item.remote_img} alt=${item.title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.descrip}
        </p>
      </div>
    </article>
    `;
    });
    // console.log('displayMenu before join', displayMenu);
    displayMenu = displayMenu.join('');
    // console.log('displayMenu after join', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert', 'shakes'];

const displayMenuButtons = () => {
  const categories = ['all', ...new Set(menu.map((item) => item.category))];
  let menuButtons = categories.map((category) => {
    return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
  });
  // console.log('displayButtons before join', menuButtons);
  menuButtons = menuButtons.join('');
  // console.log('displayButtons after join/n', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns',filterBtns);
  filterBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter( (item) => item.category === category);

      if(category === 'all'){
        console.log('all', menu);
        displayMenuItems(menu);
      }else{
        console.log(category, filterMenu);
        displayMenuItems(filterMenu);
      }
    });
  });
};

const fetchData = async () => {
  try{
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        apiKey: supabase_key,
        Authorization: `Bearer ${supabase_key}` 
      }
    });
    const data = response.json();
    console.log('fetch data', data);
    return data;
} catch(error){
    console.log(error);
}
};

window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchData();
  await displayMenuItems(menu);
  await displayMenuButtons();
});

