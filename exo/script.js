// Créer 2 tableaux avec 20 chiffres ou nombres
let firstArray = [];
let secondArray = [];
let thirdArray = [];

for (let i = 0; i < 20; i++) {
    firstArray[i] = Math.floor(Math.random() * 100);
    secondArray[i] = Math.floor(Math.random() * 100);
    
}
console.table(firstArray);
console.table(secondArray);
// commit !

// Créer une fonction pour ordonner ses tableaux 
    // remplir le 3e tableau avec les données des 2 premiers 

thirdArray = (firstArray).concat(secondArray);
/*for(let i = 0; i < firstArray.length; i++) {
    ordoredArray[i] = firstArray[i];
}
for(let j = firstArray.length; j < firstArray.length + secondArray.length; j++) {
    ordoredArray[j] = secondArray[j - firstArray.length];
}*/

console.table(thirdArray);
    //commit !

    // Créer la fonction pour ordonner un tableau
function orderArray(tab) {
    let i = 0;
    while (i < tab.length) {
        if (parseInt(tab[i]) > parseInt(tab[i+1])) {
            let tmp = tab[i];
            tab[i] = tab[i+1];
            tab[i+1] = tmp;
            i = 0 - 1;
        }
        i++;
    }
    return tab;
}

console.table(orderArray(thirdArray));

    // commit !

// Afficher le nombre médian
function findMedian(tab) {
    let length = tab.length;
    let median = 0;
    if(length % 2 == 0) {
        median = (tab[length/2 - 2] + tab[length/2 - 1]) / 2
    } else {
        median = tab[ceil(length/2)];
    }
    return median;
}

console.log(findMedian(thirdArray));
// commit !

