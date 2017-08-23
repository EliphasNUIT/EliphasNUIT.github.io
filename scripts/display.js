function display(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("status");
    if (status === "closed") {
        iframe.attr("src", iframe.data("src"));
        iframe.load(function () {
            var content = iframe.contents();
            iframe.attr("width", "1200");
            iframe.attr("height", "2200");
            iframe.attr("status", "open");
        });
    } else {
        iframe.attr("src", "about:blank");
        iframe.load(function () {
            iframe.attr("width", "1");
            iframe.attr("height", "1");
            iframe.attr("status", "closed");
        });

    }

}