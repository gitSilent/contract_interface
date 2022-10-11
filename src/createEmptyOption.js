export function createEmptyOption(){
    let option = document.createElement("option");
    option.setAttribute('disabled', 'disabled');
    option.setAttribute('selected', 'selected');
  
    return option;
  }