//CALLING OUT ID SECTION//
const userKm = document.getElementById('kilometers');
const userAge = document.getElementById('age');
const input = document.getElementById('button');

input.addEventListener('click', function (){
    console.log(userKm.value);
    console.log(userAge.value);
}