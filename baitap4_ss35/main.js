let employees = [
  [
    { id: 1, name: "Nguyen Van A", position: "Developer" },
    { id: 2, name: "Nguyen Van B", position: "Designer" },
    { id: 3, name: "Nguyen Van C", position: "Project Manager" },
  ],
  [
    { id: 2, name: "Nguyen Van B", position: "Designer" },
    { id: 1, name: "Nguyen Van A", position: "Developer" },
    { id: 3, name: "Nguyen Van C", position: "Project Manager" },
  ],
  [
    { id: 3, name: "Nguyen Van C", position: "Project Manager" },
    { id: 2, name: "Nguyen Van B", position: "Designer" },
    { id: 1, name: "Nguyen Van A", position: "Developer" },
  ],
  [
    { id: 3, name: "Nguyen Van A", position: "Project Manager" },
    { id: 1, name: "Nguyen Van B", position: "Developer" },
    { id: 2, name: "Nguyen Van C", position: "Designer" },
  ],
  [
    { id: 3, name: "asdfasfsf", position: "Project Manager" },
    { id: 1, name: "Nguyen Van B", position: "Developer" },
  ],
];
//lay noi dung nhan vien tu localStorage
employees = JSON.parse(localStorage.getItem("employees"))
//
function showlist(list) {
  // xem list bay gio nhu 1 mang employee[i] mang gom 3 doi tuong
  let table = document.getElementById("table");
  let tbody = document.getElementsByTagName("tbody")[1];
  let liQuenry = document.querySelectorAll("#table tbody .table-light");
  // loai bo nhung phan tu tr co id la table-light (tr chua td)
  liQuenry.forEach((element) => {
    tbody.removeChild(element);
  });
  // duyet  de them phan tu vao
  list.forEach((element) => {
    // tao the tr them tr vao table
    let tr = document.createElement("tr");
    tr.classList.add("table-light");
    tbody.appendChild(tr);

    // tao the td luu id them noi dung them vao tr
    let tdID = document.createElement("td");
    tdID.textContent = element.id;
    tr.appendChild(tdID);

    // tao the td luu name them noi dung va them vao tr
    let tdName = document.createElement("td");
    tdName.textContent = element.name;
    tr.appendChild(tdName);

    // tao the td luu chuc vu them noi dung va them vao tr
    let tdPosition = document.createElement("td");
    tdPosition.textContent = element.position;
    tr.appendChild(tdPosition);
  });
}
showlist(employees[0]);
// tao thanh dieu huong phan trang
let x = 0;
let j = 0;
function pageSplit(list) {
  let div = document.getElementsByClassName("btn-page-split")[0];
  div.innerHTML = "";
  // them btn previous vao dau
  let btnNext = document.createElement("button");
  let btnPrevious = document.createElement("button");
  btnPrevious.classList.add("btn");
  btnPrevious.classList.add("btn-success");
  btnPrevious.classList.add("button");
  btnPrevious.textContent = "Previous";
  div.appendChild(btnPrevious);
  // khi bam vao previous

  btnPrevious.addEventListener("click", () => {
    x--;
    j = x + 1;
    console.log(x);
    showlist(employees[x]);
    if (x == 0) {
      btnPrevious.disabled = true;
    }
    if (x < employees.length - 1) {
      btnNext.disabled = false;
    }
  });
  // kiem tra ban dau
  if (x == 0) {
    btnPrevious.disabled = true;
  }
  // duyet lay phan tu phan trang
  for (let i = 1; i <= list.length; i++) {
    let btni = document.createElement("button");

    btni.classList.add("btn");
    btni.classList.add("btn-success");
    btni.classList.add("button");
    btni.classList.add("check");
    btni.textContent = i;
    div.appendChild(btni);

    // khi click vao thi show list
    btni.addEventListener("click", () => {
      x = i - 1;
      j = i;
      showlist(employees[i - 1]);

      // kiem tra va remove class cho previous
      if (i == 1) {
        btnPrevious.disabled = true;
      } else {
        btnPrevious.disabled = false;
      }
      // kiem tra va remove class cho next
      if (i == list.length) {
        btnNext.disabled = true;
      } else {
        btnNext.disabled = false;
      }
    });
  }

  // them btnnext vao cuoi div
  btnNext.classList.add("btn");
  btnNext.classList.add("btn-success");
  btnNext.classList.add("button");
  btnNext.textContent = "Next";
  div.appendChild(btnNext);

  btnNext.addEventListener("click", () => {
    // x = 0
    console.log(x);
    ++x;
    j = x + 1;
    console.log(x);
    showlist(employees[x]);
    if (x == employees.length - 1) {
      btnNext.disabled = true;
    }
    if (x >= 1) {
      btnPrevious.disabled = false;
    }
  });
  // luu noi dung vao localstorage
  let lis = JSON.stringify(employees);
  localStorage.setItem("employees", lis);
}
pageSplit(employees);
function addNewEmployee() {
  // lay ra 2 the input va lay ra the button them nhan vien
  let inputName = document.getElementById("nameEmployee");
  let inputPosition = document.getElementById("position");
  let btnAddNewEmployee = document.getElementById("addNewEmployee");

  // them nhan vien
  btnAddNewEmployee.addEventListener("click", () => {
    let name = inputName.value;
    let pos = inputPosition.value;
    if (pos != "" && name != "") {
      if (employees[employees.length - 1].length < 3) {
        let ob = {};
        ob.id = Math.round(Math.random() * 100000 ** 2);
        ob.name = name;
        ob.position = pos;
        employees[employees.length - 1].push(ob);

        alert("them moi nhan vien thanh cong");
        pageSplit(employees);
      } else {
        console.log("asdf");

        let id = Math.round(Math.random() * 100000 ** 2);

        let arr = [{ id: id, name: name, position: pos }];
        employees.push(arr);
        alert("them moi nhan vien thanh cong");
        pageSplit(employees);
      }
    }
    inputName.value = "";
    inputPosition.value = "";
  });
  
}
addNewEmployee();
