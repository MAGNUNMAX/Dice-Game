const imag1 = document.querySelector('.img1');
const imag2 = document.querySelector('.img2');
const boton = document.getElementById('boton');

// funcion game para todo el codigo 

function game(){
    let pl1 = 'Player 1 wins!';
    let pl2 = 'Computer  wins!';
    let draw = 'Draw!';
    let randomNumber2;      // variable del problema indefine

    let randomNumber1 = Math.floor(Math.random() * 6); // numero random para player 1

   

    let images = [                                //array de imagenes
        "./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png"
    ];

// funcion callback para obtener el numero random Computer player

function handleRandomNumber(randomNum){
     randomNumber2 = randomNum;
    
}

// funcion para retraso de el 1seg para Computer player

setTimeout(function computer() {
    // Agregar la clase para activar la animación de rotación a la primera imagen
    imag1.classList.add('rotate');

    // Generar un número aleatorio para la segunda imagen
    randomNumber2 = Math.floor(Math.random() * 6);
    
    // Después de 500 milisegundos (medio segundo), agregar la clase de rotación a la segunda imagen
    setTimeout(function() {
        imag2.classList.add('rotate');
    }, 500);

    // Establecer la imagen del dado después de un retraso adicional
    setTimeout(function() {
        // Generar un número aleatorio para la primera imagen
        randomNumber1 = Math.floor(Math.random() * 6);
        imag1.setAttribute('src', images[randomNumber1]);
    }, 1500); // Retrasar la selección de la imagen del dado en 1 segundo

    // Establecer la imagen del dado y llamar a la función comparation después de que ambas imágenes hayan girado
    setTimeout(function() {
        // Establecer la imagen del dado para la segunda imagen
        imag2.setAttribute('src', images[randomNumber2]);
        comparation();
        // Eliminar la clase de rotación después de que se complete la rotación
        imag1.classList.remove('rotate');
        imag2.classList.remove('rotate');
    }, 1500); // Retrasar la llamada a la función de comparación en 1.5 segundos

}, 1000); // Empezar después de 1 segundo
  
 //termina funcion de tiempo   

//Funcion de comparacion
 
function comparation(){                          // funcion para comparar el resultado del ganador  
    if(randomNumber1 === randomNumber2){
        console.log("despues de if  " + randomNumber2);

        document.querySelector('h1').textContent = draw;
    }else
    if(randomNumber1 > randomNumber2){
        console.log("despues de elseif  " + randomNumber2);
        document.querySelector('h1').textContent = pl1;
    }else{
        console.log("despues de else  " + randomNumber2);
        document.querySelector('h1').textContent = pl2;
    };} 




}

 
  
  

boton.addEventListener('click',game);
