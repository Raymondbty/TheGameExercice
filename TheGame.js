// TheGame.js
// 08/09/2023
// By Amaury Bariety
// On Linux FEDORA 35
// Have a nice day

const data = [
    {id: 0,     name: 'Sergio',     age: 18,    dept: [2]},
    {id: 1,     name: 'Maxime',     age: 52,    dept: [4,8]},
    {id: 2,     name: 'Aurelien',   age: 16,    dept: [1,11]},
    {id: 3,     name: 'Anthony',    age: 19,    dept: [9,5,6,2,1]},
    {id: 4,     name: 'Emma',       age: 87,    dept: [10,6,9,8]},
    {id: 5,     name: 'Amanda',     age: 56,    dept: []},
    {id: 6,     name: 'Julien',     age: 11,    dept: [3]},
    {id: 7,     name: 'David',      age: 23,    dept: [5]},
    {id: 8,     name: 'Florian',    age: 38,    dept: [7,10]},
    {id: 9,     name: 'Nathan',     age: 56,    dept: [4,6]},
    {id: 10,    name: 'Thibaut',    age: 29,    dept: []},
    {id: 11,    name: 'Hugo',       age: 18,    dept: [2,6]}
];

const main = () => {
    const nameListElement = document.getElementById("nameList");
    const sortByNameButton = document.getElementById("sortByNameButton");
    const sortByAgeButton = document.getElementById("sortByAgeButton");
    const mostDebtsPersonElement = document.getElementById("mostDebtsPerson");
    const personOwedMostMealsElement = document.getElementById("personOwedMostMeals");

    const originalData = [...data];
    let isSortedByName = false;
    let isSortedByAge = 0;

    const populateNameList = (element, persons) => {
        element.innerHTML = "";
        persons.forEach(person => {
            const listItem = document.createElement("li");
            listItem.textContent = `${person.name}, ${person.age} ans`;
            element.appendChild(listItem);
        });
    };

    // Find person with most debts
    const findPersonWithMostDebts = () => {
        const personWithMostDebts = originalData.reduce((maxDebtsPerson, currentPerson) => {
            if (currentPerson.dept.length > maxDebtsPerson.dept.length) {
                return currentPerson;
            } else {
                return maxDebtsPerson;
            }
        }, originalData[0]);

        return personWithMostDebts;
    };

    // Find person owed most meals
    const findPersonOwedMostMeals = () => {
        const personOwedMostMeals = originalData.reduce((maxOwedMealsPerson, currentPerson) => {
            const currentOwedMeals = currentPerson.dept.length;
            if (currentOwedMeals > maxOwedMealsPerson.dept.length) {
                return currentPerson;
            } else {
                return maxOwedMealsPerson;
            }
        }, originalData[0]);

        return personOwedMostMeals;
    };

    // Update functions
    const updateMostDebtsPerson = () => {
        const personWithMostDebts = findPersonWithMostDebts();
        mostDebtsPersonElement.textContent = `${personWithMostDebts.name} est la personne qui doit le plus de repas avec ${personWithMostDebts.dept.length} repas !`;
    };

    const updatePersonOwedMostMeals = () => {
        const personOwedMostMeals = findPersonOwedMostMeals();
        personOwedMostMealsElement.textContent = `${personOwedMostMeals.name} est la personne à qui l'on doit le plus de repas : ${personOwedMostMeals.dept.length} repas.`;
    };

    populateNameList(nameListElement, originalData);

    // Sort by name button
    sortByNameButton.addEventListener("click", () => {
        if (isSortedByName) {
            populateNameList(nameListElement, originalData);
        } else {
            const sortedData = [...originalData].sort((a, b) => a.name.localeCompare(b.name));
            populateNameList(nameListElement, sortedData);
        }
        isSortedByName = !isSortedByName;
        isSortedByAge = 0;
        updateMostDebtsPerson();
        updatePersonOwedMostMeals();
    });

    // Sort by age button
    sortByAgeButton.addEventListener("click", () => {
        if (isSortedByAge === 0) {
            const sortedData = [...originalData].sort((a, b) => b.age - a.age);
            populateNameList(nameListElement, sortedData);
            isSortedByAge = 1;
        } else if (isSortedByAge === 1) {
            const sortedData = [...originalData].sort((a, b) => a.age - b.age);
            populateNameList(nameListElement, sortedData);
            isSortedByAge = 2;
        } else {
            populateNameList(nameListElement, originalData);
            isSortedByAge = 0;
        }
        isSortedByName = false;
        updateMostDebtsPerson();
        updatePersonOwedMostMeals();
    });
    updateMostDebtsPerson();
    updatePersonOwedMostMeals();
};

main();