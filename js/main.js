$(document).ready(function () {

});
$(function () {
    var counterCust1 = 1;
    custy1.onclick = function () {
        if (counterCust1 == 0) {
            document.getElementById("custy1").src = "images/steps/customer-device/1.png";
            document.getElementById("custy1").title = "Create Order using public task form";
            counterCust1++;
        } else if (counterCust1 == 1) {
            document.getElementById("custy1").src = "images/steps/customer-device/2.png";
            document.getElementById("custy1").title = "Enter Order Details and click send order";
            counterCust1++;
        } else if (counterCust1 == 2) {
            document.getElementById("custy1").src = "images/steps/customer-device/3.png";
            document.getElementById("custy1").title = "Notification received for successfully created order";
            counterCust1 = 2;
        }
    };
});

$(function () {
    var counterCust2 = 1;

    custy2.onclick = function () {
        if (counterCust2 == 0) {
            document.getElementById("custy2").src = "images/steps/customer-device/4.png";
            document.getElementById("custy2").title = "Customer receives notification of technite on their way";
            counterCust2++;
        } else if (counterCust2 == 1) {
            document.getElementById("custy2").src = "images/steps/customer-device/5.png";
            document.getElementById("custy2").title = "Customer selects link to track technite";
            counterCust2++;
        } else if (counterCust2 == 2) {
            document.getElementById("custy2").src = "images/steps/customer-device/6.png";
            document.getElementById("custy2").title = "Customer notified of Technite’s arrival ";
            counterCust2++;
        } else if (counterCust2 == 3) {
            document.getElementById("custy2").src = "images/steps/customer-device/7.png";
            document.getElementById("custy2").title = "Customer receives rating notification";
            counterCust2++;
        } else if (counterCust2 == 4) {
            document.getElementById("custy2").src = "images/steps/customer-device/8.png";
            document.getElementById("custy2").title = "Customer Rates technites service. If customer rates Technite 3 or below stars they get the option to provide a reason.";
            counterCust2++;
        } else if (counterCust2 == 5) {
            document.getElementById("custy2").src = "images/steps/customer-device/9.png";
            document.getElementById("custy2").title = "Technite successfully rated";
            counterCust2 = 5;
        }
    };
});



$(function () {
    var counterDash = 1;

    dash.onclick = function () {
        if (counterDash == 0) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/1.png";
            document.getElementById("dash").title = "Order created on Bringg App unassigned to Technite";
            counterDash++;
        } else if (counterDash == 1) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/2.png";
            document.getElementById("dash").title = "Order assigned to Technite to complete task";
            counterDash = 1;
        }
    };
});

$(function () {
    var counterTech = 1;

    tech.onclick = function () {
        if (counterTech == 0) {
            document.getElementById("tech").src = "images/steps/driver-native-app/1.png";
            document.getElementById("tech").title = "Order received by Technite on Driver App";
            counterTech++;
        } else if (counterTech == 1) {
            document.getElementById("tech").src = "images/steps/driver-native-app/2.png";
            document.getElementById("tech").title = "List of Technites orders";
            counterTech++;
        } else if (counterTech == 2) {
            document.getElementById("tech").src = "images/steps/driver-native-app/3.png";
            document.getElementById("tech").title = "Technite select order and select start";
            counterTech++;
        } else if (counterTech == 3) {
            document.getElementById("tech").src = "images/steps/driver-native-app/4.png";
            document.getElementById("tech").title = "Technite selects arrived";
            counterTech++;
        } else if (counterTech == 4) {
            document.getElementById("tech").src = "images/steps/driver-native-app/5.png";
            document.getElementById("tech").title = "Things that a technite can do using the app";
            counterTech++;
        } else if (counterTech == 5) {
            document.getElementById("tech").src = "images/steps/driver-native-app/6.png";
            document.getElementById("tech").title = "When order complete Technite selects left location";
            counterTech = 5;
        }
    };
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
;

preload(
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






