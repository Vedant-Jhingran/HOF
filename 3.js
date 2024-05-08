const inventoryUSD = {
    "apple": 1,
    "banana": 1,
    "orange": 2,
    "grapes": 3
};

function convertToINR(priceUSD) {
    return priceUSD * 80;
}

const inventoryINR = Object.fromEntries(
    Object.entries(inventoryUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

console.log("Inventory with prices in INR:", inventoryINR);
