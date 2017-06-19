 namespace VehicleNameSpace {
    export interface Bike {
        companyName: string;
        model: string;
        yearMf: number;
    }

    export function getBikeDetails(bike: Bike){
        console.log(`My Bike Details are :-
        Company: ${bike.companyName}
        Model: ${bike.model}
        Year: ${bike.yearMf}`)
    }
}