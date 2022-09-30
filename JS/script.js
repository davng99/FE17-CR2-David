let week_tasks = JSON.parse(weekly_tasks); //Converting from string to object
let cards_box =  document.getElementById("weekly-box");
let sort_btn = document.getElementById("sort-priority");

updateHTML();
addEvent();

function updateHTML() { 
    // for (let task of week_tasks){ 
    //     cards_box.innerHTML += `
    //     <div class="col mt-4">
    //         <div class="card"">
    //             <img class="card-img-top weekly-image" src="${task.img}" alt="Card image cap">
    //             <div class="card-body">
    //                 <h5 class="card-title">${task.taskName}</h5>
    //                 <p class="card-text" style="height: 60px">${task.description}</p>
    //                 <hr>
    //                 <p class="priority">
    //                 <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
    //                 Priority level: <span class="importance-color">${task.importance}</span>
    //                 </p>
    //                 <hr>
    //                 <button class="btn btn-outline-dark importance">Importance</button>
    //             </div>
    //         </div>
    //     </div>
    //     `;
    // }

    for (let task of week_tasks){ 
        cards_box.innerHTML += `
        <div class="col mt-4">
            <div class="card"">
                <img class="card-img-top weekly-image" src="${task.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${task.taskName}</h5>
                    <p class="card-text" style="height: 60px">${task.description}</p>
                    <hr>
                    <p class="priority">
                        <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
                        Priority level: 
                        <button class="btn btn-warning importance">
                            Importance <span class="importance-color">${task.importance}</span>
                        </button>
                    </p>
                    <hr>
                </div>
            </div>
        </div>
        `;
    }
}

function addEvent() {
    let importance_btns = document.getElementsByClassName("importance");

    for (let i = 0; i < importance_btns.length; i++){
        importance_btns[i].addEventListener("click", function() {
        importance(i);
        })
    }
}


let importance_color = document.getElementsByClassName("importance-color");

// When Importance Btn is clicked Priority Level increase by 1 (max. Increase 5)
function importance(index){
    if (week_tasks[index].importance != 5){
        week_tasks[index].importance++;

        // document.getElementsByClassName("priority")[index].innerHTML = week_tasks[index].importance;
        
        // document.getElementsByClassName("priority")[index].innerHTML = `
        // <i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
        // Priority level: <span class="importance-color">${week_tasks[index].importance}</span> 
        // `;

        importance_color[index].innerHTML = `${week_tasks[index].importance}`;
        
        //If Priority Level is between 2 and 3 => Priority Level will have a bg color of yellow
        if (week_tasks[index].importance > 1){
            importance_color[index].setAttribute("style", "background-color: yellow; color: black");
            // importance_color.innerHTML = `<span class="importance-color">${week_tasks[index].importance}</span>`;
            importance_color.innerHTML = week_tasks[index].importance;
        } 

        //If Priority Level is between 4 and 5 => Priority Level will have a bg color of red
        if (week_tasks[index].importance > 3){
            importance_color[index].setAttribute("style", "background-color: red; color: white");
            // importance_color.innerHTML = `<span class="importance-color">${week_tasks[index].importance}</span>`;
            importance_color.innerHTML = week_tasks[index].importance;
        } 

    }
}


sort_btn.onclick = sortBypriorityLevel;

// Sorts the resulting list of tasks according to the level of importance (higest to lowest)
function sortBypriorityLevel(){
    week_tasks.sort((a, b) => b.importance - a.importance);
    cards_box.innerHTML = "";
    updateHTML();
    addEvent();
}