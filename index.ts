/* 1) Quali sono i tipi primitivi principali in TypeScript?
2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }
4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => { return a + b }
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
7) Cos'è un Type Union e come si scrive?
8) Crea una variabile che possa contenere un numero, null o undefined.
9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
12) Qual è la differenza tra type e interface?
13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
17) Crea un oggetto che implementi l'interfaccia Auto.
18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.  */

console.log("1) Quali sono i tipi primitivi principali in TypeScript?");
console.log("string, boolean, undefined, null");

console.log(
  "2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript."
);
let firstname: string = "Meridjan";
let age: number = 33;
let usingTypescript: boolean = true;
console.log("firstname:", firstname);
console.log("age:", age);
console.log("usingTypescript:", usingTypescript);

console.log('3) Tipizza il parametro della seguente funzione: const greet = (name) => { return "Ciao " + name }');
const greet = (name: string) => {
  return "ciao " + name;
};
console.log(`typeof ${firstname}: `, typeof firstname, ". function: ", greet(firstname));

console.log(
  "4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }"
);

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log("type of sum() return: ", typeof sum(1, 2));

console.log(
  "5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati."
);

const taxedPrice = (price: number): string => {
  let taxedPrice = price + price * 0.22;
  return `${taxedPrice.toFixed(2).toString()}€ iva compresa`;
};
console.log(`versione tassata di ${5}:`, taxedPrice(5));

console.log("6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.");
const funzioneEsercizio6 = (a: string, b: string): number => {
  const c = a + b;
  return c.length;
};
console.log("parola 1: Meridjan.");
console.log("parola 2: Shoti");
console.log(
  "risultato funzione: ",
  funzioneEsercizio6("Meridjan", "Shoti"),
  "tipo: ",
  typeof funzioneEsercizio6("Meridjan", "Shoti")
);

console.log("7) Cos'è un Type Union e come si scrive?");
console.log(
  "una type union è un tipo custom che possiamo usare per definire un dato che unisce più tipi. Usiamo l'OR singolo per indicarlo. Esempio: type topoGigio = null | number | undefined"
);
type topoGigio = null | number | undefined;

console.log("8) Crea una variabile che possa contenere un numero, null o undefined.");
let variabileEsercizio8: topoGigio;
variabileEsercizio8 = 1;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);
variabileEsercizio8 = undefined;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);
variabileEsercizio8 = null;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);

console.log("9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.");

type giorniDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
let giorno: giorniDellaSettimana = "Mercoledì";
console.log("giorno: ", giorno);

console.log("10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]");

const numbers: number[] = [1, 2, 3];

numbers.forEach((e) => console.log(`type of ${e}: `, typeof e));

const numbers1: [a: number, b: number, c: number] = [1, 2, 3];
for (let element of numbers1) {
  console.log(`type of: ${element}`, typeof element);
}

console.log(
  "11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri."
);
let arrEs11: [string, string, string, number, number] = ["1", "2", "3", 4, 5];

for (let element of arrEs11) {
  console.log(`type of: ${element}`, typeof element);
}
console.log("12) Qual è la differenza tra type e interface?");
console.log(
  "una interface serve a definire la struttura di un oggetto, mentre un type semplicemente a definire il tipo di dati"
);
console.log(
  `13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".`
);
interface Obj13 {
  firstname: string;
  lastname: string;
  age: number;
}
const meridjan: Obj13 = {
  firstname: firstname,
  lastname: "Shoti",
  age: age,
};
console.log("type of " + meridjan.firstname, typeof meridjan.firstname);
console.log("type of " + meridjan.lastname, typeof meridjan.lastname);
console.log("type of " + meridjan.age, typeof meridjan.age);
