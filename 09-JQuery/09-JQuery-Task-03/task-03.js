$(document).ready(function() {
    $("h3 + div").each(function() {
        const divElement = $(this);
        divElement.insertBefore(divElement.prev("h3"));
    });
});