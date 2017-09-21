function openChar1(name, evt) {
    var teamTab = document.getElementsByClassName("t1");
    for (var i = 0; i < teamTab.length; i++) {
        teamTab[i].style.display = "none"; 
    }
    tablinks = document.getElementsByClassName("tablinks1");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(name).style.display = "block"; 
    evt.currentTarget.className += " w3-red";
};

function openChar2(name, evt) {
    var teamTab = document.getElementsByClassName("t2");
    for (var i = 0; i < teamTab.length; i++) {
        teamTab[i].style.display = "none"; 
    }
    tablinks = document.getElementsByClassName("tablinks2");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(name).style.display = "block"; 
    evt.currentTarget.className += " w3-red";
}