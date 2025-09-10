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
        let products = Object.entries(snapShot.val())
        console.log(products);
        products.forEach(([product_id, product]) => {
            let product_item = document.createElement("div")
            product_item.className = "product_item"
            product_item.innerHTML = `
            <img alt="${product.name}" src="${product.image}"></img>
            <h1>${product.name}</h1>
            <h2>${product.description}</h2>
            <h3>${product.price}</h3>
            <button class="update_btn">Update</button>
            <button class="delete_btn" >Delete</button>
            `
            document.querySelector(".AllProduct").appendChild(product_item)

            product_item.querySelector(".delete_btn").addEventListener("click", () => {
                remove(ref(database, "products/" + product_id))
            })

            product_item.querySelector(".update_btn").addEventListener("click", () => {
                // window.location.href = ("./Update.html")
                let update_box = document.createElement("div")
                update_box.className = "update_box"
                update_box.innerHTML = `
                    <h2>Image URL</h2>
                    <input type="text" placeholder="Enter image URL" class="update_input_image" value="${product.image}">
                    <h2>Name</h2>
                    <input type="text" placeholder="Enter name" class="update_input_name" value="${product.name}">
                    <h2>Description</h2>
                    <textarea name="" placeholder="Enter description" class="update_input_description" value="${product.description}"></textarea>
                    <h2>Price</h2>
                    <input type="text" placeholder="Enter price" class="update_input_price" value="${product.price}">
                    <hr>
                    <button id="updateBtn">Update</button>
                `
                
                document.body.appendChild(update_box)
                
                let update_input_name = document.querySelector(".update_input_name")
                let update_input_image = document.querySelector(".update_input_image")
                let update_input_description = document.querySelector(".update_input_description")
                let update_input_price = document.querySelector(".update_input_price")


                document.getElementById("updateBtn").addEventListener("click", () => {
                    update(ref(database, "products/" + product_id), {
                        name: update_input_name.value,
                        price: update_input_price.value,
                        image: update_input_image.value,
                        description: update_input_description.value
                    })
                })



            })
        })

    }
})
document.getElementById("back").addEventListener("click", () => {
    window.location = ("./CreateProduct.html")
})

