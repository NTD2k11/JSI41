let listData = JSON.parse(localStorage.getItem("List")) || [];

let show = document.querySelector("#show");
listData.forEach(item => {
    show.innerHTML += item + "<br>";
});
