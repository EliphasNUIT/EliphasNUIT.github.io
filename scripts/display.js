function display(frameID) {
    var iframe = $(frameID);
    var status = iframe.attr("status");
    var timeout = 0;
    if (status === "closed") {
        iframe.attr("src", iframe.data("src"));
        iframe.load(function () {
            iframe.width("1200");
            iframe.height(iframe.contents().height());
            timeout = setTimeout(function() {
                iframe.height(iframe.contents().height());
            },500);
            iframe.attr("status", "open");
        });
    } else {
        iframe.attr("src", "about:blank");
        iframe.load(function () {
            iframe.width("1");
            iframe.height("1");
            if (timeout) {
                clearTimeout(timeout);
            }
            iframe.attr("status", "closed");
        });

    }

}