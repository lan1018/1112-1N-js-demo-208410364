const modals = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log('modal', modals);
// console.log('show-modal', btnsOpenModal);

const openModal = (e) => {
    const modalId = e.target.getAttribute('data-modal-id');
    const modals = document.getElementById(modalId);
    modals.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.add('hidden');
    }
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
  }

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modals.classList.contains('hidden')) {
      closeModal();
    }
  });

  overlay.addEventListener('click', closeModal);