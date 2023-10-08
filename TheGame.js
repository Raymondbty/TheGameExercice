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
]

const main = () => {
    const nameListElement = document.getElementById("nameList");
    const sortButton = document.getElementById("sortButton");

    const populateNameList = (element, names) => {
        element.innerHTML = "";
        names.forEach(name => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            element.appendChild(listItem);
        });
    };

    // Button Element
    const names = data.map(person => person.name);
    populateNameList(nameListElement, names);

    sortButton.addEventListener("click", () => {
        const sortedNames = [...names].sort();
        populateNameList(nameListElement, sortedNames);
    });
}

main();
