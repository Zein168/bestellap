import { hauptGerichtTemplate, renderBasketList, italienischTemplate, asiatischTemplate, orientalischTemplate } from './template.js';
import { speisekarte } from './db.js';

function renderHauptGerichte() {
    hauptGerichtTemplate();
}

function renderItalienisch() {
    italienischTemplate();
}

function renderAsiatisch() {
    asiatischTemplate();
}

function renderOrientalisch() {
    orientalischTemplate();
}

renderHauptGerichte();
renderItalienisch();
renderAsiatisch();
renderOrientalisch();

let basketListe = [];
function addToBasket(index, kategorie) {
    let gericht;
    if (kategorie === 'deutsch') {
        gericht = speisekarte.hauptgerichte[index];
    } else if (kategorie === 'italienisch') {
        gericht = speisekarte.italienisch[index];
    } else if (kategorie === 'asiatisch') {
        gericht = speisekarte.asiatisch[index];
    } else if (kategorie === 'orientalisch') {
        gericht = speisekarte.orientalisch[index];
    }
    let existingItem = basketListe.find(item => item.name === gericht.name);
    if (existingItem) {
        existingItem.amount += 1;
    } else {
        gericht.amount = 1;
        basketListe.push(gericht);
    }
    renderBasketList(basketListe);
}

function updateAmount(index, delta) {
    let item = basketListe[index];
    if (item) {
        item.amount += delta;

        if (item.amount <= 0) {
         
            basketListe.splice(index, 1);
        }
        
        renderBasketList(basketListe);  
    }
}

function deleteElement(index){
    basketListe.splice(index, 1);
    renderBasketList(basketListe);
}

window.deleteElement = deleteElement;
window.updateAmount = updateAmount; 
window.addToBasket = addToBasket; 
