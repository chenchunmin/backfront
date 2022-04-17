$(function() {
    $.ajaxPrefilter( function (options) {
        options.url = `http://127.0.0.1:3100${options.url}`
    })
})