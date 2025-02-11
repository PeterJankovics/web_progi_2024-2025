$.ajax({
    url: "https://fakestoreapi.com/products",
    dataType: "json",
    success: function (data) {
        console.log(data);
        data.forEach(product => {
            console.log(product);
            let kartya = termekKartya(product.title, product.image, product.description);
            $("#termekLista").append(kartya);
        });
    }
});

function termekKartya(nev,kepUrl,leiras) {
    let kartya = jQuery("<div>");
    kartya.prop("calss","card");
    kartya.addClass("col-3");
    let kep = jQuery("<img>");
    kep.prop("src", kepUrl);
    kep.prop("class", "card-img-top");
    kep.prop("alt", nev);

    let cardBody = jQuery("<div>");
    cardBody.prop("class", "card-body");

    let cardTitle = jQuery("<h5>");
    cardTitle = jQuery("card-title");

    let cardText = jQuery("<p>");
    cardText.prop("class", "card-text");
    cardText.text(leiras);

    cardBody.append(cardTitle);
    cardBody.append(cardText);  

    kartya.append(kep);
    kartya.append(cardBody);

    return kartya

}
