var box = $('.box')
var next = $('#next')
var back = $('#back')

next.on('click', function() {
    box.animate({
        left: '300'
    }, 1500)
})

back.on('click', function() {
    box.animate({
        left: '0'
    }, 1500)
})