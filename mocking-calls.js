// Mocking Calls assignment

const users = [
    {id: 101, name: "Lola", email: "lola.lola@gmail.com"},
    {id: 102, name: "Avis", email: "avis.dabest@yahoo.com"},
    {id: 103, name: "Scarlett", email: "widow.scarlett@hotmail.com"},
    {id: 104, name: "Chris", email: "captain.america@aol.com"},
    {id: 105, name: "Thor", email: "hunky.thunder@gmail.com"}
];
function fetchUserById (id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user =>user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject ('Oops! User id not found');
            }
        }, 1000);
    });
}
fetchUserById(101)
.then(users => {
    console.log(users);
})

fetchUserById(102)
.then(users => {
    console.log(users);
});

fetchUserById(106)
.then(users => {
    console.log(users);
})

.catch(error => {
    console.log(error);
});
