'use strict';

//popupHandlers.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK

// CLOSE POP-UPS
const closePopupX = document.querySelectorAll('.close-popup');
closePopupX.forEach(button => {
  button.addEventListener('click', () => {
    // מוצא את ה-Popup הכי קרוב שעוטף את הכפתור
    const popup = button.closest('.popup-overlay');
    if (popup)
      popup.style.display = 'none';
  });
});

// info POPUP - OPEN the full info of the contact
function showContactInfo(contact, index) {
  document.getElementById('infoImage').src = contact.image
  document.getElementById('infoName').textContent = contact.name
  document.getElementById('infoPhone').textContent = contact.phone
  document.getElementById('infoEmail').textContent = contact.email
  document.getElementById('infoAddress').textContent = contact.address

  document.getElementById('infoPopup').style.display = 'flex'
};


// Add new Contact POPUP - activating Add New Contact button
const AddNewContact = document.getElementById('addNewContact')
AddNewContact.addEventListener('click', () => {
  currentEditIndex = null;
  document.getElementById('addContactPopup').style.display = 'flex';
  document.getElementById('addContactForm').reset();
  document.getElementById('AddOrEdit').textContent = "Add New Contact";
});