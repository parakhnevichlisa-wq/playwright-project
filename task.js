
const items = [
    {
    name: "Pliers",
    price: "$12.50",
    inStock: true
    },

    {
    name: "Hammer",
    price: "$25.00",
    inStock: false
    },    

    {
    name: "Screwdriver",
    price: "$8.20",
    inStock: true
    }    
]


async function calculateAvailableTotal(items){
    let sum = 0;
        await new Promise(resolve => setTimeout(resolve, 500));
        for (const item of items) {
            
   
            if (item.inStock) {
                const num = item.price.replace("$","");
                const floatNum = parseFloat(num)
                sum = sum+ floatNum;
                console.log(`Item: ${item.name} | Price: ${floatNum}`);
        
                }
     
    
        }

    return sum;

}


async function main(){
    const total = await calculateAvailableTotal(items);
    console.log(total.toFixed(2));
    

}

main();


// const numbers = [5, 12, 3, 20, 8, 15];

// const result = numbers.filter((number) => number >10 );
// // console.log(result);

// const prices = [10, 20, 30];
// const doubled = prices.map((price)=> price*2);
// console.log(doubled);

// const res = doubled.reduce((sum, double)=> sum+=double, 0);

// console.log(res);


// import { test, expect } from '@playwright/test';

// test('continue with email', async ({ page }) => {
//   await page.goto('https://example.com/login');

//   await page.getByLabel('Email').fill('test@example.com');
//   await page.getByRole('button', { name: 'Continue' }).click();
// });




// const products = [
//   { name: 'Hammer', price: 25, inStock: false },
//   { name: 'Pliers', price: 12.5, inStock: true },
//   { name: 'Screwdriver', price: 8.2, inStock: true },
// ];

// const filterProducts = products.filter((product) => product.inStock);
// const summa = filterProducts.reduce((s, filterProducts)=> s = s+ filterProducts.price,0)
// console.log(summa);



