
// console.log('Hello');

function sayHello(){
    alert('Hello!!');
}

function sayByee(){
    alert('Byee!!');
}

var helloButton2=document.getElementById('btn2');

// console.log(helloButton);

helloButton2.addEventListener('click', sayHello);
helloButton2.addEventListener('click', sayByee);



