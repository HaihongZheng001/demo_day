// dark mode
// function myFunction() {
// 	var element = document.body;
// 	element.classList.toggle("darkmode");
// }


// 3.hide and show on lifestory
function hidePaintings() {
    var x = document.getElementById("hidepainting1");
    var y = document.getElementById("hidepainting2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
  }

function hideInstallationArt() {
    var a = document.getElementById("hideInstallationArt1");
    var b = document.getElementById("hideInstallationArt2");
    var c = document.getElementById("hideInstallationArt3");
    var d = document.getElementById("hideInstallationArt4");
    var e = document.getElementById("hideInstallationArt5");
    var f = document.getElementById("hideInstallationArt6");
    var g = document.getElementById("hideInstallationArt7");

    if (a.style.display === "none") {
        a.style.display = "block";
        b.style.display = "block";
        c.style.display = "block";
        d.style.display = "block";
        e.style.display = "block";
        f.style.display = "block";
        g.style.display = "block";
    } else {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        g.style.display = "none";

    }
}
