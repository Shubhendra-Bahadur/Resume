var navbarAtag = document.querySelectorAll('.nav-menu a')
//console.log(navbarAtag);
for (var i = 0; i < navbarAtag.length; i++) {
    navbarAtag[i].addEventListener('click', function (event) {
        event.preventDefault();
        var destinationID = this.textContent.trim().toLowerCase();
        var target = document.getElementById(destinationID);
        var scroll = setInterval(function () {
            var destination = target.getBoundingClientRect();
            // console.log(destination.top);
            if (destination.top <= 5) {
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0,50)
        }, 10);

    })
}

//-----------skill bar section-------------------//

//handle scroll event on window
//check that skill section or say container is visible or not
//ensure that initial width of coloured skill divs is zero->initiakised/reset to 0 width value
//start animation on every skill->increase skill width from 0-skill levelat regular interval
//store skill level->html with the help data attribute

var skillprogress=document.querySelectorAll(".skill-progress > div");
var skillcontainer=document.getElementById('skill-container')
console.log(skillprogress[0])
window.addEventListener('scroll',checkscroll);
var skillanimationcounter=0;

function initializeskillbar()
{
  for(let bar of skillprogress)
    {
      bar.style.width="0%";
    }
}

initializeskillbar();


function checkscroll()
{
  var coordinate=skillcontainer.getBoundingClientRect();
  if(skillanimationcounter==0 && coordinate.top<window.innerHeight)
    { 
      skillanimationcounter++;
     	fillbars(); 
    }
}


function fillbars()
{
  	for(let bar of skillprogress)
      {
        let widthvalue=bar.getAttribute("data-bar-width");
        let currentwidth=0;
				let interval=setInterval(function(){
          if(currentwidth>widthvalue)
            {
              clearInterval(interval);
              return;
            }
          currentwidth+=5;
          bar.style.width=currentwidth+"%";
        },30);
      }
}



