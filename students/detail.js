const persons = [{
  firstname: 'harry',
  lastname: 'potter',
  image: 'harry',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'hermione',
  lastname: 'granger',
  image: 'hermione',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'ron',
  lastname: 'weasley',
  image: 'ron',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'hagrid',
  lastname: 'rubeus',
  image: 'hagrid',
  job: 'professor',
  type: 'prof',
}, {
  firstname: 'albus',
  lastname: 'dumbledore',
  image: 'albus',
  job: 'headmaster',
  type: 'prof',
}, {
  firstname: 'severus',
  lastname: 'snape',
  image: 'severus',
  job: 'professor',
  type: 'prof',
}, {
  firstname: 'tom',
  lastname: 'riddle',
  image: 'tom',
  job: 'bad guy',
  type: 'student',
}, {
  firstname: 'drago',
  lastname: 'malefoy',
  image: 'drago',
  job: 'cunt',
  type: 'student',
}, {
  firstname: 'dolores',
  lastname: 'umbridge',
  image: 'dolores',
  job: 'bad girl',
  type: 'prof',
}];


const baseUri = document.baseURI
const temp = baseUri.split('?');
const studentIndex = temp[1].replace('student=', '');
const student = persons[studentIndex];
const firstnameElement = document.getElementsByClassName('firstname')[0];
firstnameElement.innerHTML = student.firstname;
const lastnameElement = document.getElementsByClassName('lastname')[0];
lastnameElement.innerHTML = student.lastname;
