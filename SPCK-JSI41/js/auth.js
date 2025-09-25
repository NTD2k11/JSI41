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

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXPoapiUt2s-CmbDGn9iq2Ucwq8m9XUCQ",
    authDomain: "spck-jsi41.firebaseapp.com",
    projectId: "spck-jsi41",
    storageBucket: "spck-jsi41.firebasestorage.app",
    messagingSenderId: "391813767496",
    appId: "1:391813767496:web:5bc2ecc4882a638b13537d",
    measurementId: "G-NR24JFJYR9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)



function renderForm(type) {
    document.querySelector(".login").innerHTML = "";

    let div = document.createElement("div");
    div.className = type;

    if (type === "register") {
        div.innerHTML = `
            <div class="login_register">
                <a href="#" class="a_login">Login</a>
                <a href="#" class="a_register">Register</a>
            </div>
            <div class="box">
                <h1>Register</h1>
                <hr>
                <input type="text" placeholder="Tên tài khoản" class="Register_InputName">
                <br>
                <input type="password" placeholder="Tạo mật khẩu" class="Register_InputPassword">
                <br>
                <input type="email" placeholder="Email" class="Register_InputEmail">
            </div>
            <button class="btn">Register</button>
            <h5>or</h5>
            <button class="google">Register by Google</button>
            <button class="facebook">Register by Facebook</button>
        `;
        document.querySelector(".login").appendChild(div);

        let Register_InputName = document.querySelector(".Register_InputName")
        let Register_InputPassword = document.querySelector(".Register_InputPassword")
        let Register_InputEmail = document.querySelector(".Register_InputEmail")
        let btn = document.querySelector(".btn")

        btn.addEventListener("click", () => {
            let user_id = window.uuidv4()

            set(ref(database, "Users/" + user_id), {
                Id_user: user_id,
                Name_user: Register_InputName.value,
                Password_user: Register_InputPassword.value,
                Email_user: Register_InputEmail.value,
            })
            alert("Đăng ký thành công")
            window.location.href = ("./index.html")
        })


    } else if (type === "login") {
        div.innerHTML = `
            <div class="login_register">
                <a href="#" class="a_login">Login</a>
                <a href="#" class="a_register">Register</a>
            </div>
            <div class="box">
                <h1>Login</h1>
                <hr>
                <input type="text" placeholder="Tên tài khoản" class="InputName">
                <br>
                <input type="password" placeholder="Mật khẩu" class="InputPassword">
            </div>
            <button class="btn">Login</button>
            <h5>or</h5>
            <button class="google">Signin by Google</button>
            <button class="facebook">Signin by Facebook</button>
        `;
        document.querySelector(".login").appendChild(div);
        let InputName = document.querySelector(".InputName")
        let InputPassword = document.querySelector(".InputPassword")
        let btn = document.querySelector(".btn")

        btn.addEventListener("click", () => {
            get(ref(database, "Users/"))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        let Users = Object.entries(snapshot.val())
                        let found = false

                        Users.forEach(([id, user]) => {
                            if (
                                InputName.value === user.Name_user &&
                                InputPassword.value === user.Password_user
                            ) {
                                found = true
                            }
                        })
                        if (found) {
                            alert("Đăng nhập thành công");
                            window.location.href = "./index.html";
                        } else {
                            alert("Sai tài khoản hoặc mật khẩu");
                        }
                    } else {
                        alert("Chưa có user nào trong database!")
                    }
                })
        })

    }

    document.querySelector(".a_login").addEventListener("click", () => renderForm("login"));
    document.querySelector(".a_register").addEventListener("click", () => renderForm("register"));
}

renderForm("login");
