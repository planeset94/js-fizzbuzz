// struzioni:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” 
// al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Creo un'array in cui imagazzinare i valori 
var list= new Array();

// for (var i=1; i<=100; i++){
//     if (i % 3 == 0 && i % 5 ==0){
//         list.push("FizzBuzz");

//     } else if (i % 5 ==0) {
//     list.push("Buzz");

//     } else if (i % 3 ==0){
//         list.push("Fizz");


//     }  else{
//         list.push(i);
//     }
// }

// document.getElementById('stampa').innerHTML=list.join('<br>');


for (var i=1; i<=100; i++){
    if (i % 3 == 0 && i % 5 ==0){
        document.getElementById('stampa').innerHTML+= "<li class='red'>FizzBuzz</li>";

    } else if (i % 5 ==0) {
        document.getElementById('stampa').innerHTML+="<li class='blue'>Buzz</li>";

    } else if (i % 3 ==0){
        document.getElementById('stampa').innerHTML+="<li class='violet'>Fizz</li>";


    }  else{
        document.getElementById('stampa').innerHTML+="<li>"+i+"</li>";
    }
}