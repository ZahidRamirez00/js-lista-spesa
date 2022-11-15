//Data una lista della spesa già compilata nel vostro codice, stampare in console 
//gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.

let listaSpesa = ["Banane", "Mele", "Insalata", "Patate", "Zucchine", "Cavolfiore", "Yogurt", "Mozzarella", "Latte", "Uova", "Tofu", "Prosciutto", "Baguette"];

//Stampa della lista con il ciclo FOR
console.log("Stampa lista della spesa con il ciclo FOR:");
for(let i = 0; i < listaSpesa.length; i++){
    console.log(listaSpesa[i]);
}
console.log("----Fine lista----");

//Stampa della lits con il ciclo WHILE
let x = 0;
console.log("Stampa lista della spesa con il ciclo WHILE:");
while(listaSpesa[x] != undefined){
    console.log(listaSpesa[x]);
    x++;
}
console.log("----Fine lista----");