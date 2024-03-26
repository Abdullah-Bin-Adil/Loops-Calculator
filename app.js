const userInput = +prompt('enter table number')
const times = +prompt('How many time do you want?')


function renderFruits(){

for (let i = 1; i <= times; i++) {
    console.log(`${userInput} * ${i} = ${userInput*i}`);
    
    
}
}