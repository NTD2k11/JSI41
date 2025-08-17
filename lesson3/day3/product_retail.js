var url_string = window.location.href;
var url = new URL(url_string);
var productId = url.searchParams.get("productId");
console.log(productId);

let products = JSON.parse(localStorage.getItem("products"))
console.log(products);

let product_detail = document.querySelector(".product-detail")
products.forEach((product) => {
    if (product.id == productId) {
        product_detail.innerHTML = `
        <img class="product-image" src="${product.image}" alt="Áo Thun Nam Cotton"></img>
        <div class="product-info">
            <h1 class="product-name">${product.name}</h1>
            <p class="product-description">${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        </div>
        `
        document.querySelector(".name_id").innerHTML = product.category
    }
})
document.querySelector(".btn_back").addEventListener("click", () => {
    window.location.href = "day3.html"
})

// btvn: thêm tên loại sản phẩm khi ở trang thông tin và tạo 1 nút back về trang chủ