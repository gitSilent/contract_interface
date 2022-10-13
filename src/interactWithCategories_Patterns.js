export async function getCatNames(contractInstance){
    let catNamesArr = await contractInstance.methods.getCatNames().call()
  console.log("///////////////////////////////")

    return catNamesArr
}
export async function getPatNames(contractInstance){
    let patNamesArr = await contractInstance.methods.getPatNames().call()
  console.log("-----------------------------------")

    return patNamesArr
}
export async function getPatSums(contractInstance){
    let patSumsArr = await contractInstance.methods.getPatSums().call()
  console.log("||||||||||||||||||||||||||||||||||||||")
    
    return patSumsArr
}