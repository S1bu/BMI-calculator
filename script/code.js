   function check(){
        let height = parseInt(document.querySelector('#height').value); //gets the height input
        let weight = parseInt(document.querySelector('#weight').value); //gets the weight input
 
        //The calculations
        let convertHeight= height / 100;
        let calculation = (weight / convertHeight**2).toFixed(1);
        

  
       if(calculation <= 18.5){//underweight
        document.querySelector('.output' ).innerHTML = `${calculation} (Under weight): <h1>Get that boy a sandwich ☹️</h1>`;
       }
       if (calculation >= 18.5||calculation >= 24.9 ) {//normal weight
        document.querySelector('.output').innerHTML = `${calculation} (Normal weight)<h1>Normal👍🏾</h1>`;
       }
        if(calculation >= 25.0||calculation >= 29.9){//overweight
        document.querySelector('.output').innerHTML = `${calculation}(over weight)<h1>Cut back on carbs champ ✋🏾</h1>`;
       }
       if(calculation >= 30){//obese
        document.querySelector('.output').innerHTML = `${calculation}(Obese)<h1>Free Gym membership at Virgin active 💀</h1>`;
       }
    
    }
  
   

   