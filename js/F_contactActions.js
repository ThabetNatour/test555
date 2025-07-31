'use strict';

// contactActions.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK

// function to count and sort contacts by name from A-Z
function sortAndRenderContacts() {
  displayedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  const totalContacts = document.getElementById('num-total-contacts');
  totalContacts.textContent = `Total Contacts: ${displayedContacts.length}`;

  addContacts(displayedContacts);
}
sortAndRenderContacts();


// Delete All Contacts Button - מחיקת כל אנשי הקשר
const deleteAllContacts = document.getElementById('delete-all');
deleteAllContacts.addEventListener('click', () => {
  const approveDeleteAll = confirm('Are you sure you want to delete all contacts?');
  if (approveDeleteAll) {
    contacts.length = 0;
    sortAndRenderContacts();
  }
});


// Delete specific contact
function deleteThisContact(contact) {
  const confirmDelete = confirm(`Are you sure you want to delete ${contact.name}?`);
  if (confirmDelete) {
    //חיפוש על אינדקס אמיתי של איש קשר בתוך מערך ומחיקתו
    const index = contacts.findIndex(c => c === contact);
    if (index !== -1) {
      contacts.splice(index, 1);
      sortAndRenderContacts();
    }
  }
}


// activating Edit Contact Function
function editContact(contact, index) {
  currentEditIndex = contacts.findIndex(c => c === contact);

  document.getElementById('addContactPopup').style.display = 'flex';
  document.getElementById('AddOrEdit').textContent = "Edit Contact";

  document.getElementById('newName').value = contact.name;
  document.getElementById('newPhone').value = contact.phone;
  document.getElementById('newEmail').value = contact.email;
  document.getElementById('newAddress').value = contact.address;
  document.getElementById('newImage').value = contact.image;
}


// activating Cancel Button
const cancelBtn = document.getElementById('cancelContactBtn')
cancelBtn.addEventListener('click', () => {
  document.getElementById('addContactPopup').style.display = 'none'
});


// activating Save button to Add or Edit new Contact
const saveBtn = document.getElementById('saveContactBtn')
saveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('AddOrEdit').textContent = "Add New Contact";

  const name = document.getElementById('newName').value.trim();
  const phone = document.getElementById('newPhone').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const address = document.getElementById('newAddress').value.trim();
  const image = document.getElementById('newImage').value.trim();

  //Checking name, phone numebr and email
  if (!name || !phone) {
    alert("Name and Phone number are required!");
    return;
  }

  if (isNaN(phone) || phone.length != 10) {
    alert("Invaled phone number! phone number must contain 10 digits of numbers only.")
    return;
  }

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address!");
      return;
    }
  }

  //Checking duplicate name or phone number
  const nameTrimmed = name.trim().toLowerCase();
  const phoneTrimmed = phone.trim();

  const isDuplicate = contacts.some((contact, index) => {
    if (index === currentEditIndex)
      return false; // דילוג למצב עריכה
    return (
      contact.name.trim().toLowerCase() === nameTrimmed ||
      contact.phone.trim() === phoneTrimmed
    );
  });

  if (isDuplicate) {
    alert("Contact with the same name or phone number already exists.");
    return;
  }

  // Create/Update Contact object
  const updatedContact = {
    name,
    phone,
    email,
    address,
    image: image || './images/blank-profile-picture.png'
  };

  if (currentEditIndex !== null) {
    // מצב עריכה
    contacts[currentEditIndex] = updatedContact;
    currentEditIndex = null;
  } else {
    // מצב הוספה
    contacts.push(updatedContact);
  }

  document.getElementById('addContactPopup').style.display = 'none';
  document.getElementById('addContactForm').reset();

  sortAndRenderContacts();
});


// Event Delegation, find the closest li to Contact Buttons and do
document.querySelector('.contacts').addEventListener('click', (event) => {
  const li = event.target.closest('li');
  if (!li) return;

  const index = Array.from(li.parentElement.children).indexOf(li);
  const contact = displayedContacts[index];

  if (!contact) return;

  if (event.target.closest('button[title="Edit"]')) {
    editContact(contact);
  } else if (event.target.closest('button[title="Delete"]')) {
    deleteThisContact(contact);
  } else if (event.target.closest('button[title="Details"]')) {
    showContactInfo(contact);
  }
});