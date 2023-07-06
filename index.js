
window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://test20230706-1x06.onrender.com')
      .then(response => response.json())
      .then(data => {
        const table = document.getElementById('studentTable');
  
        data.forEach(student => {
          const row = document.createElement('tr');
          const nameCell = document.createElement('td');
          const idCell = document.createElement('td');
  
          nameCell.textContent = student.name;
          idCell.textContent = student.id;
  
          row.appendChild(nameCell);
          row.appendChild(idCell);
          table.appendChild(row);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  
  