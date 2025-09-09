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
const firebaseConfig = {
    apiKey: "AIzaSyBj61jis21F99v9U-QlUBkyxGfLuv_9iP0",
    authDomain: "jsi41-ntd.firebaseapp.com",
    projectId: "jsi41-ntd",
    storageBucket: "jsi41-ntd.firebasestorage.app",
    messagingSenderId: "204411702092",
    appId: "1:204411702092:web:92feb70913781d4ec41de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

let MynameInput = document.getElementById("myNameInput")
let addBtn = document.getElementById("addbtn")
let image = document.getElementById("image")
let description = document.getElementById("description")
let price = document.getElementById("price")
addBtn.addEventListener("click", function () {
    let product_id = window.uuidv4()

    set(ref(database, "products/" + product_id), {
        name: MynameInput.value,
        price: price.value,
        image: image.value,
        description: description.value,
    })

    alert("add thành công")
})

let getallbtn = document.getElementById("GetAllBtn")
getallbtn.addEventListener("click", function () {
    get(ref(database, "products/")).then((snapShot) => {
        if (snapShot.exists()) {
            let products = Object.values(snapShot.val())
            console.log(products);
            products.forEach(product => {
                let product_item = document.createElement("div")
                product_item.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="100">
                <h1>${product.name}</h1>
                <h2>${product.description}</h2>
                <h3>${product.price}</h3>
            `
                document.querySelector(".show").appendChild(product_item)
            });
        }



    })
})


// update
let update = document.getElementById("update")
update.addEventListener("click", () => {
    let product_id = window.uuidv4()

    set(ref(database, "products/" + product_id), {
        name: MynameInput.value,
        price: price.value,
        image: image.value,
        description: description.value,
    })

})