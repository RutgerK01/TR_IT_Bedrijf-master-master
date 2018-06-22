$(document).ready(function() {
    $("#exampleModalCenter").modal("show");

    var emptyname = $('<div class="alert alert-danger" role="alert">U bent uw naam vergeten in te voeren.</div>');

    $("#empty_name").after(emptyname);
}) ;