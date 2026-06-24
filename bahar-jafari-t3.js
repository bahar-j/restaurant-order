function prepareOrder(foodName, callback) {
    console.log(`سفارش ${foodName} در حال آماده سازی است`);
    
    setTimeout(() => {
        console.log(`${foodName} آماده شد`);
        callback();
    }, 3000);
}

prepareOrder("پیتزا", () => {
    console.log("غذا آماده شد");
});
