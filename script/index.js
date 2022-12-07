const input = document.getElementById("input")
const list = document.getElementById("list")
const AddBtn = document.getElementById("btn")
const searchBtn = document.getElementById("searchBtn")
const searchInput = document.getElementById("searchInput")

  AddBtn.addEventListener("click", addTodo)
   function addTodo(){
      let todo = input.value.trim();
      if(!todo){
        alert("you need to enter a task...")
        return;
      }
      let li = document.createElement("li")
      const date = new Date();
      li.className = `${todo}`
      li.innerHTML += `
        <div class="column">
            <span class="task">${todo}</span>
            <span class="date">${date.toLocaleString("default", {weekday: "long"})}, ${date.getDay()} ${date.toLocaleString("default", {month: "long"})} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}</span>
       </div>
        <div class="flex">
            <i class="fa fa-calendar  listIcons" aria-hidden="true"></i>
            <i class="fa fa-pencil  listIcons" aria-hidden="true"></i>
            <i class="fa fa-trash  listIcons" aria-hidden="true"></i>
        </div>
      `
      list.appendChild(li)
      const delBtn = document.querySelectorAll(".fa-trash")
      delBtn.forEach(item=>{
        item.addEventListener("click", deleteTask)
      })
   }

function deleteTask(e){
    e.target.parentElement.parentElement.remove();
}

searchBtn.addEventListener("click", findTask)
function findTask(){
    let value = searchInput.value.trim();
    if(!value){
      alert("please input a Todo activity");
      return;
    }
    Array.from(list.children).forEach(item=>{
        if(item.classList.contains(value)){
            item.style.display = "block"
            item.style.display = "flex"
        }else{
          item.style.display = "none"
        }
    })
}