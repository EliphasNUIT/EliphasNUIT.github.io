function display(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("status");
    if (status === "closed") {
        iframe.attr("src", iframe.data("src"));
        iframe.load(function () {
            iframe.width("1200");
            iframe.height(1.25*iframe.contents().height());
            iframe.attr("status", "open");
        });
    } else {
        iframe.attr("src", "about:blank");
        iframe.load(function () {
            iframe.width("1");
            iframe.height("1");
            iframe.attr("status", "closed");
        });

    }

}