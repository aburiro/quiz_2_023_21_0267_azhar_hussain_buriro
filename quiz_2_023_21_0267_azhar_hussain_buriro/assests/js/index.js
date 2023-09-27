function cP(number, totalNumber) {
    if (totalNumber === 0) {
        return 0;
    }
    const perce = (number / totalNumber) * 100;
    return perce;
}

const number = 25;
const totalAmount = 100;
const perce = cP(number, totalAmount);

console.log(number + " is " + perce + "% of " + totalAmount);

const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

persons.forEach((person) => {
    console.log("Person " + person.id + " name is " + person.personName + " having salary " + person.personIncome);
});



const person = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
};


const keys = Object.keys(person);

console.log("Properties are below:");
keys.forEach((key) => {
    console.log(key);
});

