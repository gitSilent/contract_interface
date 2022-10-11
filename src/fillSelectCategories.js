import * as vars from "./variables.js"

export async function fillSelectCategories(catNames, patternNames){
  
    console.log(catNames)
    console.log(patternNames)
  
  
    catNames.forEach((el,index)=>{
      let option = document.createElement('option');
      option.value = index;
      option.label = el;
  
      vars.selectCategory.append(option);
      
    })
}