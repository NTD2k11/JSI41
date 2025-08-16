const products = [
    {
        id: 1,
        name: "Áo Thun Nam Cotton",
        price: 199000,
        category: "Thời trang",
        description: "Áo thun nam chất liệu cotton mềm mại, thoáng mát.",
        image: "https://picsum.photos/300/200?random=1"
    },
    {
        id: 2,
        name: "Giày Thể Thao Unisex",
        price: 450000,
        category: "Giày dép",
        description: "Giày thể thao unisex phong cách trẻ trung, năng động.",
        image: "https://picsum.photos/300/200?random=2"
    },
    {
        id: 3,
        name: "Tai Nghe Bluetooth",
        price: 350000,
        category: "Điện tử",
        description: "Tai nghe Bluetooth âm thanh sống động, pin lâu.",
        image: "https://picsum.photos/300/200?random=3"
    },
    {
        id: 4,
        name: "Túi Xách Da Nữ",
        price: 599000,
        category: "Phụ kiện",
        description: "Túi xách da nữ sang trọng, phù hợp mọi dịp.",
        image: "https://picsum.photos/300/200?random=4"
    },
    {
        id: 5,
        name: "Bình Giữ Nhiệt 500ml",
        price: 150000,
        category: "Gia dụng",
        description: "Bình giữ nhiệt 500ml giữ nóng/lạnh lên đến 12 giờ.",
        image: "https://picsum.photos/300/200?random=5"
    },
]

const productList = document.querySelector('.container_product');

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>Giá:</strong> ${product.price.toLocaleString()}₫</p>
        <a><em>${product.category}</em></a>
        <p>${product.description}</p>
      `;
    productList.appendChild(card);
});


// document.getElementById("Thời trang").addEventListener("click", () => {
//     productList.innerHTML = ""
//     card.innerHTML = `
//         <img src="${products[0].image}" alt="${products[0].name}">
//         <h3>${products[0].name}</h3>
//         <p><strong>Giá:</strong> ${products[0].price.toLocaleString()}₫</p>
//         <a><em>${products[0].category}</em></a>
//         <p>${products[0].description}</p>
//     `
//     productList.appendChild(card)
// })
let btn = document.querySelector(".btn")
for(i=0; i<btn.length; i++){
    btn[i].addevent
}