const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

for (let i = 0; i < notes.length; i++) {
  const note = notes[i];
  //console.log(note);
}

const notesReverse = [];
for (let i = notes.length - 1; i >= 0; i--) {
  const note = notes[i];
  notesReverse.push(note);
}

const t1 = [12, 14, 16];
const t2 = [13, 15, 17];
const t3 = [];
for (let i = 0; i < t1.length; i++) {
  const n1 = t1[i];
  const n2 = t2[i];
  const sum = n1 + n2;
  t3.push(sum);
}