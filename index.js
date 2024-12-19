async function getUserProfile(url){
    fetch(url)
    .then(response => response.json())
    .then(user => {
        const {name, username, email} = user;
       
        let card = document.createElement("div");
        card.className = "card";


        let nameElement = document.createElement("h2");
        nameElement.innerText = name;


        let userNameElement = document.createElement("p");
        userNameElement.innerText = username;


        let emailElement = document.createElement("p");
        emailElement.innerText = email;


        card.appendChild(nameElement);
        card.appendChild(userNameElement);
        card.appendChild(emailElement);


        document.getElementById("Profiles").appendChild(card);
    });
}


async function getUserPosts(url) {
    fetch(url)
    .then(response => response.json())
    .then(posts => {
        let postsContainer = document.createElement("div");
        postsContainer.className = "posts";


        let postsTitle = document.createElement("h3");
        postsTitle.innerText = "Posts:";
        postsContainer.appendChild(postsTitle);


        posts.slice(0, 3).forEach(post => {
            let postElement = document.createElement("p");
            postElement.innerText = post.title;
            postsContainer.appendChild(postElement);
        });


        document.getElementById("Posts").appendChild(postsContainer);
    });
}


async function getUserTodos(url) {
    fetch(url)
    .then(response => response.json())
    .then(todos => {
        let todosContainer = document.createElement("div");
        todosContainer.className = "todos";


        let todosTitle = document.createElement("h3");
        todosTitle.innerText = "Todos:";
        todosContainer.appendChild(todosTitle);


        todos.slice(0, 3).forEach(todo => {
            let todoElement = document.createElement("p");
            todoElement.innerText = todo.title;
            todosContainer.appendChild(todoElement);
        });


        document.getElementById("Todos").appendChild(todosContainer);
    });
}




for (let i = 1; i <= 5; i++) {
    getUserProfile("https://jsonplaceholder.typicode.com/users/" + i);
    getUserPosts("https://jsonplaceholder.typicode.com/todos?userId=" + i);
    getUserTodos("https://jsonplaceholder.typicode.com/todos?userId=" + i);
}


