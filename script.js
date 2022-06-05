let submitBtn = document.querySelector("#submit-btn");
const new_li = document.getElementById("ul-item");
var arr = [];
submitBtn.addEventListener("click", e => {
  e.preventDefault();
  // console.log('clicked')

  const name = document.querySelector("#task-name").value;
  // console.log(name);

  const time = document.querySelector("#task-time").value;
  // console.log(time);

  const check = document.querySelector("#check-box").checked;
  // console.log(check);

  var html = {
    name: name,
    time: time,
    checked: check
    // button:
  };
  arr.push(html);

  displayElement();

  document.querySelector("#task-name").value = "";
  document.querySelector("#task-time").value = "";
  document.querySelector("#check-box").checked = false;
});

function displayElement() {
  new_li.innerHTML = "";
  arr.forEach((html, index) => {
    new_li.innerHTML += ` <li class="card mb-3 li-item" id ='${index}'>
            <div class="card-item p-2">
              <div class="d-flex justify-content-between">
                <div class='h3'>${html.name}</div>
                <div class='h3 text-muted'>${html.time}</div>
                <button id='${index}' class=" button btn-outline-danger rounded" onclick = "deleteList(this.id)"><i class="fas fa-times"></i></button>
              </div>
            </div>
      </li>`;

    setTimeout(() => {
      if (arr[index].checked) {
        document.getElementById(index).classList.add("green");
        // console.log("green");
      } else {
        document.getElementById(index).classList.add("red");
        // console.log("red");
      }
    }, 0);
  });
}

function deleteList(index) {
  arr.splice(index, 1);
  // console.log("deleting ", index);
  displayElement();
}
