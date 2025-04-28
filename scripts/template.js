import { speisekarte } from './db.js';


export function hauptGerichtTemplate(){
    let diches = document.getElementById("mainCourse");
    diches.innerHTML = "";
    let content = "";

    for (let i = 0; i < speisekarte.hauptgerichte.length; i++) {
        content += `
        <div class="dialog">
            <div class="foodContainer">
                <h3>${speisekarte.hauptgerichte[i].name}</h3>
                <p>${speisekarte.hauptgerichte[i].beschreibung}</p>
                <strong class="prices">${speisekarte.hauptgerichte[i].preis} €</strong>
            </div>
            <div class="buttonContainer"><button onclick="addToBasket(${i},'deutsch')" class="addButton">+</button></div>
        </div>`;
    }

    diches.innerHTML = content;
}


export function renderBasketList(basketListe) {
    let basketContent = document.getElementById("basket");
    basketContent.innerHTML = "";
    let content = "";
    let total = 0;
    if (basketListe.length > 0) {
        for (let i = 0; i < basketListe.length; i++) {
            let item = basketListe[i];
            let itemTotal = item.preis * item.amount; 
            total += itemTotal;
            content += `
                <div>
                    <h3>${item.name}</h3>
                    <div class="basketDialog">
                        <button onclick="updateAmount(${i}, -1)" class="dialogButton">-</button>
                        <p class="amount">${item.amount}x</p>
                        <button onclick="updateAmount(${i}, 1)" class="dialogButton">+</button>
                        <div class="priceAndIcone">
                        <p class="price">${item.preis.toFixed(2)} €</p>
                       
                        <i onclick="deleteElement(${i})" class="fas fa-trash deleteIcon"></i>
                        </div>
                    </div>
                </div>
            `;
        }
        content += `<div><strong>Gesamt: ${total.toFixed(2)} €</strong></div>`;
    } else {

        content = "";
    }
    basketContent.innerHTML = content;
}
  
export function italienischTemplate() {
    let dichesItalian = document.getElementById("italienisch");
    dichesItalian.innerHTML = "";
    let content = "";

    for (let i = 0; i < speisekarte.italienisch.length; i++) {
        content += `
        <div class="dialog">
            <div class="foodContainer">
                <h3>${speisekarte.italienisch[i].name}</h3>
                <p>${speisekarte.italienisch[i].beschreibung}</p>
                <strong class="prices">${speisekarte.italienisch[i].preis} €</strong>
            </div>
            <div class="buttonContainer"><button onclick="addToBasket(${i}, 'italienisch')" class="addButton">+</button></div>
        </div>`;
    }

    dichesItalian.innerHTML = content;
}



export function asiatischTemplate() {
    let dichesAsiatisch = document.getElementById("asiatisch");
    dichesAsiatisch.innerHTML = "";
    let content = "";

    for (let i = 0; i < speisekarte.asiatisch.length; i++) {
        content += `
        <div class="dialog">
            <div class="foodContainer">
                <h3>${speisekarte.asiatisch[i].name}</h3>
                <p>${speisekarte.asiatisch[i].beschreibung}</p>
                <strong class="prices">${speisekarte.asiatisch[i].preis} €</strong>
            </div>
            <div class="buttonContainer"><button onclick="addToBasket(${i}, 'asiatisch')" class="addButton">+</button></div>
        </div>`;
    }

    dichesAsiatisch.innerHTML = content;
}



export function  orientalischTemplate() {
    let dichesOrientalisch = document.getElementById("orientalisch");
    dichesOrientalisch.innerHTML = "";
    let content = "";

    for (let i = 0; i < speisekarte.orientalisch.length; i++) {
        content += `
        <div class="dialog">
            <div class="foodContainer">
                <h3>${speisekarte.orientalisch[i].name}</h3>
                <p>${speisekarte.orientalisch[i].beschreibung}</p>
                <strong class="prices">${speisekarte.orientalisch[i].preis} €</strong>
            </div>
            <div class="buttonContainer"><button onclick="addToBasket(${i}, 'orientalisch')" class="addButton">+</button></div>
        </div>`;
    }
    dichesOrientalisch.innerHTML = content;
}



