// Array Methods Assignment

const users= [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkins', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false},
];

const userNameJose = users.find(users => users.firstName === 'Jose');
// console.log(userNameJose);

const premiumMember = users.filter(users => users.isPremiumMember);
// console.log(premiumMember);

const lastNames = users.map(users => users.lastName);
// console.log(lastNames);

const loginTime = users.filter(users => users.logins > 10).map(users => users.firstName + ' ' + users.lastName);
// console.log(loginTime);

const totalLogins = users.reduce(function(total, item) {
    return item.logins + total ;
}, 0);

console.log(totalLogins);