class Employee{
  constructor(firstName,lastName,email,jobTitle,office,department,phoneNumber,skypeID){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.jobTitle =jobTitle;
    this.office = office;
    this.department = department;
    this.phoneNumber = phoneNumber;
    this.skypeID = skypeID;
  }
}

const resultPanel = document.getElementById("searchResult");
const AlphabetFilter = document.getElementById("filterByName");
document.getElementById("welcomeMessage").insertAdjacentText("afterend","Andrew Phillips");

function displayAllEmployee(){
  clearResults();
  employees.forEach( staff =>{
    addEmployee(staff);
  });
}

function addAlphabetFilter(){
  for(let i=65; i<=90; i++){
    let btn = document.createElement("button");
    btn.innerText = String.fromCharCode(i);
    btn.setAttribute("onclick","filterByAlphabet('"+btn.innerText+"')");
    AlphabetFilter.appendChild(btn);
  }
}

function filterByOffice(oName){
  clearResults();
  employees.forEach( staff =>{
    if(staff.office===oName){
      addEmployee(staff);
    }
  });
}

function filterByDepartment(dName){
  clearResults();
  employees.forEach( staff =>{
    if(staff.department===dName){
      addEmployee(staff);
    }
  });
}

function filterByAlphabet(letter){
  clearResults();
  employees.forEach( staff =>{
    if(staff.firstName[0]===letter){
      addEmployee(staff);
    }
  });
}

function createEmployee(){
  let val1 = document.getElementById("fName").value;
  let val2 = document.getElementById("lName").value;
  let val3 = document.getElementById("email").value;
  let val4 = document.getElementById("jobtitle").value;
  let val5 = document.getElementById("dpmt").value;
  let val6 = document.querySelector( 'input[name="office"]:checked').value;
  let val7 = document.getElementById("number").value;
  let val8 = document.getElementById("skypeID").value;
  let newEmployee = new Employee(val1,val2,val3,val4,val5,val6,val7,val8);
  employees.push(newEmployee);
  addEmployee(newEmployee);
}

function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addEmployee(staff){
  let newResult = document.createElement("div");
  newResult.innerHTML = "<img src=\"images/person-icon.png\">"
    + "<p><b>"+staff.firstName+" "+staff.lastName+"</b><br>"+staff.jobTitle+"<br>"+staff.department+" Department<br>"
    + "<img src=\"images/number-icon.PNG\"> <img src=\"images/email-icon.PNG\"> <img src=\"images/message-icon.PNG\">"
    + " <img src=\"images/star-icon.PNG\"> <img src=\"images/heart-icon.PNG\"></p>";
  newResult.setAttribute("class","result");
  resultPanel.appendChild(newResult);
}

function clearResults(){
  resultPanel.innerHTML = "";
}

let sample = new Employee("Hardik","Jaiswal","hardik@technovert.com","Intern","India","IT","7060232702",
"hj83700@skype");
let employees = [sample];
addEmployee(sample);
addAlphabetFilter();