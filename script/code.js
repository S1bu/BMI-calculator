
    // let height = parseInt(document.getElementById('height').value); //height assigned to height ID
    // let weight = parseInt(document.getElementById('weight').value);//Weight assigned to weight ID
    // const result = document.getElementById('output');// result assigned to output Output
    
let reject = document.querySelector('.output').innerHTML = `<h1>Display</h1>`;//default display
   let clean = '';


    function check(){
        let height = parseInt(document.querySelector('#height').value); //gets the height input
        let weight = parseInt(document.querySelector('#weight').value); //gets the weight input
 
        let convertHeight= height / 100;
        let calculation = (weight / convertHeight**2).toFixed(2);
        console.log(calculation)
    //    let calculation = (weight / ((height*height)/10000)).toFixed(2);
  
       if(calculation < 18.5){//underweight
        document.querySelector('.output' ).innerHTML = `${calculation} (Under weight): <h1>Get that boy a sandwich ☹️</h1>`;

        //emoji
       }
       else if (calculation > 18.5 &&  calculation > 24.9 ) {//normal weight
        document.querySelector('.output').innerHTML = `${calculation} (Normal weight)<h1>Normal👍🏾</h1>`;

       }
       else if(calculation > 25 && calculation > 29.9){//overweight
        document.querySelector('.output').innerHTML = `${calculation}(over weight)<h1>overweight 👎🏾</h1>`;
       }
       else if(calculation > 30){//obese
        document.querySelector('.output').innerHTML = `${calculation}(Overweight)<h1>Obese 💀</h1>`;
       }else{//default
        document.querySelector('.output').innerHTML = `<h1>Input correct data</h1>`; 
       }
       
        // document.querySelector('.output').innerHTML = calculation; //output
       
    }
  
    function clear(){
        let reject = document.querySelector('.output').innerHTML = `Here we go`;
        // document.querySelector('.output').innerHTML = reject;
    }

   