'use strict';

// dom.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK

// function that creates "li" - contact with full inner html.
function addContacts(contacts) {
  const ul = document.querySelector('.contacts');
  ul.innerHTML = '';

  //הודעה מתאימה אם אין אנשי קשר במערך
  if (contacts.length === 0) {
    const noContactsMsg = document.createElement('p');
    noContactsMsg.textContent = 'No contacts for now';
    noContactsMsg.style.textAlign = 'center';
    noContactsMsg.style.padding = '20px';
    noContactsMsg.style.color = 'red'
    ul.appendChild(noContactsMsg);
    return;
  }

  contacts.forEach((contact, index) => {
    const li = document.createElement('li');

    // --- אירועי עכבר על li ---
    li.addEventListener('mouseenter', () => {
      if (document.body.classList.contains('dark-mode')) {
        li.style.backgroundColor = 'gray'
      }
      else {
        li.style.backgroundColor = '#f9f9f9';
      }
    });

    li.addEventListener('mouseleave', () => {
      li.style.backgroundColor = '';
    });

    // יצירת חלק ימיני שמכיל תמונה, שם ומספר טלפון
    const leftDiv = document.createElement('div');
    leftDiv.className = 'contact-info';

    const img = document.createElement('img');
    img.src = contact.image;
    img.alt = 'Profile';
    img.className = 'contact-image';

    const spanName = document.createElement('span');
    spanName.className = 'contact-name';
    spanName.textContent = contact.name;

    const spanPhone = document.createElement('span')
    spanPhone.className = 'contact-phone'
    spanPhone.textContent = contact.phone;

    const infoDiv = document.createElement('div');
    infoDiv.className = 'namePhoneWrapper';

    infoDiv.appendChild(spanName);
    infoDiv.appendChild(spanPhone);
    leftDiv.appendChild(img);
    leftDiv.appendChild(infoDiv);

    // יצירת חלק שמאלי של כפתורים
    const btnsDiv = document.createElement('div');
    btnsDiv.className = 'contact-buttons';

    const detailsBtn = document.createElement('button');
    detailsBtn.title = 'Details';
    detailsBtn.innerHTML = '<i class="fas fa-info-circle"></i>';

    const editBtn = document.createElement('button');
    editBtn.title = 'Edit';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.title = 'Delete';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    //בניית איש קשר ב HTML
    btnsDiv.appendChild(detailsBtn);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(deleteBtn);


    li.appendChild(leftDiv);
    li.appendChild(btnsDiv);
    ul.appendChild(li);
  });
}