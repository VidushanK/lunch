var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates)

{
 var results = {};
  for (var i = 0; i < salesData.length; i++){
      if (results[salesData[i].name] === undefined) {
    results[salesData[i].name] = {
      totalSales: 0,
      totalTaxes: 0
    };
      }
    var joinSales = salesData[i].sales.reduce(function(a,b){return a + b;}, 0);
    for (var tax in taxRates){
        tax = joinSales * taxRates[companySalesData[i].province];
      }
      results[salesData[i].name].totalSales += joinSales;
      results[salesData[i].name].totalTaxes += tax;
    }

  return results;
 }



console.log(calculateSalesTax(companySalesData, salesTaxRates));