let submitBtn = document.getElementById("user-id-submit");
let userDropdown = document.getElementById("user-dropdown");

fetch("http://localhost:8083/api/todos")
    .then((res) => res.json())
    .then((todos) => {
        for (let todo of todos) {
            // Convert userid to a string for consistency
            let userIdString = todo.userid.toString();

            let optionEl = new Option(userIdString);
            userDropdown.appendChild(optionEl);
        }
    });

submitBtn.onclick = () => {
    // Use userDropdown.value to get the selected value
    let selectedUserId = userDropdown.value;

    // Fetch ToDo details for the selected user
    fetch(`http://localhost:8083/api/todos/${selectedUserId}`)
        .then((res) => res.json())
        .then((todo) => {
            let userDetails = document.getElementById("user-details");
            userDetails.innerHTML = `
                <h3>User ToDo Details</h3>
                <p>Category: ${todo.category}</p>
                <p>Description: ${todo.description}</p>
                <p>Deadline: ${todo.deadline}</p>
                <p>Priority: ${todo.priority}</p>
                <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
            `;
        })
        .catch(error => console.error('Error fetching ToDo details:', error));
};