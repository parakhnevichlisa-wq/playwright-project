const cities = [{city: "Minsk", population: 2000000}, 
    {city: "Mexico City", population: 9209944}, 
    {city: "Tashkent", population: 4000000}];



const filtered = cities.filter(city => city.population > 2000000);
const name = filtered.map(city => city.city);
// console.log(name);

const numbers = [1, 2, 2, 3, 4, 4, 5];

const num = new Set(numbers);
console.log(num);


let s = "a:0";
let updstedS = s.split(":");
console.log(updstedS[1]);


