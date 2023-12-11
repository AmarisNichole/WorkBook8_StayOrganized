window.onload = () => {
  let userDropdown = document.getElementById("user-dropdown");
  let viewTasksBtn = document.getElementById("user-id-submit");
  let tasksList = document.getElementById("tasks-list");

  // Fetch user data and populate the dropdown
  fetch("http://localhost:8083/api/users")
    .then((res) => res.json())
    .then((users) => {
      // Add a default "Please select a user" option
      let defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "please select a user";
      userDropdown.appendChild(defaultOption);

      // Populate the dropdown with user options
      users.forEach((user) => {
        let option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        userDropdown.appendChild(option);
      });
    });

  // Fetch and display task when the user clicks the button

  viewTasksBtn.onclick = () => {
    // Use userDropdown.value to get the selected value
    let selectedUserId = userDropdown.value;

    // Fetch ToDo details for the selected user
    fetch(`http://localhost:8083/api/todos/${selectedUserId}`)
        .then((res) => res.json())
        .then((task) => {
            let userDetails = document.getElementById("user-details");
            
            userDetails.innerHTML = `
                <h3>User ToDo Details</h3>
                <p>Category: ${task.category}</p>
                <p>Description: ${task.description}</p>
                <p>Deadline: ${task.deadline}</p>
                <p>Priority: ${task.priority}</p>
                <p>Completed: ${task.completed ? 'Yes' : 'No'}</p>
            `;
        })
        .catch(error => console.error('Error fetching ToDo details:', error));
};
  };

