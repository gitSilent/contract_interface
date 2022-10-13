import * as vars from "./variables.js"; 
import {
    showModalAddPattern,
    hideModalAddPattern
  } from "./hideShowElements.js";

export function fillModalAddPattern(){
    let div = document.createElement('div');
    div.className = "div-addPattern";
    div.innerHTML = `
        <h2>Добавление шаблона</h2>
        <button class="btn-addPatternToArr btn-usual">Добавить шаблон</button>
        <select name="" id="" class="select-category-addPattern">
        <input type="text" name="" id="" class="input-addPattern" placeholder="Введите название шаблона">
        <input type="text" name="" id="" class="input-addPatternSum" placeholder="Сумма">
        <button class="btn-addExtraSum btn-usual">+</button>
    `
    let img = document.createElement('img');
    img.className = "img-cross-voting"
    img.setAttribute('src', "./src/png/cross.png")
    div.append(img)


    vars.modalAddPattern.append(div)

   

    div.querySelector('.img-cross-voting').addEventListener('click', ()=>{
        hideModalAddPattern()
        vars.modalAddPattern.innerHTML = "";
    })
    div.querySelector('.btn-addExtraSum').addEventListener('click', ()=>{
        let input = document.createElement('input');
        input.className = "input-addPatternSum";
        input.setAttribute("placeholder", "Сумма")

        div.querySelector('.btn-addExtraSum').before(input)
    })
    div.querySelector('.btn-addPatternToArr').addEventListener('click', ()=>{
        let patName = div.querySelector('.input-addPattern');
        console.log(patName.value)
        div.querySelectorAll('.input-addPatternSum').forEach((val)=>{
            console.log(val.value)
        })
        // console.log(patName.value)
    })

    
    
}