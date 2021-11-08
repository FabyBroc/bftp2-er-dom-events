$(document).ready(function() {
	alert("Hola!");
    let tasks = [];

    $('#submit').on("click", function() {
        let newTask = $('#newTask').val();

        if (newTask !== "") {
        
        tasks.push(newTask);
    
        $('#taskList').empty()
        
        tasks.forEach( t => 
            $('#taskList').append(
                `<div class="task">${t}</div>`
            )
        );

     }
        
    })

    $('#clearButton').on("click", function () {
        $('#taskList').empty()
        tasks = [];

    })
})

