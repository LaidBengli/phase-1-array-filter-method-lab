// Code your solution here
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(value => value.toLowerCase() == name.toLowerCase());
}
console.log(findMatching(drivers, 'bobby'));
function fuzzyMatch(drivers, letters) {
    return drivers.filter(value => value.slice(0, letters.length).toLowerCase() == letters.toLowerCase());
}
console.log(fuzzyMatch(drivers, 'sam'));
const driverss = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(driverss, s) {
    return driverss.filter(value => (value.name.toLowerCase() == s.toLowerCase()) ? value : false);

}
console.log(matchName(driverss, 'bobby'))