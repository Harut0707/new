let User1FirstBalanceMoney=15000;
let User2FirstBalanceMoney=12000;
let BananaPrice=700;
let BeerPrice=500;
let ChipsPrice=400;
let NumberOfBanana;
let NumberOfChips;
let NumberOfBeer;
let ProductTotalPrice;
let User1LastBalanceMoney;
let User2LastBalanceMoney;
function CalculationSystemBalance(){
     ProductTotalPrice=NumberOfBanana*BananaPrice+NumberOfBeer*BeerPrice+NumberOfChips*ChipsPrice;
      User1LastBalanceMoney=User1FirstBalanceMoney-ProductTotalPrice;
      User2LastBalanceMoney=User2FirstBalanceMoney-ProductTotalPrice;
      console.log('Total price of products '+ProductTotalPrice+' AMD');
      

}
function SelectProducts() {
    NumberOfBanana=prompt('select how many banana you want');
    NumberOfBeer=prompt('select how many bear you want');
    NumberOfChips=prompt('select how many chips you want');
}
function Payment(){
    confirm('Cash payment ?')||confirm('paid by credit card');
}
alert('Hello! Welcome to our shop!')

let user1
let user2
if (user1=confirm('user1')){
SelectProducts();
CalculationSystemBalance();
if(ProductTotalPrice<=User1FirstBalanceMoney){
    Payment();
console.log('The balance of the money User '+User1LastBalanceMoney+' AMD');
}
else{
    alert('money is not enough to buy !')
}
}
 
else if(user2=confirm('user2')){
    SelectProducts();
CalculationSystemBalance();
if(ProductTotalPrice<=User2FirstBalanceMoney){
    Payment();
console.log('The balance of the money User '+User2LastBalanceMoney+' AMD');
}
else{
    alert('money is not enough to buy !')
}
}
else{
    alert('You are not enter shop !')
}
 


