
      // Import necessary libraries and scripts
      import { Lucide } from 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';

      // Define constants and variables
      const navbar = document.getElementById('navbar');
      const heroSection = document.getElementById('hero-section');
      const cardsGrid = document.getElementById('cards-grid');
      const modal = document.getElementById('modal');
      const footer = document.getElementById('footer');

      // Define menu data
      const menuData = [
         {
            id: 1,
            name: 'طاعميه',
            price: 5,
            description: 'طاعميه لذيذة'
         },
         {
            id: 2,
            name: 'فول',
            price: 2,
            description: 'فول لذيذ'
         }
      ];

      // Function to render menu items
      function renderMenuItems() {
         const menuItemsHtml = menuData.map((menuItem) => {
            return `
               <div class='card glass-effect'>
                  <h2 class='text-primary'>${menuItem.name}</h2>
                  <p class='text-muted'>${menuItem.description}</p>
                  <p class='text-primary'>السعر: ${menuItem.price}﷼</p>
               </div>
            `;
         }).join('');
         cardsGrid.innerHTML = menuItemsHtml;
      }

      // Function to handle modal open
      function handleModalOpen() {
         modal.classList.toggle('hidden');
      }

      // Function to handle modal close
      function handleModalClose() {
         modal.classList.toggle('hidden');
      }

      // Function to handle navbar toggle
      function handleNavbarToggle() {
         navbar.classList.toggle('hidden');
      }

      // Function to animate logo
      function animateLogo() {
         const logo = document.getElementById('logo');
         logo.classList.toggle('animate-logo');
      }

      // Function to handle local storage
      function handleLocalStorage() {
         const storedMenuData = localStorage.getItem('menuData');
         if (storedMenuData) {
            menuData = JSON.parse(storedMenuData);
         } else {
            localStorage.setItem('menuData', JSON.stringify(menuData));
         }
      }

      // Function to handle error
      function handleError(error) {
         console.error(error);
         alert('خطأ في النظام');
      }

      // Event listeners
      document.addEventListener('DOMContentLoaded', () => {
         renderMenuItems();
         handleLocalStorage();
         animateLogo();
      });

      modal.addEventListener('click', (e) => {
         if (e.target === modal) {
            handleModalClose();
         }
      });

      navbar.addEventListener('click', handleNavbarToggle);

      // Smooth animations using CSS class toggling and transitions
      function toggleClass(element, className) {
         element.classList.toggle(className);
      }

      // Error handling with user-friendly messages
      function displayError(message) {
         alert(message);
      }

      // Modular functions (each function does ONE thing)
      function getMenuItemById(id) {
         return menuData.find((menuItem) => menuItem.id === id);
      }

      function updateMenuItem(menuItem) {
         const index = menuData.findIndex((item) => item.id === menuItem.id);
         if (index !== -1) {
            menuData[index] = menuItem;
         }
      }

      function deleteMenuItem(id) {
         const index = menuData.findIndex((menuItem) => menuItem.id === id);
         if (index !== -1) {
            menuData.splice(index, 1);
         }
      }

      // Local Storage integration for data persistence
      function saveMenuData() {
         localStorage.setItem('menuData', JSON.stringify(menuData));
      }

      function loadMenuData() {
         const storedMenuData = localStorage.getItem('menuData');
         if (storedMenuData) {
            menuData = JSON.parse(storedMenuData);
         }
      }
   