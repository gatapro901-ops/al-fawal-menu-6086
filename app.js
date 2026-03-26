
      // Import necessary libraries and scripts
      import { Lucide } from 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';

      // Define constants and variables
      const navbar = document.getElementById('navbar');
      const heroSection = document.getElementById('hero-section');
      const cardsGrid = document.getElementById('cards-grid');
      const modal = document.getElementById('modal');
      const footer = document.getElementById('footer');
      const logo = document.getElementById('logo');
      const menuItems = [
         { id: 1, name: 'طاعميه', price: 5 },
         { id: 2, name: 'فول', price: 2 }
      ];

      // Function to animate logo
      function animateLogo() {
         logo.classList.add('animate-logo');
         setTimeout(() => {
            logo.classList.remove('animate-logo');
         }, 2000);
      }

      // Function to display menu items
      function displayMenuItems() {
         const menuItemsHtml = menuItems.map((menuItem) => {
            return `
               <div class='card glass-effect'>
                  <h2 class='text-primary'>${menuItem.name}</h2>
                  <p class='text-muted'>${menuItem.price}﷼</p>
               </div>
            `;
         }).join('');
         cardsGrid.innerHTML = menuItemsHtml;
      }

      // Function to handle modal open
      function handleModalOpen() {
         modal.classList.add('show-modal');
      }

      // Function to handle modal close
      function handleModalClose() {
         modal.classList.remove('show-modal');
      }

      // Function to save data to local storage
      function saveDataToLocalStorage(data) {
         localStorage.setItem('menuItems', JSON.stringify(data));
      }

      // Function to retrieve data from local storage
      function retrieveDataFromLocalStorage() {
         const data = localStorage.getItem('menuItems');
         return data ? JSON.parse(data) : [];
      }

      // Function to handle errors
      function handleError(error) {
         console.error(error);
         alert('An error occurred. Please try again.');
      }

      // Event listener for DOM content loaded
      document.addEventListener('DOMContentLoaded', () => {
         animateLogo();
         displayMenuItems();
         const storedMenuItems = retrieveDataFromLocalStorage();
         if (storedMenuItems.length > 0) {
            menuItems = storedMenuItems;
            displayMenuItems();
         }
      });

      // Event listener for modal open button click
      document.getElementById('modal-open-button').addEventListener('click', handleModalOpen);

      // Event listener for modal close button click
      document.getElementById('modal-close-button').addEventListener('click', handleModalClose);

      // Event listener for save button click
      document.getElementById('save-button').addEventListener('click', () => {
         saveDataToLocalStorage(menuItems);
      });

      // Event listener for error handling
      window.addEventListener('error', handleError);
   