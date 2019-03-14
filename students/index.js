const students = [{
  firstname: 'harry',
  lastname: 'potter',
  image: 'harry',
  job: 'wizard'
}, {
  firstname: 'hermione',
  lastname: 'granger',
  image: 'hermione',
  job: 'wizard'
}, {
  firstname: 'ron',
  lastname: 'weasley',
  image: 'ron',
  job: 'wizard'
}, {
  firstname: 'hagrid',
  lastname: 'rubeus',
  image: 'hagrid',
  job: 'professor'
}, {
  firstname: 'albus',
  lastname: 'dumbledore',
  image: 'albus',
  job: 'headmaster'
}, {
  firstname: 'severus',
  lastname: 'snape',
  image: 'severus',
  job: 'professor'
}, {
  firstname: 'tom',
  lastname: 'riddle',
  image: 'tom',
  job: 'bad guy'
}, {
  firstname: 'drago',
  lastname: 'malefoy',
  image: 'drago',
  job: 'cunt'
}, {
  firstname: 'dolores',
  lastname: 'umbridge',
  image: 'dolores',
  job: 'bad girl'
}];


const loadStudents = function(listStudents) {
  const template = document.getElementsByClassName('student')[0];
  const container = document.getElementById('students');
  
  container.innerHTML = '';
  
  for (let i = 0; i < listStudents.length; i++) {
      const student = listStudents[i];
      const elementStudent = template.cloneNode(true);
      // récupère l'image
      const elementImage = elementStudent.getElementsByTagName('img')[0];
      elementImage.src = student.image + '.jpg';
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

loadStudents(students);

// 2eme partie du livecoding
const btnShuffle = document.getElementById('random-student');
btnShuffle.addEventListener('click', function() {
  const randomStudents = _.shuffle(students);
  loadStudents(randomStudents);
});

window.addEventListener('resize', function() {
  console.log('JE SUIS REDIMENSIONNE !!!!!', window.innerWidth, window.innerHeight)
  console.log('\n')
})











