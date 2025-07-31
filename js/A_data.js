'use strict';

//data.js
//תאבת נאטור חגאגרה - 212790406
//חכם נאטור - 318486479
//תוכנה 50/5
//PHONE BOOK


let displayedContacts = [];
let currentEditIndex = null;

// מערך של אובייקטים CONTACTS
const contacts = [
  {
    name: "Alice Cohen",
    phone: "0501234567",
    email: "alice.cohen@example.com",
    address: "Herzl St 10, Tel Aviv",
    image: "./images/blank-profile-picture.png"
  },
  {
    name: "David Levi",
    phone: "0527654321",
    email: "david.levi@example.com",
    address: "Jaffa Rd 25, Jerusalem",
    image: "./images/blank-profile-picture.png"
  },
  {
    name: "Sara Mizrahi",
    phone: "0539876543",
    email: "sara.mizrahi@example.com",
    address: "Rothschild Blvd 30, Haifa",
    image: "./images/blank-profile-picture.png"
  },
  {
    name: "Yossi Ben-Haim",
    phone: "0541122334",
    email: "yossi.bh@example.com",
    address: "Dizengoff St 15, Ramat Gan",
    image: "./images/blank-profile-picture.png"
  }
];