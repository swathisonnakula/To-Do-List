let submitBtn = document.querySelector("#submit-btn");
const new_li = document.getElementById("ul-item");
var arr = [];

// ADDING CLICK EVENT ON SUBMIT BUTTON
submitBtn.addEventListener("click", e => {
  e.preventDefault();
  // console.log('clicked')

  const name = document.querySelector("#task-name").value;
  // console.log(name);

  const time = document.querySelector("#task-time").value;
  // console.log(time);

  const check = document.querySelector("#check-box").checked;
  // console.log(check);

  // STORE INPUT VALUES IN AN OBJECT
  var html = {
    name: name,
    time: time,
    checked: check
  };
  arr.push(html);

  displayElement();

  // CLEAR INPUTS AFTER SUBMITING
  document.querySelector("#task-name").value = "";
  document.querySelector("#task-time").value = "";
  document.querySelector("#check-box").checked = false;
});

// CREATE A FUNCTION TO DISPLAY LIST AFTER SUBMIT IS CLICKED
function displayElement() {
  new_li.innerHTML = "";
  arr.forEach((html, index) => {
    new_li.innerHTML += ` <li class="card bg-light mb-3 li-item" id ='${index}'>
            <div class="card-item p-2">
              <div class="d-flex justify-content-between">
                <div class='h3'>${html.name} &nbsp;&nbsp; ${html.time}</div>
                <button id='${index}' class=" button btn btn-outline-danger rounded" onclick = "deleteList(this.id)"><i class="fas fa-times"></i></button>
              </div>
            </div>
      </li>`;

    // CHANGE BORDER TO GREE WHEN CHECKED ELSE RED
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

//DELETE A LIST ITEM WHEN CLICKED ON DELETE ICON
function deleteList(index) {
  arr.splice(index, 1);
  // console.log("deleting ", index);
  displayElement();
}

// new_li.innerHTML = "";

// arr.map((html, i) => {
//   new_li.innerHTML += ` <li class="card mb-3 li-item" id ='${i}'>
//         <div class="card-item p-2">
//           <div class="d-flex justify-content-between">
//             <div class='h3'>${html.name} &nbsp;&nbsp; ${html.time}</div>
//             <button  class=" button" ><i class="fas fa-times"></i></button>
//           </div>
//         </div>
//   </li>`;

//   // change the border-left color to green if check else red
//   setTimeout(() => {
//     if (arr[i].checked) {
//       document.getElementById(i).classList.add("green");
//       // console.log("green");
//     } else {
//       document.getElementById(i).classList.add("red");
//       // console.log("red");
//     }
//   }, 0);});

// const deleteBtn = ;
// console.log(deleteBtn);
// function delBtn() {
//   arr.spice(i, 1);
// }
