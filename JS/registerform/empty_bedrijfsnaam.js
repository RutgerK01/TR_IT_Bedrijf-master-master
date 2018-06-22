$(document).ready(function() {
    $("#exampleModalCenter").modal("show");

    var emptybedrijfsnaam = $('<div class="alert alert-danger" role="alert">U bent vergeten uw bedrijfsnaam in te voeren.</div>');

    $("#empty_bedrijfsnaam").after(emptybedrijfsnaam);
}) ;