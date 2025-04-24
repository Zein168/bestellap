import { speisekarte } from './db.js';

function renderHauptGerichte(){
    let diches = document.getElementById("mainCourse")
    diches.innerHTML = "";
    let content = "";
    for (let i = 0; i < speisekarte.hauptgerichte.length; i++) {
        content += `<div class="gericht">
        <h3>${speisekarte.hauptgerichte[i].name}</h3>
        <p>${speisekarte.hauptgerichte[i].beschreibung}</p>
        <strong>${speisekarte.hauptgerichte[i].preis} €</strong>
      </div>`;

  
        
    }
    diches.innerHTML = content;
} 

renderHauptGerichte();