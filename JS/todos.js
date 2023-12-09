window.onload = () => {
    fetch("http://localhost:8083/api/categories")
        .then((res) => res.json())
        .then((categories) => {
            let populateDropdown = document.getElementById("dropdown");

            categories.forEach((category) => {
                // Create a div element for storing basic category details
                let categoryCard = document.createElement("div");
                // Add a class called card for styling
                categoryCard.classList.add("card");

                // Interpolate each category card from our fetch request
                categoryCard.innerHTML = `
                <p>
                `
            })
        })
}