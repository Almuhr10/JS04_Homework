let streetNumber = ['25489', '87459', '35478', '15975', '95125', '78965']
let streetName = ['A street', 'B street', 'C street', 'D street', 'E street', 'F street',]
let cityName = ['Riyadh', 'Dammam', 'Jedda', 'Tabouk', 'Makka', 'Maddena', 'Haiel']
let stateName = ['Qassem State', 'North State', 'East State', 'South State', 'West State']
let zipCode = ['28889', '96459', '35748', '15005', '99625', '71465']

function getRandom(array) {
    return array[Math.floor((Math.random() * array.length))];
}

function createAdress() {
    return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;
}

let address = createAdress();
console.log(address);


