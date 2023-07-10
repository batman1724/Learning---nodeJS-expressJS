let stocks = {
  Fruits: ["strawberry", "grapes", "Banana", "apple"],
  Liquid: ["water", "ice"],
  holder: ["cone"],
  toppings: ["chocolate"],
};
let is_shop_open = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("closed shop"));
    }
  });
}
async function kitchen() {
  try {
    await time(2000); 
    console.log("chose strawberry");
  } catch (error) {
    console.log("custmer left", error);
  } finally {
    console.log("closed");
  }
}
kitchen();
// let toppings_choice = ()=>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{

//             resolve(console.log("which topping would you love? "));
//         },3000)
//     });
// };
// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     await toppings_choice();
//     console.log("D")
//     console.log("E")

// };
// kitchen();
// console.log("doing the dishes");
// console.log("cleaning the tables");
