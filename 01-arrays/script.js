const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insengante] è l'insegnante in posizione [i]

for (let i=0; i < teachers.length; i++) {
  const currentTeacher = teachers[i]
  console.log(`${currentTeacher} è l'insegnante in posizione ${i}`);
}


// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];
//debug
console.log(teachers[3]);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers[4] = "Patrick"
//debug
console.log(teachers[4]);


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
//debug
console.log(lastTeacher)


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers.shift();
//debug
console.log(firstTeacher)


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push("Vanessa");
//debug
console.log(teachers[5]);


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift("Sarah");
//debug
console.log(teachers[0])


// 7. Verifica se 'Fabio' è presente nell'array teachers

console.log(teachers.includes("Fabio"));


// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.includes("Fabio");
//debug
console.log(isFabioPresent)


// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

for (let i = 0; i < teachers.length; i++) {
  const current = teachers[i]
  if (current === "Lewis") {
    lewisIndex = i
    //debug
    console.log(lewisIndex)
  }
}


// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString

const teachersString = teachers.join(", "); 
// Ho aggiunto uno spazio, ma per far apparire solo le virgole si può semplicemente lasciare il valore di join () vuoto
//debug
console.log(teachersString)


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

if (teachers.length === 0) {
  isTeachersEmpty = true 
} else {
  isTeachersEmpty = false
}
//debug
console.log(isTeachersEmpty)