function openBuild(name, buttonPack, buildPack,  evt) {
    var teamTab = document.getElementsByClassName(buildPack);
    for (var i = 0; i < teamTab.length; i++) {
        teamTab[i].style.display = "none"; 
    }
    tablinks = document.getElementsByClassName(buttonPack);
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(name).style.display = "block"; 
    evt.currentTarget.className += " w3-red";
};