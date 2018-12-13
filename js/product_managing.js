;
(function () {
    "use strict";
    var productsTemplate = document.getElementById('products-tmpl');
    var listOfProductsHTML = document.querySelector('.ba-products');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './data/products.json', true);
    xhr.send();
    var tmplProducts = '';
    xhr.onload = (function () {
        const jsonData = JSON.parse(this.response);
        jsonData.forEach(function (productInfo) {

            tmplProducts += productsTemplate.innerHTML
                .replace(/{{source}}/, productInfo.src)
                .replace(/{{alt}}/, productInfo.alt)
                .replace(/{{productName}}/, productInfo.productName)
                .replace(/{{productPrice}}/, productInfo.productPrice)

        })
        console.log('we were here');

        listOfProductsHTML.innerHTML = tmplProducts;


    });


})();