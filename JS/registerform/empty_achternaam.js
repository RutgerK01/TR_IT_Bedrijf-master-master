$(document).ready(function() {
    $("#exampleModalCenter").modal("show");

    var emptyachternaam = $('<div class="alert alert-danger" role="alert">U bent vergeten uw achternaam in te voeren.</div>');

    $("#empty_achternaam").after(emptyachternaam);
}) ;