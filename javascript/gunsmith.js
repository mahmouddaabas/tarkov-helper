$(document).ready(() => {
    
    $("a").on("click", gunsmithClick)

    function gunsmithClick(e) {
        $(".gunsmith-embed").attr("src", $(this).attr("href"))
        e.preventDefault();
    }

})