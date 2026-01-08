
// Script for div animation and background blur animations

// Animazione del cursore sopra la sezione contatti , quando passa il cursore si crea un effetto 
// blur tipo alone nella sezione 

// Creazione dell elemento 

function coordinates(event){
    BlurEllipse.style.display = 'unset'; /* Di defoult è none*/ /* Cosi compare */
    let rect = Container.getBoundingClientRect(); /* Prende la posizione del container */ 
    console.log("Container left space :" +rect.x);
    console.log("Container top space :" +rect.y);
    let x = event.clientX - rect.x;
    let y = event.clientY - rect.y;
    console.log("x : " + x);
    console.log("y : " +  y);
    BlurEllipse.style.top= y - 500 ; /* -100 per allineare le cordinate con il cetro dell ellisse */
    BlurEllipse.style.left= x - 500 ;
}

function hideEllipse(){
    BlurEllipse.style.display = "none";
}



var BlurEllipse = document.createElement('div');  //Creazione del div
BlurEllipse.id = 'BlurEllipse'; //Assegnazione del id 
let Container = document.getElementById('card'); //Aggancio all' elemento container
Container.appendChild(BlurEllipse); //Aggiunta del blur alla card
Container.addEventListener("mouseover",coordinates);
Container.addEventListener("mousemove",coordinates);
Container.addEventListener("mouseout",hideEllipse);
