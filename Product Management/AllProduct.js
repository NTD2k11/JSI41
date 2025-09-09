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

// let new_div = document.createElement("div")
// new_div.className = "new_div"
// new_div.innerHTML = `

// `
get(ref(database, "products/")).then((snapShot) => {
    if (snapShot.exists()) {
        let products = Object.values(snapShot.val())
        console.log(products);
        products.forEach(product =>{
            let product_item = document.createElement("div")
            product_item.className = "product_item"
            product_item.innerHTML = `
            <img alt="${product.name}" src="${product.image}"></img>
            <h1>${product.name}</h1>
            <h2>${product.description}</h2>
            <h3>${product.price}</h3>
            `
            document.querySelector(".AllProduct").appendChild(product_item)
        })
        
    }
})
document.getElementById("back").addEventListener("click", () => {
    window.location=("./CreateProduct.html")
})