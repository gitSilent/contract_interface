import * as vars from "./variables.js"
import {getCatNames, getPatNames, getPatSums} from "./interactWithCategories_Patterns.js"

    

  let catsArr,patsArr,sumArr; 

   
export async function fillSelectCategories(contractInstance){
  
  catsArr = await getCatNames(contractInstance)
  patsArr = await getPatNames(contractInstance)
  sumArr = await getPatSums(contractInstance)

    // console.log(catNames)
    // console.log(patternNames)
    console.log(catsArr)

    catsArr.forEach((el,index)=>{
      let option = document.createElement('option');
      option.value = index;
      option.label = el;
  
      vars.selectCategory.append(option);
      try{
        vars.selectCategoryAddPattern().append(option)
      }catch{
        console.log('not exists')
      }
      
    })
}
export async function fillSelectPatterns(selectCategVal){
  console.log(patsArr[selectCategVal])
  patsArr[selectCategVal].forEach((el,index)=>{
    let option = document.createElement('option');
    option.value = index;
    option.label = el;

    vars.selectPattern.append(option);
    
  })
}
export async function fillPatternsSums(selectCategVal,selectPatVal){
  console.log(sumArr[selectCategVal][selectPatVal])

  sumArr[selectCategVal][selectPatVal].forEach((el,index)=>{
    let option = document.createElement('option');
    option.value = index;
    option.label = el;

    vars.selectSum.append(option);
    
  })
}

