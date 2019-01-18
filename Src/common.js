export function navigationActive() {
    alert();
    $('.navbar-nav li').click(function () {
        $('li').removeClass('active');
        $(this).addClass('active');
    });
}


export function loginWidget() {
    $(document).on('keyup', 'input[type=password]', function () {
        var pswd = $(this).val();

        //validate the length
        if (pswd.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }

        //validate letter
        if (pswd.match(/[A-z]/)) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if (pswd.match(/[A-Z]/)) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if (pswd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }

        //validate space
        if (pswd.match(/[^a-zA-Z0-9\-\/]/)) {
            $('#space').removeClass('invalid').addClass('valid');
        } else {
            $('#space').removeClass('valid').addClass('invalid');
        }

    });
    $(document).on('focus', "input[type=password]", function () {
        $('#pswd_info').show();
    }).on('blur', "input[type=password]", function () {
        $('#pswd_info').hide();
    });
}
export default loginWidget;