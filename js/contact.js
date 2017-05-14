$(document).ready(function() {
    $(".honeypot").hide();
    var form = $('#contact-form');
    form.submit(function (ev) {
        var honeypotOne = $("#honeypot-one").val();
        var honeypotTwo = $("#honeypot-two").val();
        ev.preventDefault();
        if (honeypotOne === "" && honeypotTwo === "honeypot@mail.com") {
            var serializedData = $('#contact-name, #contact-email, #contact-subject, #contact-message').serialize();
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: serializedData,
                success: function (data) {
                    submissionSuccess();
                }
            });
        }

    });
});

function submissionSuccess() {
    $('#contact-form').trigger("reset");
    $('#contact-success').show();
    setTimeout(function() {
        $('#contact-success').hide();
    }, 5000)
}