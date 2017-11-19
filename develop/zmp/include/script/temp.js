function openMobileNav() {
    document.getElementById("mobile-nav").style.paddingTop = "80px";
    document.getElementById("mobile-nav").style.width = "100%";
}
function closeMobileNav() {
    document.getElementById("mobile-nav").style.paddingTop = "0";
    document.getElementById("mobile-nav").style.width = "0";
}
function detectWidth () {
    window.addEventListener('resize', function() {
        console.log(document.body.scrollWidth);
    }, true);
    // console.log(document.body.scrollWidth);
// FOR IE9 AND LESS
// if(window.attachEvent) {
//     window.attachEvent('onresize', function() {
//         alert('attachEvent - resize');
//     });
// }
// else if(window.addEventListener) {
//     window.addEventListener('resize', function() {
//         console.log('addEventListener - resize');
//     }, true);
// }
}
function showHeightnWidth() {
    var body = document.body;
    var y = body.scrollHeight;
    var x = body.scrollWidth;
    console.log("Height: " + y + "px" + " Width: " + x + "px");
}
function getHeight (element) {
    return element = (document.getElementById(element)).scrollHeight;
}
function addEvents () {
    var enentOpen = document.getElementById("mobile-nav-button").addEventListener("click", function(event){
        openMobileNav();
    }, false);
    var eventClose = document.getElementById("closeBtn").addEventListener("click", function(event){
        closeMobileNav();
        event.preventDefault();
    }, false);
    var eventOffer = document.getElementById("offerBtn").addEventListener("click", function(event){
        console.log(getHeight('offer-section'));
    });
    var eventAbout = document.getElementById("contactBtn").addEventListener("click", function(event){
        console.log(getHeight('contact-section'));
    });
    var eventTop = document.getElementById("toTheTop").addEventListener("click", function(event){
        var x = document.body.scrollHeight;
        var odcinek = document.body.scrollHeight / 100
        var y = 10;
        var up = setInterval(function () {
                window.scrollBy(0, -odcinek);
                x = x - odcinek;
                console.log(x);
                    if (x <= 0) {
                        clearInterval(up);
                    }
                }, y);
    });
}
function goTo() {
    var location = (document.getElementById('about-section')).scrollHeight;
    console.log(location);
    var elem = document.getElementById(location).addEventListener("click", function(event){
        event.preventDefault()
    });
}

detectWidth ();
showHeightnWidth();
addEvents();
    