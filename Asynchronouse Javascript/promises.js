let stocks = {
  Fruits: ["strawberry", "grapes", "Banana", "apple"],
  Liquid: ["water", "ice"],
  holder: ["cone"],
  toppings: ["chocolate"],
};
let is_shop_open = false;
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed my friend"));
    }
  });
};
order(2000, () => {
  console.log(`${stocks.Fruits[0]} was selected`);
})
  .then(() => {
    return order(0, () => {
      console.log("production has started");
    });
  })
  .then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
  })
  .then(() => {
    return order(1000, () => console.log("water and ice was added"));
  })
  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })
  .then(() => {
    return order(2000, () => console.log("cone was selected"));
  })
  .then(() => {
    return order(2000, () => console.log("topped were added"));
  })
  .then(() => {
    return order(3000, () => console.log("Ice-cream served"));
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("day ended shop is closed");
  });
