function GetAllStudents(){

fetch("https://test20230706-1x06.onrender.com/getAllStudents")
    .then(response=>response.json())
    .then(json=>{
        let studentsul=document.getElementById("students");
        json.forEach(s=>{
            let studentsli=document.createElement("li");
            studentsli.innerHTML=s.name;
            studentsul.appendChild(studentsli);})
    })
}