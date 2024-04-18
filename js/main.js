const kiloMetri = document.getElementById("km-input");

const età = document.getElementById("age-input");

const Button = document.getElementById("calc-price");



Button.addEventListener("click" , function(){

   const prezzo = kiloMetri.value * 0.21;

    console.log(kiloMetri.value);

    console.log(età.value);

    console.log(prezzo);


    let prezzoScontato = prezzo

    if(età.value<18) {
    
        let prezzoScontato = prezzo * 0.80;
    
    
    } else if(età.value>65) {
    
        let prezzoScontato = prezzo * 0.60;
    
    } else {
    
     let prezzoScontato = prezzo
    
    }

    console.log(prezzoScontato);





})












