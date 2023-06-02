let input_field = document.getElementById("new-task-name")

input_field.onkeydown = function(event) {
    if (event.keyCode == 13) {
        register_text();
        input_field.value = '';
    }
}


function register_text() {
    document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="task-name">
                ${document.querySelector('#newtask input').value}
            </span>
            <div class="task-delete">
            &#x2713;
            </div>
        </div>
    `;

    var current_tasks = document.querySelectorAll(".task-delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}