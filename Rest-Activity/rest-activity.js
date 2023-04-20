// REST Activity assignment
//const divResults = document.getElementById("results");

// Get all posts
function getAllPosts() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(result => console.log((result))
       // divResults.innerHtml = "";
    )};


// Get post with id of 10
// function getPostId10() {
//     fetch("http://jsonplaceholder.typicode.com/posts/10")
//     .then(response => response.json())
//     .then((json) => {
//         divResults.innerHtml = "";
//         console.log(json);
//     })

// }