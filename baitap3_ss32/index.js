let subject_list = [];
let ul = document.getElementById("ul-subject");

document.getElementById("btn-add-subject").addEventListener("click", () => {
    let name_subject = document.getElementById("subject-js").value;
    if(name_subject) {
        subject_list.push(name_subject);
        document.getElementById("subject-js").value = "";
        render_subject();
    }
    else{
        alert("tên môn học không được để trống!");
        return;
    }
});

function render_subject () {
    ul.innerHTML = "";

    subject_list.forEach((element, index) => {
        let li = document.createElement("li");
        li.textContent += `${index + 1}. ${element}`;
        ul.appendChild(li);
    })
}

