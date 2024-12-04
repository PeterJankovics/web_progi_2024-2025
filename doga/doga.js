function ranyom()
{

    let keszit = document.createElement("input");
    let hello = document.createElement("input");
    keszit.appendChild(hello);
    let csa = document.getElementById("szoveg");
    csa.appendChild(keszit);
    


   // var br = document.createElement("br");

   keszit.addEventListener("keypress", function (event)
   {
       if (event.key === "Enter") {
            console.log(csa);
            csa = hello.value; 
       }
   });
}




    /*let berkeres = document.getElementById("beker").value;
    let input = document.createElement("input");
    input.type = "text";

    if (berkeres !== "") {
        input.value = bekeres;

    }
    */


   /*
    if( berkeres !== "")
    {
        let letrehoz = document.getElementById("szoveg");
        
        hozzadUjSor.innerHTML = letrehozas;

    }

*/


