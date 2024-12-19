let products = [];  


fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>termek(json))

//console.log(products);


function termek(nev)
{
    products = nev;
    console.log(products);

    products.forEach((elem) => {

    let egesz = document.getElementsByClassName("minden");
    let nevKeszit = document.createElement("div");
    nevKeszit.innerHTML = elem.title;
    document.body.appendChild(nevKeszit);
    egesz.appendChild(nevKeszit);

    let kepKeszit = document.createElement("img");
    kepKeszit.src = elem.image;
    document.body.appendChild(kepKeszit);
    egesz.appendChild(kepKeszit);

    let leirasKeszit = document.createElement("div");
    leirasKeszit.innerHTML = elem.description;
    document.body.appendChild(leirasKeszit);
    egesz.appendChild(leirasKeszit)
    
    });

    

}





