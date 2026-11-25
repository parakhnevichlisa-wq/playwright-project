
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
            const availableItem = items.filter((item) => item.inStock);
            const num = item.price.replace("$","");
            const floatNum = parseFloat(num)
            sum = sum+ floatNum;
            console.log(`Item: ${item.name} | Price: ${floatNum}`);                   
     
    
        }

    return sum;

}


async function main(){
    const total = await calculateAvailableTotal(items);
    console.log(total.toFixed(2));
    

}

// main();


 const availableItems = items.filter((item) => item.inStock);
//  console.log(availableItems);
 
 const prices = availableItems.map((availableItem) => parseFloat(availableItem.price.replace("$", "")));
 console.log(prices);
 
 const total = prices.reduce((sum, price) => sum + price, 0);
 console.log(total);
 
