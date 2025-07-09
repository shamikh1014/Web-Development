// Handle scroll event on window
// Check that skills sections container is visible or not
// Ensure that initial width of colored skill divs is zero->Initialised/Reset to width value
// Start animation on every skill->increase skill width from 0 to skill level at regular intervals
// Store skill level->HTML with the help data structure

var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone=false;


function initialisedBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}

initialisedBars();

function fillBars(){

    for(let bar of progressBars){

        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){

            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }

            currentWidth++;
            bar.style.width=currentWidth+'%';

        }, 3);
        
    }
    
}

// function fillBar(bar){

// }

function checkScroll(){

    // You have to check whether skill container is visible

    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('Skills Section Visible');

        fillBars();

    }
    else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialisedBars();
    }
}