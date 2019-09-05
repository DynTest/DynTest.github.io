var COL_WIDTH = 62 // should be calculated dynamically, and recalculated at window resize
var GUTTER_WIDTH = 30

var COL_WIDTHS = {
    750: 62,
    970: 81,
    1170: 97
}

$(function () {
    var d = dragula({
        invalid: function (el, target) {
            return $(el).hasClass('card-body')
        }
    })
    $('.row-draggable').each(function () {
        d.containers.push(this)
    })

    var colWidth = COL_WIDTHS[$('.container-fluid').width()] || COL_WIDTHS[0]
    $(window).resize(function () {
        colWidth = COL_WIDTHS[$('.container').width()] || COL_WIDTHS[0]
        console.log('set colWidth to', colWidth, $('.container').width())
    })
})