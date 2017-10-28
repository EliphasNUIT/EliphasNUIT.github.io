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

function display(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("frameborder");
    var init = iframe.attr("width");
    if (init === "0") {
        // init the button
        iframe.load(function() {
            var status = iframe.attr("frameborder");
            if (status === "1") {
                var contents = iframe.contents();
                iframe.attr("frameborder", "3");
                //var height = contents[0].scrollingElement.clientHeight;
                var height = contents[0].scrollingElement.offsetHeight;
                iframe.attr("height", height);
                iframe[0].timeout = setInterval(function() {
                    //var height = contents[0].scrollingElement.clientHeight;
                    height = contents[0].scrollingElement.offsetHeight;
                    iframe.attr("height", height);
                }, 500);
            } else {
                if (iframe[0].timeout) {
                    clearInterval(iframe[0].timeout);
                }
                iframe.attr("width", "1");
                iframe.attr("height", "1");
                iframe.attr("frameborder", "0");
            }
        });
        iframe.attr("width", "1");
    }
    if (status === "0") {
        iframe.attr("frameborder", "1");
        iframe.attr("height", "2%");
        iframe.attr("width", "100%");
        iframe.attr("src", iframe.data("src"));
    } else {
        iframe.attr("src", "about:blank");
    }
}
