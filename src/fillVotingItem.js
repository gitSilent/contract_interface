import * as vars from "./variables.js"; 
import {hideModalVoting} from "./hideShowElements.js";
export function  fillVotingItem(arrPromotions,choosenUserAddress,contractInstance,curUser){
    vars.modalVoting.innerHTML = "";
    console.log("voting filled")
    // contractInstance.methods.getPromotionArr(adr).call()
    // .then((val)=>{
    //     console.log(val)
    // })
    let idChoosenPromotion;
    console.log(arrPromotions)
    // arrPromotions.some((el,index)=>{
    //     if(el.promoted == choosenUserAddress){
    //         console.log("da");
    //         return true
    //     }else{
    //         console.log("net");
    //     }

    // })
    arrPromotions.forEach(async(el,index) => {
    console.log(arrPromotions)

        console.log(el.promoted == choosenUserAddress)
        console.log(choosenUserAddress)
        console.log(el.promoted)
        if(el.promoted == choosenUserAddress){
            idChoosenPromotion = index;

            let qtyAdmins = await contractInstance.methods.qtyAdmins().call()
            let currentUserVoted = false;

            console.log("УСЛОВИЕ")
            let div = document.createElement('div');
            div.className = "cont-votingInfo";
            div.innerHTML = `
            <h2 class="h2-promoted">Голосование за: ${el.promoted} </h2>
                <p class="p-activePromotion">true</p>
                <p class="qtyVoted">${el.votes.length} из ${qtyAdmins}</p>
                <div class="cont-alreadyVoted">
                <p class="progolosov">Проголосовавшие: </p>
                </div>
                `
                    el.votes.forEach((vote)=>{

                        console.log(vote)
                        if(vote == curUser){
                            currentUserVoted = true;
                        }
                        let p = document.querySelector('p');
                        p.className = "p-alreadyVoted";
                        p.innerHTML = ` 
                        <p class="p-alreadyVoted">• ${vote}</p>
                        `
                        div.innerHTML+=p.innerHTML
                        // return p.innerHTML
                    })
             
            console.log(div.innerHTML)
            let img = document.createElement('img');
            img.setAttribute("src", "./src/png/cross.png")
            img.className = "img-cross-voting"
            img.onclick =  hideModalVoting;

            let btn = document.createElement('button');
            btn.className = "btn-giveVoteTo btn-usual";
            btn.textContent = "Проголосовать"
            btn.addEventListener('click', async()=>{
                try{
                    await contractInstance.methods.toVote(idChoosenPromotion).send({from:curUser});
                    location.reload();
                   
                }catch(er){
                    alert(er.data[Object.keys(er.data)[0]].reason);
                }
                
            })

            if (currentUserVoted){
                let p = document.createElement('p');
                p.className = "p-youVoted"
                p.textContent = "Вы уже проголосовали за повышение в должности данного пользователя"
                div.prepend(p)
            }else{
                let p = document.createElement('p');
                p.className = "p-youNotVoted"
                p.textContent = "Вы еще не отдали свой голос. Хотите сделать это сейчас? "
                div.prepend(p)
            }
            
            vars.modalVoting.append(div);
            vars.modalVoting.append(img);
            vars.modalVoting.append(btn);

        } 
        console.log("ny")
        
    });
   
    }