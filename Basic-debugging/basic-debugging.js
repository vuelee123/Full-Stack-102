// // Basic User Debugging Exercise

const storeOwners = [
    {name:"Charles", stores: 1 },
   {name:"Sally", stores: 1 },
  {name: "Cassandra", stores: 1 },
    {name: "Danny Shavez", stores: 1, location: "in NM"},
];


 function listNumberOfStores () {
for (let i = 0; i < storeOwners.length; i++) {
        let totalLocations = totalLocations + i;
  }
 return i;
};
let locations = listNumberOfStores;

function tellMeMyStores() {
console.log("Hey, can you tell me how many stores you have?");
    if (locations > 0) {
        console.log("Of course, we have " + locations + " stores.");

  }
}
function hasStore() {
  for (let i = 0; i < 3; i++) {
    people = (storeOwners[i].name);
    let person = people.toString();
     console.log("Yes, " + person + " has one.");
}
}
        
tellMeMyStores();
hasStore();


let mister = storeOwners[3].name;
let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");

