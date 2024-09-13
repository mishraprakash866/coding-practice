const anagramList = ["npm", "pmn", "mnp", "mon", "nom", "wed", "dew", "fri"];

/*
Expected Output =>

[
    ["npm", "pmn", "mnp"],
    ["mon", "nom"],
    ["wed", "dew"],
    ["fri"]
]
*/

function returnAnagram() {
    let anagramMap = {};

    anagramList.forEach((word) => {
        let sortedWord = word.split("").sort().join("");

        if (anagramMap[sortedWord]) {
            anagramMap[sortedWord].push(word);
        } else {
            anagramMap[sortedWord] = [word];
        }
    });

    const result = Object.values(anagramMap);
    
    console.log(result);
}

returnAnagram();