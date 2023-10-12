window.onscroll = function () {
    $("header").animate({ height: "100px" }, 400);
    $(".container-header").animate({
        height: "100px",
        padding: "0"
    }, 300);

    $("header #logo-cabecalho").transit({ "transform": "translate(0)" }, 300);

    $(".container-header h2").hide("fast");
    $(".container-header img").hide("fast");


    if (document.getElementById("header").style.height != "100px") {
        this.scrollTo(0, 0);
    }

};