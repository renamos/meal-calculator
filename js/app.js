$(document).ready(function () {
    var menuItem = function (item, price) {
        this.item = item;
        this.price = price;
    };

    var totalSplitBill = [];
    var tipAmount = function (diner) {
        var totalTip = 0;
        for (var i = 0; i < diner.dishes.length; i++) {
            totalTip += diner.dishes[i].price * .2;
        }
        return totalTip;
    };
    var totalBill = 0;

    var finalBill = function (input) {

        for (var i = 0; i < input.length; i++) {
            totalBill += Number(input[i]);
        }
        return totalBill;
    }

    var soup = new menuItem('soup', 1.99);
    var salad = new menuItem('salad', 2.99);
    var sandwich = new menuItem('sandwich', 3.99);

    var Diner = function (name, dishes) {
        this.name = name;
        this.dishes = dishes;
        var price = 0;

        for (var i = 0; i < dishes.length; i++) {
            price += dishes[i].price
        }

        var tax = price * .09;

        var tip = (price + tax) * .2;

        var total = price + tax + tip;

        totalSplitBill.push(total);


    };

    var Diner1 = new Diner('rene', [soup, salad]);
    var Diner2 = new Diner('steve', [salad]);
    var Diner3 = new Diner('jon', [salad, sandwich]);


    console.log(totalSplitBill);
    console.log(finalBill(totalSplitBill));

    console.log(Diner1);
    console.log(Diner2);
    console.log(Diner3);

    var allDiners = {
        diners: [Diner1,
        Diner2,
        Diner3],
        tips: [tipAmount(Diner1), tipAmount(Diner2), tipAmount(Diner3)]
    };


    console.log(allDiners);


});