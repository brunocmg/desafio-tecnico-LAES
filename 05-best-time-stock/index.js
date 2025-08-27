function buyAndSellStock(prices) {
  let profit = 0;
  let buyDay = 0;
  let sellDay = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > profit) {
        profit = currentProfit;
        buyDay = i;
        sellDay = j;
      }
    }
  }

  if (profit <= 0) {
    return "Não teve lucro";
  }

  return `Compre no dia ${buyDay + 1} (preço = ${
    prices[buyDay]
  }) e venda no dia ${sellDay + 1} (preço = ${prices[sellDay]}), lucro = ${
    prices[sellDay]
  } - ${prices[buyDay]} = ${profit}.`;
}

const price = [7, 1, 5, 3, 6, 4];
console.log(buyAndSellStock(price));
