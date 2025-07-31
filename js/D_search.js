'use strict';

//search.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK

// Search contact input
const searchContact = document.getElementById('searchInput');
searchContact.addEventListener('input', (input) => {
  const term = input.target.value.toLowerCase().trim();
  const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(term));
  const sortedAndFiltered = filtered.sort((a, b) => a.name.localeCompare(b.name));

  displayedContacts = sortedAndFiltered;

  const totalContacts = document.getElementById('num-total-contacts');
  totalContacts.textContent = `Total Contacts: ${displayedContacts.length}`;

  addContacts(displayedContacts);
});