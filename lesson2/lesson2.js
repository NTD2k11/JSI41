let emptyString = [];
document.getElementById("convertButton").addEventListener("click", () => {
    let text = document.getElementById("inputText");
    document.getElementById("resultText").innerHTML += text.value.toUpperCase() + "<br>";
    emptyString.push(text.value.toUpperCase());
    let textLocalstorage = JSON.parse(localStorage.getItem("List")) || [];
    textLocalstorage.push(text.value.toUpperCase());
    localStorage.setItem("List" , JSON.stringify(textLocalstorage))
    console.log(textLocalstorage);
    
});
document.querySelector("#new_page").addEventListener("click", () => {
    location.href = "lesson2_new_page.html";
});
