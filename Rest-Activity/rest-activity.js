// REST Activity assignment

const divResults = document.getElementById('results');

// Get all posts
function getAllPosts() {
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json) => {
          divResults.innerHTML = '';
          for (let i = 0; i <json.length; i++) {
            divResults.innerHTML += 
            '<p> userId: ' + json[i].userId + '</p>' +
            "<p> id: " + json[i].id + "</p>" +
            "<p> title: " + json[i].title + "</p>" +
            "<p> body: " + json[i].body + "</p>";
          }
        });
}

// // Get post with id of 10
function getPostId10 () {
    fetch('http://jsonplaceholder.typicode.com/posts/10')
    .then(response => response.json ())
    .then((json) => {
        divResults.innerHTML = ' ';
        divResults.innerHTML += 
            "<div id='post'>" +
            "<p> userId: " + json.userId + "</p>" +
            "<p> id: " + json.id + "</p>" +
            "<p> title: " + json.title + "</p>" +
            "<p> body: " + json.body + "</p>";
    });
}

// Create a new post and log the id generated for it by the server

function createNewPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify ({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        },
    })
        .then(response => response.json())
        .then((json) => {
            divResults.innerHTML = ' ';
            divResults.innerHTML += 
                "<p> id: " + json.id + "</p>";
        });
}

// Replace the post with id of 12 and render the responseJSON
function replacePostId12 () {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
          id: 12,
          title: 'Replaced 12',
          body: 'bar',
          userId: 1
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
      })
        .then(response => response.json())
        .then((json) => {
            divResults.innerHTML = ' ';
            divResults.innerHTML += 
                "<p> userId: " + json.userId + "</p>" +
                "<p> id: " + json.id + "</p>" +
                "<p> title: " + json.title + "</p>" +
                "<p> body: " + json.body + "</p>";
        });
}

// Update the title of post with id of 12 and render responseJSON
function updatPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify ({
            title: "This is the new title",
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
    })
    .then(response => response.json())
    .then((json) => {
        divResults.innerHTML = ' ';
        divResults.innerHTML += 
            "<p> userId: " + json.userId + "</p>" +
            "<p> id: " + json.id + "</p>" +
            "<p> title: " + json.title + "</p>" +
            "<p> body: " + json.body + "</p>";
});
}

// delete the post with id of 12 and render a success message
function deletePost () {
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
      }).then((json) => {
        divResults.innerText = "Success!";
        divResults.innerHTML = ' ';
            divResults.innerHTML += 
                "<div id='delete'>" +
                "<h2>Post 12 has been deleted!</h2>" +
                "</div>";
      });
    }