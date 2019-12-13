$(document).ready(function () {
    var fadedIcon;
    var brightImage;

    $('.tile-link').on('mouseenter', function () {
        fadedIcon = this.lastChild.previousElementSibling;
        brightImage = this.firstChild.nextElementSibling;
        $(fadedIcon).addClass('faded').removeClass('brightened');
        $(brightImage).addClass('brightened');
    });

    $('.tile-link').on('mouseleave', function () {
        fadedIcon = this.lastChild.previousElementSibling;
        brightImage = this.firstChild.nextElementSibling;
        $(brightImage).removeClass('brightened');
        $(fadedIcon).removeClass('faded').addClass('brightened');
    });

    $('#bar-logo').on('click', function () {
        if (!$('.hero').hasClass('hidden')) {
            $('.hero').toggleClass('hidden');
        } else {
            if (!$('#tiles').hasClass('hidden')) {
                $('.hero').toggleClass('hidden');
            } else if (!$('#port-bg').hasClass('hidden')) {
                $('#port-bg').toggleClass('hidden');
            }
        }
        $('#tiles').toggleClass('hidden');

    });
    $('#port-btn').on('click', function () {
        if (!$('.hero').hasClass('hidden')) {
            $('.hero').toggleClass('hidden');
        } else if (!$('#tiles').hasClass('hidden')) {
            $('#tiles').toggleClass('hidden');
        } else {
            $('.hero').toggleClass('hidden');
        }
        $('#port-bg').toggleClass('hidden');
    });
});