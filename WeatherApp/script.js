const button = document.getElementById("btn");
const input = document.getElementById("city");

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=150dbcb5531e40b7b25123329262906 &q=${cityName}&aqi=no`);
    return await promise.json
}
button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
}); 