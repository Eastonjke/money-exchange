// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
exchange = {};
if(currency >10000){throw new Error( "You are rich, my friend! We don't have so much coins for exchange")}
if(currency > 49){
  exchange.H = Math.trunc(currency / 50);
  currency = currency - (exchange.H * 50);
}
if(currency > 24){
  exchange.Q = Math.trunc(currency / 25);
  currency = currency - (exchange.Q * 25);
}
if(currency > 9){
  exchange.D = Math.trunc(currency / 10);
  currency = currency - (exchange.D * 10);
}
if(currency > 4){
  exchange.N = Math.trunc(currency / 5);
  currency = currency - (exchange.N * 5);
}
if(currency > 0){
  exchange.P = currency;

}
return exchange;
}