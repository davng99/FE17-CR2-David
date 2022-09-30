let tasks_week = JSON.parse(weekly_tasks);
let cards_box =  document.getElementById("weekly-box");
let sort_btn = document.getElementById("sort-priority");

updateHTML();

function updateHTML() {
    for (let task of tasks_week){
        cards_box.innerHTML += `
        <div class="card" style="width: 23rem;">
            <img class="card-img-top weekly-image" src="${task.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${task.taskName}</h5>
                <p class="card-text">${task.description}</p>
                <hr>
                <p class="priority">
                <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
                Importance Level: <span class="importance-color">${task.importance}</span>
                </p>
                <p>
                <i class="fa-sharp fa-solid fa-calendar-days"></i>
                Deadline: ${task.deadline}
                </p>
                <hr>
                <button class="btn btn-warning importance">Importance</button>
                <button class="btn btn-danger">Delete</button>
                <button class="btn btn-success">Done</button>
            </div>
        </div>
        `;
    }
}

// for (let task of tasks_week){
//     cards_box.innerHTML += `
//     <div class="card" style="width: 23rem;">
//         <img class="card-img-top weekly-image" src="${task.img}" alt="Card image cap">
//         <div class="card-body">
//             <h5 class="card-title">${task.taskName}</h5>
//             <p class="card-text">${task.description}</p>
//             <hr>
//             <p class="priority">
//             <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
//             Importance: <span class="importance-color">${task.importance}</span>
//             </p>
//             <p>
//             <i class="fa-sharp fa-solid fa-calendar-days"></i>
//             Deadline: ${task.deadline}
//             </p>
//             <hr>
//             <button class="btn btn-warning importance">Importance</button>
//             <button class="btn btn-danger">Delete</button>
//             <button class="btn btn-success">Done</button>
//         </div>
//     </div>
//     `;
// }

let importance_btn = document.getElementsByClassName("importance");

for (let i = 0; i < importance_btn.length; i++){
    importance_btn[i].addEventListener("click", function() {
        importance(i);
});
}

let importance_color = document.getElementsByClassName("importance-color");

function importance(index){
    if (tasks_week[index].importance != 5){
        tasks_week[index].importance++;
        // document.getElementsByClassName("priority")[index].innerHTML = tasks_week[index].importance;
        document.getElementsByClassName("priority")[index].innerHTML = `
        <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
        Importance Level: <span class="importance-color">${tasks_week[index].importance}</span>
        `

        if (tasks_week[index].importance > 1){
            importance_color[index].setAttribute("style", "background-color: yellow; color: black");
            importance_color.innerHTML = `<span class="importance-color">${tasks_week[index].importance}</span>`;
        } 

        if (tasks_week[index].importance > 3){
            importance_color[index].setAttribute("style", "background-color: red; color: black");
            importance_color.innerHTML = `<span class="importance-color">${tasks_week[index].importance}</span>`;
        } 
    }
}

//Sort button
sort_btn.onclick = sortBypriorityLevel;

// Sorts task cards
function sortBypriorityLevel(){
    tasks_week.sort((a, b) => b.importance - a.importance);
    cards_box.innerHTML = "";
    updateHTML();
}