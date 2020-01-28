let isBoy = student => student.sex === "M";

let isGirl = student => student.sex === "F";

let getBoys = grades => grades.filter(isBoy);

let getGirls = grades => grades.filter(isGirl);

let average = grades =>
  grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length;

let maxGrade = grades => Math.max(...grades.map(student => student.grade));

let minGrade = grades => Math.min(...grades.map(student => student.grade));

let classroomAverage = average(grades); // 10.2
let boysAverage = average(getBoys(grades)); // 7
let girlsAverage = average(getGirls(grades)); // 13.4
let highestGrade = maxGrade(grades); // 18
let lowestGrade = minGrade(grades); // 2
let highestBoysGrade = maxGrade(getBoys(grades)); // 16
let lowestBoysGrade = minGrade(getBoys(grades)); // 2
let highestGirlsGrade = maxGrade(getGirls(grades)); // 18
let lowestGirlsGrade = minGrade(getGirls(grades)); // 9
//-----------------------------------------------------------

function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
// prints 'What's up?'
greet("casual", formalGreeting, casualGreeting);

//______________________________________________________________
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]
