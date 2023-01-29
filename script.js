
const myButton = document.querySelector("#clickme")
console.log(myButton)
function reactionClick() {
    let clickme = document.getElementById('clickme')
    clickme.innerHTML= 'Mode sombre activé'
    document.getElementById("card1a").style.backgroundColor = "black"
    document.getElementById("card2a").style.backgroundColor = "black"
    document.getElementById("card1a").style.color = "white"
    document.getElementById("card2a").style.color = "white"
    div.classList.add("sombre")
}

myButton.addEventListener("click", reactionClick)

const banner = document.querySelector(".banner")
const mesCartes = document.querySelectorAll(".grid")

function ChangeRotationCard(event){
    mesCartes.forEach((carte) => {
        carte.style.transform = "rotate(15deg)"
    })
}

banner.addEventListener("click", ChangeRotationCard)



















//const LeNomDeMonVoisin = (name)=>{ 
    //return(`Je me nomme ${name}`);
    
//};
//console.log(LeNomDeMonVoisin("Jean"))


//var d = new Date();
//var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
//console.log(hours);

//var datedujour = new Date();
//var date = d.getUTCDate() + ":" + d.getMonth()+1 + ":" + d.getFullYear();
//console.log(`La date du jour est`,date);

//function capitalize(nom,prenom){
   // const firstLetterNomMaj = nom.charAt(0).toUpperCase()
   // const resteDuNom = nom.substring(1)
   // const firstLetterPrenomMaj = prenom.charAt(0).toUpperCase()
   // const resteDuPrenom = prenom.substring(1)
    //console.log(`Hello ${firstLetterNomMaj}${resteDuNom} ${firstLetterPrenomMaj}${resteDuPrenom}`)
//}

//capitalize("picot", "louise")

//function evenOrOdd(number){
   // if (number%2==0){
  //      return("Le nombre est pair")
  //  }
   // else {
   //     return("Le nombre est impair")
   // }
//}

//console.log(evenOrOdd(3))

//const numbers = [-1,4,-2,9,18]
//const numbers2 = [15,16,17,1000]

//function sumOfNegative(numbers){
   // let somme = 0
   // numbers.forEach((number)=>{
   //     if (number<0){
  //          somme+=number
   //     }
   // })
   // return ("La somme des négatifs est",somme);
//}

//console.log(sumOfNegative(numbers2))