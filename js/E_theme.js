'use strict';

//theme.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK


// theme.js

const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    // מצב כהה פעיל
    themeToggleBtn.textContent = '☀️ Light Mode';
    themeToggleBtn.style.backgroundColor = 'white';
    themeToggleBtn.style.color = 'black';
  } else {
    // מצב רגיל
    themeToggleBtn.textContent = '🌙 Dark Mode';
    themeToggleBtn.style.backgroundColor = 'black';
    themeToggleBtn.style.color = 'white';
  }
});