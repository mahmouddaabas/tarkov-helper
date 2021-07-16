$(document).ready(() => {
    
    //$(".show-map-image").attr("src", "../images/maps/factory.png")

    $("a").on("click", mapClick);

    function mapClick(e) {
        var value = $(this).attr('href')
        $(".show-map-image").attr("src", value)
        e.preventDefault();
    }

})