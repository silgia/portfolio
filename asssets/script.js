console.log("Hello, world!");

// 1. binding/ikat form yang sudah ada.
// 2. masukan data dari form ke dalam variable
// 3. simpan datake dalam local storage

const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const messageInput = document.getElementById("message");

var firstName = "";
var lastName ="";
var message ="";

firstNameInput.addEventListener('input', function(event){
    firstName = event.target.value;
    localStorage.setItem('first_name', firstName);
})
lastNameInput.addEventListener('input', function(event){
    lastName = event.target.value;
    localStorage.setItem('last_name', lastName);
})
messageInput.addEventListener('input', function(event){
    message = event.target.value;
    localStorage.setItem('message', message);
})

// Tahap submit data
//1. Binding/ikat tag form yang sudah ada.
// 2. ambil data dari localstorage
//3. tampilkan data ke dalam alert.

const formElement = document.getElementById("form-contact");

formElement.addEventListener('submit', function(event){
    event.preventDefault(); // Mencegah form dari refresh halaman

    // tambah validasi sederhana
    if (!firstName || !lastName || !message) {
        alert("please fill in all fields.");
        return
    }

    const objectInput = {
        firstName: localStorage.getItem('first_name'),
        lastName: localStorage.getItem('last_name'),
        message: localStorage.getItem('message'),
    }
    alert(`First Name: ${objectInput.firstName}\nLast Name: ${objectInput.lastName}\nMessage: ${objectInput.message}`);
})

