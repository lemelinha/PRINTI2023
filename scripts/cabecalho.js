window.onscroll = function () {
    $("header").animate({ height: "100px" }, 400);
    $(".container-header img").animate({
        width: "100px",
        height: "100px",
        maxWidth: "100%"
    }, 200);
    $(".container-header").animate({
        height: "100px",
        width: "99vw",
        maxWidth: "100vw",
        padding: "0"
    }, 300);
    $(".container-header h2").hide("fast");

    if (document.getElementById("header").style.height != "100px") {
        this.scrollTo(0, 0);
    }

    if (window.innerWidth < 420) {
        $(".container-header img").hide("fast");
    } else {
        $(".container-header img").show("fast");
    }
};