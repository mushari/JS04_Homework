var streetNumber = ['11141','99989','34578','22272'];
var streetName=['Khurais Road','King Fahad Road','Al-Olaya Street','Eastern Ring Road'];
var cityName=['Riyadh','Arar','Jeddah','Hafar Al-Batin'];
var zipCode=['234','654','789','101'];

console.log(streetNumber[random()]+" "+ streetName[random()]+", "+ cityName[random()] +", "+ zipCode[random()])
function random()
{
    return Math.floor(Math.random() * 3); 
}
