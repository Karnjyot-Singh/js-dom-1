const spenta = document.getElementById("white");
console.log(spenta);
const accesa = document.getElementById("yellow");
console.log(accesa);
const bottone = document.getElementById("btn");
console.log(bottone);
bottone.addEventListener("click", function(){
    if(accesa.classList.contains('block')){
        accesa.classList.remove('block');
        accesa.classList.add('none');
        spenta.classList.remove('none');
        spenta.classList.add('block');
        bottone.innerHTML="Accendi"
    } else{
        accesa.classList.remove('none');
        accesa.classList.add('block');
        spenta.classList.remove('block');
        spenta.classList.add('none');
        bottone.innerHTML="Spegni"
    }
})