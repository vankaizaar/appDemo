$(function () {
    var counterCust1 = 1;

    custy1.onclick = function () {
        if (counterCust1 == 0) {
            document.getElementById("custy1").src = "images/steps/customer-device/1.png";
            counterCust1++;
        } else if (counterCust1 == 1) {
            document.getElementById("custy1").src = "images/steps/customer-device/2.png";
            counterCust1++;
        } else if (counterCust1 == 2) {
            document.getElementById("custy1").src = "images/steps/customer-device/3.png";
            counterCust1 = 2;
        }
    };
});

$(function () {
    var counterCust2 = 1;

    custy2.onclick = function () {
        if (counterCust2 == 0) {
            document.getElementById("custy2").src = "images/steps/customer-device/4.png";
            counterCust2++;
        } else if (counterCust2 == 1) {
            document.getElementById("custy2").src = "images/steps/customer-device/5.png";
            counterCust2++;
        } else if (counterCust2 == 2) {
            document.getElementById("custy2").src = "images/steps/customer-device/6.png";
            counterCust2++;
        } else if (counterCust2 == 3) {
            document.getElementById("custy2").src = "images/steps/customer-device/7.png";
            counterCust2++;
        } else if (counterCust2 == 4) {
            document.getElementById("custy2").src = "images/steps/customer-device/8.png";
            counterCust2++;
        } else if (counterCust2 == 5) {
            document.getElementById("custy2").src = "images/steps/customer-device/9.png";
            counterCust2 = 5;
        }
    };
});



$(function () {
    var counterDash = 1;

    dash.onclick = function () {
        if (counterDash == 0) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/1.png";
            counterDash++;
        } else if (counterDash == 1) {
            document.getElementById("dash").src = "images/steps/business-management-dashboard/2.png";
            counterDash = 1;
        }
    };
});

$(function () {
    var counterTech = 1;

    tech.onclick = function () {
        if (counterTech == 0) {
            document.getElementById("tech").src = "images/steps/driver-native-app/1.png";
            counterTech++;
        } else if (counterTech == 1) {
            document.getElementById("tech").src = "images/steps/driver-native-app/2.png";
            counterTech++;
        } else if (counterTech == 2) {
            document.getElementById("tech").src = "images/steps/driver-native-app/3.png";
            counterTech++;
        } else if (counterTech == 3) {
            document.getElementById("tech").src = "images/steps/driver-native-app/4.png";
            counterTech++;
        } else if (counterTech == 4) {
            document.getElementById("tech").src = "images/steps/driver-native-app/5.png";
            counterTech++;
        } else if (counterTech == 5) {
            document.getElementById("tech").src = "images/steps/driver-native-app/6.png";
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
};

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
