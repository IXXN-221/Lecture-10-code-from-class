// Functions as values

function isBoat(x){
    return (x == 'boat') // 'return' will end the function call and give back the return value to whereever called the function
}

let theTruth = isBoat('boat') // because the function is effectively a value we can have it assigned to a variable.
let lies = isBoat('plane')

console.log(theTruth)
console.log(lies)



// Where does this help us?

function greetingInformal(name){
    return `Hi there ${name} `
}

function greetingFormal(name){
    return `It is a pleasure to meet you ${name} `
}

function plesentry(shoeBrand){
    return `nice ${shoeBrand}!`
}
///
function sayComplement(name, shoe, society){
    if(society == 'High'){
        console.log(greetingFormal(name)+plesentry(shoe))
    } else {
        console.log(greetingInformal(name)+plesentry(shoe))
    }
}


// window.onload = () => sayComplement('Kent', 'Loafers', 'High')


//Practice:

// window.onload = () => {
//     let pracArray = [34,55,43,56,97,26,23,78,39]

//     document.getElementById('arrayHolder').innerHTML = pracArray
//     document.getElementById('lowest').innerHTML = findLowest(pracArray)

//     function findLowest(arr){
//             // create loop to find the lowest number
//             let minNum = arr[0]
//             for(let i=0; i<arr.length; i++){
//                 if(minNum > arr[i]){
//                     minNum = arr[i]
//             }
            
//     }
//     return minNum
// }
// }





// //Reading input values from fields

function isCool(){
    console.log(`Yes, ${document.getElementById("colour").value} is cool.`)
}


// //Practice: Try creating a conditional statement that compares your number to a random number by console logging "[your number] is greater than [random number]" or "[your number] is less than [random number]"



function compare(){

    let randomNumber = Math.random()*50
    let myNumber = document.getElementById("colour").value

    if(myNumber>randomNumber){
        console.log(`${myNumber} is greater than ${randomNumber}`)
    } else {
        console.log(`${myNumber} is less than ${randomNumber}`)
    }
}



// Setting up functions as part of a model

// let conversation = {
//     name: 'Steph',
//     shoeBrand: 'Reeboks',
//     society: 'High',
//     greetingInformal: function(){
//         return `Hi there ${this.name} `
//     },
//     greetingFormal: function(){
//         return `It is a pleasure to meet you ${this.name} `
//     },
//     plesentry: function(){
//         return `nice ${this.shoeBrand}!`
//     },
//     sayComplement: function(){
//         if(this.society == 'High'){
//             console.log(this.greetingFormal()+this.plesentry())
//         } else {
//             console.log(this.greetingInformal()+this.plesentry())
//         }
//     }
// }



// window.onload = () => {
//     // conversation.name = 'Emil'
//     // conversation.society = 'Middle'
//     // conversation.shoeBrand = 'Beckers'

//     conversation.sayComplement();
// }


// // Practice: Setup a simple sports team object that includes a name, sportType, numberOfPlayers, and a function that console logs all that information.




