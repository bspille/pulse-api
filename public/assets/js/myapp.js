$(document).on("click", "#pulse-button", sendPulse);

function sendPulse() {
    $.get("/pulse");
};