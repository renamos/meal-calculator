$(document).ready(function () {
    var menuItem = function (item, price) {
        this.item = item;
        this.price = price;
    };

    var soup = new menuItem('soup', 1.99);
    var salad = new menuItem('salad', 2.99);
    var sandwich = new menuItem('sandwich', 3.99);

    var Diner = function (name, dishes) {
        this.name = name;
        this.dishes = dishes;
        //Fill Price 
        var total = 0;
        for (var i = 0; i < dishes.length; i++) {
            total += dishes[i].price
        }

        this.price = total;
        //Methods
        this.getTax = function () {
            return this.price * .09
        };
        this.getTip = function () {
            return (this.price + this.getTax()) * .2
        };
        this.getTotalwithTip = function () {
            return this.getTip() + this.getTax() + this.price;
        }
        this.getTotalwithoutTip = function () {
            return this.price + this.getTax();
        }

    };

    var Bill = function (diners) {
        this.diners = diners;
        this.totalPrint = function () {
            var total = 0;
            for (var i = 0; i < diners.length; i++) {
                total += diners[i].getTotalwithoutTip();
            }
            console.log('Bill total w/o tip:' + total);
        }
        this.tipsOwed = function () {
            for (var i = 0; i < diners.length; i++) {
                console.log(diners[i].name + "-> " +
                    diners[i].getTip());
            }
        }
        this.printDetailedBill = function () {
            console.log('Check details')
            for (var i = 0; i < diners.length; i++) {
                console.log(diners[i].name + ": ")
                console.log('  Total: ' + '$' +
                    diners[i].getTotalwithTip().toFixed(2));
                console.log('  Tax: ' + '$' +
                    diners[i].getTax().toFixed(2));
                console.log('  Tip: ' + '$' +
                    diners[i].getTip().toFixed(2));
            }

        }
    }

    var Diner1 = new Diner('rene', [soup, salad]);
    var Diner2 = new Diner('steve', [salad]);
    var Diner3 = new Diner('jon', [salad, sandwich]);


    var Bill1 = new Bill([Diner1, Diner2, Diner3]);

    Bill1.printDetailedBill();


});