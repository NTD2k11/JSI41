let a = [6, 89, 90, 23, 5, 9]
let sum = 0
for (let i=0;i<a.length;i++){
    sum += a[i]
}
console.log(sum);

let so_chan = []
let so_le = []
for (let b = 0; b < a.length; b++) {
    if (a[b] % 2 ===0) {
        so_chan.push(a[b]) 
    }
    else{
        so_le.push(a[b])
    }
}
console.log(so_chan);
console.log(so_le);

let tong = 0
let so = ""
for (i = 0; i < a.length; i++){
    tong += a[i]
    so += a[i]
    if (i<a.length -1){
        so += " + "
    }
}
console.log(so + " + " + tong);



function submit() {
    let input = document.querySelector(".text")
    document.querySelector(".show").innerHTML += input.value + "<br>"
}





let doihinh = false

document.querySelector(".btn_hinh").addEventListener("click", () => {
    let hinh = document.querySelector(".hinh")

    if(doihinh){
        hinh.style.borderRadius = "0%"
    }
    else{
        hinh.style.borderRadius = "50%"
    }
    doihinh = !doihinh
})
