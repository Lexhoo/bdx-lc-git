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

const loadStudents = function(listStudents) {
  const template = document.getElementsByClassName('student')[0];
  const container = document.getElementById('students');
  
  container.innerHTML = '';
  
  for (let i = 0; i < listStudents.length; i++) {
      const student = listStudents[i];
      const elementStudent = template.cloneNode(true);
      elementStudent.setAttribute('href', 'detail .html?student=' + i);
      // récupère l'image
      const elementImage = elementStudent.getElementsByTagName('img')[0];
      elementImage.src = './images/' + student.image + '.jpg';
      //lastname
      const elementLastname = elementStudent.getElementsByClassName('lastname')[0];
      elementLastname.innerHTML = student.lastname;
      //firstname
      const elementFirstname = elementStudent.getElementsByClassName('firstname')[0];
      elementFirstname.innerHTML = student.firstname;
      //job
      const elementJob = elementStudent.getElementsByClassName('job')[0];
      elementJob.innerHTML = student.job;

      container.appendChild(elementStudent);
  }
}
loadStudents(persons);
// 2eme partie du livecoding
const btnAll = document.getElementById('show-all');
const btnStudents = document.getElementById('show-students');
const btnProfs = document.getElementById('show-profs');

const filterPerson = function(type){
  const students = persons.filter(function(person) {
    return person.type === type;
  });
  loadStudents(students);
}

btnAll.addEventListener('click', function(){
  loadStudents(persons);
});

btnStudents.addEventListener('click', function() {
  filterPerson("student");
});

btnProfs.addEventListener('click', function(){
  filterPerson("prof");
});












