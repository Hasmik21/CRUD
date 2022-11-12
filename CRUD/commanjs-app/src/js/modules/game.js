// function rings (winner = "") {
//     if(winner === "frodo") {
//         console.log("ring go to Frodo");
//     } else if(winner === "gandalf") {
//         console.log("ring go to Gandalf");
//     }
// }

// module.exports = rings;

const persons = [
    {name: "Frodo", hasRing: false},
    {name: "Bilbo", hasRing: false}
]

function setRing (persons, owner) {
    return persons.map(person => {
        if(person.name === owner) {
            person.hasRing = true;
        } else {
            person.hasRing = false;
        }
    });
}

module.exports = {persons, setRing}



// module.exports = function log () {
//     console.log("Hello");
// }


// const {ex} = require("../index");
