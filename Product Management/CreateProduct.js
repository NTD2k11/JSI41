import {
    get,
    getDatabase,
    set,
    ref,
    onValue,
    update,
    remove,
    push,
    child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA45ty7JYQBip2cf9OWW4qRkGJAhCxRFxA",
    authDomain: "product-management-25e70.firebaseapp.com",
    projectId: "product-management-25e70",
    storageBucket: "product-management-25e70.firebasestorage.app",
    messagingSenderId: "732617590265",
    appId: "1:732617590265:web:dc6b35807c1e8a5cdf2928",
    measurementId: "G-DYXKXWET42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let input_name = document.getElementById("input_name")
let input_image = document.getElementById("input_image")
let input_description = document.getElementById("input_description")
let input_price = document.getElementById("input_price")
document.getElementById("addBtn").addEventListener("click", () => {
    let product_id = window.uuidv4()

    set(ref(database, "products/" + product_id), {
        id: product_id,
        name: input_name.value,
        price: input_price.value,
        image: input_image.value,
        description: input_description.value,
    })

    alert("add thành công")
})
document.getElementById("AllProduct").addEventListener("click", () => {
    window.location.href=("./AllProduct.html")

})