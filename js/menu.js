$(document).ready(function () {

    var menuItem = function (item, price) {
        this.item = item;
        this.price = price;
    };

    var soup = new menuItem('soup', 1.99);
    var salad = new menuItem('salad', 2.99);

    console.log(soup)
    console.log(salad)
});