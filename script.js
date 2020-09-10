var navbarAtag = document.querySelectorAll('.nav-menu a')
//console.log(navbarAtag);
for (var i = 0; i < navbarAtag.length; i++) {
    navbarAtag[i].addEventListener('click', function (event) {
        event.preventDefault();
        var destinationID = this.textContent.trim().toLowerCase();
        var target = document.getElementById(destinationID);
        var scroll = setInterval(function () {
            var destination = target.getBoundingClientRect();
            console.log(destination.top);
            if (destination.top <= 5) {
                clearInterval(scroll);
                return;
            }
            window.scrollBy(0,50)
        }, 10);

    })
}