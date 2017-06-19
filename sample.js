var VehicleNameSpace;
(function (VehicleNameSpace) {
    function getBikeDetails(bike) {
        console.log("My Bike Details are :-\n        Company: " + bike.companyName + "\n        Model: " + bike.model + "\n        Year: " + bike.yearMf);
    }
    VehicleNameSpace.getBikeDetails = getBikeDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
/// <reference path = "Vehicle.ts"/>
var myBike = { companyName: "Honda", model: "Splendor+", yearMf: 2000 };
VehicleNameSpace.getBikeDetails(myBike);
