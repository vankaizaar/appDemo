$(document).ready(function () {

    $(".next-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        prevTab($active);

    });
});
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
$(window).load(function () {
    var currentIndex = 0,
            items = $('.cust1 img'),
            itemAmt = items.length;

    function cycleItems() {

        console.log("Clicked");
        currentIndex += 1;

        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }

        var item = $('.cust1 img').eq(currentIndex);
        items.hide("slide", { direction: "right" }, 250);
        item.show("slide", { direction: "left" }, 250);

    }
    $('.cust1 img').filter(':visible').click(function () {
        cycleItems();
    });
});
$(window).load(function () {
    var currentIndex1 = 0,
            items1 = $('.cust2 img'),
            itemAmt1 = items1.length;

    function cycleItems1() {

        console.log("Clicked");
        currentIndex1 += 1;

        if (currentIndex1 > itemAmt1 - 1) {
            currentIndex1 = 0;
        }

        var item1 = $('.cust2 img').eq(currentIndex1);
        items1.hide();
        item1.show("slide", { direction: "up" }, 250);

    }
    $('.cust2 img').filter(':visible').click(function () {
        cycleItems1();
    });
});
$(window).load(function () {
    var currentIndex2 = 0,
            items2 = $('.dash img'),
            itemAmt2 = items2.length;

    function cycleItems2() {

        console.log("Clicked");
        currentIndex2 += 1;

        if (currentIndex2 > itemAmt2 - 1) {
            currentIndex2 = 0;
        }

        var item2 = $('.dash img').eq(currentIndex2);
        items2.hide();
        item2.show("slide", { direction: "left" }, 250);

    }
    $('.dash img').filter(':visible').click(function () {
        cycleItems2();
    });
});

$(window).load(function () {
    var currentIndex3 = 0,
            items3 = $('.tech img'),
            itemAmt3 = items3.length;

    function cycleItems3() {

        console.log(itemAmt3);
        currentIndex3 += 1;

        if (currentIndex3 > itemAmt3 - 1) {
            currentIndex3 = 0;
        }

        var item3 = $('.tech img').eq(currentIndex3);
        items3.hide();
        item3.show("slide", { direction: "up" }, 250);

    }
    $('.tech img').filter(':visible').click(function () {
        cycleItems3();
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

