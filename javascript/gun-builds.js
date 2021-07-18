$(document).ready(() => {
    
    $("a").on("click", gunsmithClick)

    function gunsmithClick(e) {
        $(".show-gun-image").attr("src", $(this).attr("href"))
        e.preventDefault();
    }

})