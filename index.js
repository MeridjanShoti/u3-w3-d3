/*
17) Crea un oggetto che implementi l'interfaccia Auto.
18) Cosa sono i Generics in TypeScript?
19) È possibile avere più tipi generici in un'interfaccia?
20) Crea un'interfaccia generica per una risposta API.  */
console.log("1) Quali sono i tipi primitivi principali in TypeScript?");
console.log("string, boolean, undefined, null");
console.log("2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.");
var firstname = "Meridjan";
var age = 33;
var usingTypescript = true;
console.log("firstname:", firstname);
console.log("age:", age);
console.log("usingTypescript:", usingTypescript);
console.log('3) Tipizza il parametro della seguente funzione: const greet = (name) => { return "Ciao " + name }');
var greet = function (name) {
    return "ciao " + name;
};
console.log("typeof ".concat(firstname, ": "), typeof firstname, ". function: ", greet(firstname));
console.log("4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => { return a + b }");
var sum = function (a, b) {
    return a + b;
};
console.log("type of sum() return: ", typeof sum(1, 2));
console.log("5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.");
var taxedPrice = function (price) {
    var taxedPrice = price + price * 0.22;
    return "".concat(taxedPrice.toFixed(2).toString(), "\u20AC iva compresa");
};
console.log("versione tassata di ".concat(5, ":"), taxedPrice(5));
console.log("6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.");
var funzioneEsercizio6 = function (a, b) {
    var c = a + b;
    return c.length;
};
console.log("parola 1: Meridjan.");
console.log("parola 2: Shoti");
console.log("risultato funzione: ", funzioneEsercizio6("Meridjan", "Shoti"), "tipo: ", typeof funzioneEsercizio6("Meridjan", "Shoti"));
console.log("7) Cos'è un Type Union e come si scrive?");
console.log("una type union è un tipo custom che possiamo usare per definire un dato che unisce più tipi. Usiamo l'OR singolo per indicarlo. Esempio: type topoGigio = null | number | undefined");
console.log("8) Crea una variabile che possa contenere un numero, null o undefined.");
var variabileEsercizio8;
variabileEsercizio8 = 1;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);
variabileEsercizio8 = undefined;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);
variabileEsercizio8 = null;
console.log("typeof variabileEsercizio8: ", typeof variabileEsercizio8);
console.log("9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.");
var giorno = "Mercoledì";
console.log("giorno: ", giorno);
console.log("10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]");
var numbers = [1, 2, 3];
numbers.forEach(function (e) { return console.log("type of ".concat(e, ": "), typeof e); });
var numbers1 = [1, 2, 3];
for (var _i = 0, numbers1_1 = numbers1; _i < numbers1_1.length; _i++) {
    var element = numbers1_1[_i];
    console.log("type of: ".concat(element), typeof element);
}
console.log("11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.");
var arrEs11 = ["1", "2", "3", 4, 5];
for (var _a = 0, arrEs11_1 = arrEs11; _a < arrEs11_1.length; _a++) {
    var element = arrEs11_1[_a];
    console.log("type of: ".concat(element), typeof element);
}
console.log("12) Qual è la differenza tra type e interface?");
console.log("una interface serve a definire la struttura di un oggetto, mentre un type semplicemente a definire il tipo di dati");
console.log("13) Definisci un'interfaccia in TypeScript per un oggetto dotato di propriet\u00E0 \"firstname\", \"lastname\", e \"age\".");
var meridjan = {
    firstname: firstname,
    lastname: "Shoti",
    age: age,
};
console.log("type of " + meridjan.firstname, typeof meridjan.firstname);
console.log("type of " + meridjan.lastname, typeof meridjan.lastname);
console.log("type of " + meridjan.age, typeof meridjan.age);
console.log("14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.");
var temistualdo = {
    name: "temistualdo",
    email: "temistualdo@vdm.it",
};
console.log("type of ".concat(temistualdo.name), typeof temistualdo.name);
console.log("type of ".concat(temistualdo.email), typeof temistualdo.email);
console.log('15) Crea un array tipizzato di oggetti "Studente" con nome e voto.');
var studente1 = { nome: "Mario", voto: 7 };
var studente2 = { nome: "Luigi", voto: 5 };
var studente3 = { nome: "Giangianni", voto: 10 };
var studentArray;
studentArray = [studente1, studente2, studente3];
console.log(studentArray);
console.log("16) Crea un'interfaccia base \"Veicolo\" e estendila per creare \"Auto\".");
var yaris = {
    ruote: 4,
    alimentazione: "ibrido",
    cambio: "automatico",
    kilometri: 200000,
    marca: "toyota",
};
