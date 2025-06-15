const { createElement } = require("react");

// Initializing the async function to fetch data from the API
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    // Fetching data using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

         // Clearing the loading message
        dataContainer.innerHTML = '';

        // Creating and appending user list
        const userList = document.createElement('ul');
        users.array.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element.name;
            userList.appendChild(li);

        });
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handling errors
        dataContainer.innerHTML = 'Falied to load user data.';

    }
}

// Invoking fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});

