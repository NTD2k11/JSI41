let content = document.querySelector(".content")
fetch("https://jsonplaceholder.typicode.com/albums") // Gọi API
    .then(function (response) {
        return response.json();
    }) // Xử lý dữ liệu trả về
    .then(function (data) { // Dữ liệu trả về ở dạng mảng và bên trong mảng thì có nhiều object
        for (let i = 0; i < 5; i++) {
            let new_div = document.createElement("div")
            new_div.className = "new_div"
            new_div.innerHTML = `
                <p>ID: ${data[i].id}</p>
                <h2 class="Title">${data[i].title}</h2>
                <button class="save">Save</button>
            `
            content.appendChild(new_div)
            console.log(data[i]);
        }
    }); // In ra dũ liệu trả về ở console

