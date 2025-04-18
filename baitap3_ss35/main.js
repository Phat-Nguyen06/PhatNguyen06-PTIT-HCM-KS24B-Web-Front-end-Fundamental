let products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 32990000,
    image:
      "https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-cute-dep-nhat_093404024.jpg",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    image:
      "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image:
      "https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-cute-dep-nhat_093404024.jpg",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-anh-cute-dep-nhat_093404024.jpg",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];
// let list = JSON.stringify(products);
// localStorage.setItem("products",list);
function showpProduct() {
  // lay ra the div .box va btn search
  let box = document.getElementsByClassName("box")[0];
  box.innerHTML = "";
  console.log(box);

  products.forEach((Element) => {
    // tao the div.member
    let member = document.createElement("div");
    member.classList.add("member");
    box.appendChild(member); // them div.member vao div.box

    // tao the img them scr them alt va them vao div.member
    let img = document.createElement("img");
    img.src = Element.image;
    img.alt = "";
    member.appendChild(img);

    // tao the h3
    let h3 = document.createElement("h3");
    h3.textContent = Element.name;
    member.appendChild(h3);

    // tao the p thong tin va p gia tien
    let pInfor = document.createElement("p");
    let pPrice = document.createElement("p");
    pInfor.textContent = Element.description;
    pPrice.textContent = Element.price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    member.appendChild(pInfor);
    member.appendChild(pPrice);

    // the button
    let btn = document.createElement("button");
    btn.classList.add("btn-buy");
    btn.textContent = "Buy";
    member.appendChild(btn);
  });
}
showpProduct();


// function search
function search(){
  let search = document.getElementsByClassName("btn-search")[0]
  search.addEventListener("click",()=>{
    let input = document.getElementById("Search");
    let content = input.value;
    let list = JSON.parse(localStorage.getItem("products"))
    console.log(list);
    
    products = list.filter(Element =>{return Element["name"].includes(content)})
    showpProduct();
  })
}
search();