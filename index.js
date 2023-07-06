function GetAllStudents(){

fetch("http://localhost:3000/getAllStudents")
    .then(response=>response.json())
    .then(json=>{
        let studentsul=document.getElementById("students");
        json.forEach(s=>{
            let studentsli=document.createElement("li");
            studentsli.innerHTML=s.name;
            studentsul.appendChild(studentsli);})
    })
}