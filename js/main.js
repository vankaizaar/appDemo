var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
;

preload(
        "css/device-mockups/iphone5/iphone5_port_white.png",
        "css/device-mockups/macbook/macbook.png",
        "css/device-mockups/galaxy_s5/galaxy_s5_port_black.png",
        "images/steps/customer-device/1.png",
        "images/steps/customer-device/2.png",
        "images/steps/customer-device/3.png",
        "images/steps/customer-device/4.png",
        "images/steps/customer-device/5.png",
        "images/steps/customer-device/6.png",
        "images/steps/customer-device/7.png",
        "images/steps/customer-device/8.png",
        "images/steps/customer-device/9.png",
        "images/steps/business-management-dashboard/1.png",
        "images/steps/business-management-dashboard/1.png",
        "images/steps/driver-native-app/1.png",
        "images/steps/driver-native-app/2.png",
        "images/steps/driver-native-app/3.png",
        "images/steps/driver-native-app/4.png",
        "images/steps/driver-native-app/5.png",
        "images/steps/driver-native-app/6.png"
        );

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function () {
    var counterCust2 = 1;

    custy2.onclick = function () {
        if (counterCust2 == 0) {
            document.getElementById("custy2").src = "images/steps/customer-device/1.png";
            $("#custy2").attr('title', 'Create Order using public task form').tooltip('fixTitle').tooltip('show');
            counterCust2++;
        } else if (counterCust2 == 1) {
            document.getElementById("custy2").src = "images/steps/customer-device/2.png";
            $("#custy2").attr('title', 'Enter Order Details and click send order').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInDown');
            counterCust2++;
        } else if (counterCust2 == 2) {
            $('#custy2').removeClass('animated fadeInDown');
            document.getElementById("custy2").src = "images/steps/customer-device/3.png";
            $("#custy2").attr('title', 'Notification received for successfully created order').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInDown');
            counterCust2++;
        } else if (counterCust2 == 3) {
            $('#custy2').removeClass('animated fadeInDown');
            document.getElementById("custy2").src = "images/steps/customer-device/4.png";
            $("#custy2").attr('title', 'Customer receives notification of technite on their way').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInRight');
            counterCust2++;
        } else if (counterCust2 == 4) {
            $('#custy2').removeClass('animated fadeInRight');
            document.getElementById("custy2").src = "images/steps/customer-device/5.png";
            $("#custy2").attr('title', 'Customer selects link to track technite').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInUp');
            counterCust2++;
        } else if (counterCust2 == 5) {
            $('#custy2').removeClass('animated fadeInUp');
            document.getElementById("custy2").src = "images/steps/customer-device/6.png";
            $("#custy2").attr('title', 'Customer notified of Technite’s arrival').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInRight');
            counterCust2++;
        } else if (counterCust2 == 6) {
            $('#custy2').removeClass('animated fadeInRight');
            document.getElementById("custy2").src = "images/steps/customer-device/7.png";
            $("#custy2").attr('title', 'Customer receives rating notification').tooltip('fixTitle').tooltip('show');
            $('#custy2').addClass('animated fadeInRight');
            counterCust2++;
        } else if (counterCust2 == 7) {
            document.getElementById("custy2").src = "images/steps/customer-device/8.png";
            $("#custy2").attr('title', 'Customer Rates technites service. If customer rates Technite 3 or below stars they get the option to provide a reason.').tooltip('fixTitle').tooltip('show');
            $('#custy2').removeClass('animated fadeInLeft').addClass('animated fadeInUp');
            counterCust2++;
        } else if (counterCust2 == 8) {
            document.getElementById("custy2").src = "images/steps/customer-device/9.png";
            $("#custy2").attr('title', 'Technite successfully rated').tooltip('fixTitle').tooltip('show');
            counterCust2 = 8;
        }
    };
});



$(function () {
    var counterDash = 1;

    dash.onclick = function () {
        if (counterDash == 0) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/1.png";
            $("#dash").attr('title', 'Order created on Bringg App unassigned to Technite').tooltip('fixTitle').tooltip('show');
            counterDash++;
        } else if (counterDash == 1) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/2.png";
            $("#dash").attr('title', 'Order assigned to Technite to complete task').tooltip('fixTitle').tooltip('show');
            $('#dash').addClass('animated fadeInRight');
            counterDash = 1;
        }
    };
});

$(function () {
    var counterTech = 1;

    tech.onclick = function () {
        if (counterTech == 0) {
            document.getElementById("tech").src = "images/steps/driver-native-app/1.png";
            $("#tech").attr('title', 'Order received by Technite on Technites App').tooltip('fixTitle').tooltip('show');
            counterTech++;
        } else if (counterTech == 1) {
            document.getElementById("tech").src = "images/steps/driver-native-app/2.png";
            $("#tech").attr('title', 'List of Technites orders').tooltip('fixTitle').tooltip('show');
            $('#tech').addClass('animated fadeInRight');
            counterTech++;
        } else if (counterTech == 2) {
            $('#tech').removeClass('animated fadeInRight');
            document.getElementById("tech").src = "images/steps/driver-native-app/3.png";
            $("#tech").attr('title', 'Technite select order and select start').tooltip('fixTitle').tooltip('show');
            $('#tech').addClass('animated fadeInRight');
            counterTech++;
        } else if (counterTech == 3) {
            $('#tech').removeClass('animated fadeInRight');
            document.getElementById("tech").src = "images/steps/driver-native-app/4.png";
            $("#tech").attr('title', 'Technite selects arrived').tooltip('fixTitle').tooltip('show');
            $('#tech').addClass('animated fadeInRight');
            counterTech++;
        } else if (counterTech == 4) {
            document.getElementById("tech").src = "images/steps/driver-native-app/5.png";
            $("#tech").attr('title', 'Things that a technite can do using the app').tooltip('fixTitle').tooltip('show');
            $('#tech').removeClass('animated fadeInRight');
            counterTech++;
        } else if (counterTech == 5) {
            document.getElementById("tech").src = "images/steps/driver-native-app/6.png";
            $("#tech").attr('title', 'When order complete Technite selects left location').tooltip('fixTitle').tooltip('show');
            $('#tech').addClass('animated fadeInRight');
            counterTech = 5;
        }
    };
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});









