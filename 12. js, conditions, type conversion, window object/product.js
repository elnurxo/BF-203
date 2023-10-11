// productName - pandora necklace
// productCostPrice - 20 -> maya deyeri
// productSalePrice - 100 -> satish qiymeti
// does coca cola has discount percentage? -> window.confirm
// productDiscountPercentage - 20% -> 80

// find the profit? -> 60 usd
// pandora necklace has 60usd profit

//TASK
let productName = window.prompt("Enter product name");
let productCostPrice = Number(window.prompt("Enter product cost price"));
let productSalePrice = Number(window.prompt("Enter Product Sale Price"));

if (productSalePrice > productCostPrice) {
  if (window.confirm(`Does ${productName} has discount?`)) {
    let productDiscount = Number(window.prompt("Enter productDiscount"));
    let profit =
      productSalePrice -
      (productSalePrice * productDiscount) / 100 -
      productCostPrice;
    alert(profit);
  } else {
    let profit = productSalePrice - productCostPrice;
    alert(profit);
  }
}
else{
    alert("Error")
}
