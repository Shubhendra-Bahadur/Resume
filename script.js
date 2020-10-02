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

var skillprogress=document.querySelectorAll(".skill-progress > div");
var skillcontainer=document.getElementById('skill-container')
console.log(skillprogress[0])
window.addEventListener('scroll',checkscroll);
var skillanimationcounter=false;

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
  if(skillanimationcounter==false && coordinate.top<window.innerHeight)
    { 
      skillanimationcounter=true;
     	fillbars(); 
    }
  	else if(coordinate.top>window.innerHeight)
      {
        skillanimationcounter=false;
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
        },20);
      }
}

// drop down list

var click=true;
var barr=document.getElementsByClassName("bars")[0];
barr.addEventListener('click',function(){
   var dr=document.getElementsByClassName('dropdown-list');
  	dr=dr[0];
    if(click===true)
    {
      console.log(click);
    	dr.style.display='block';
    	dr.style.position='absolute';
    	dr.style.right='3%';
      click=false;
    }
  	
  	else if(click===false)
      {
        console.log(click);
        dr.style.display='none';
        click=true;
      }
})










