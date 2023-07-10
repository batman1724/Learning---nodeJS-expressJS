//what is  a call back?
/*
Calling  function inside another function
 */
let stocks = {
  Fruits: ["strawberry", "grapes", "Banana", "apple"],
  Liquid: ["water", "ice"],
  holder: ["cone"],
  toppings: ["chocolate"],
};
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
        console.log("the fruit has been chopped");
        setTimeout(()=>{
            console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
        },1000)
    }, 2000);
  }, 0);
};
order(0, production);
//call back hell