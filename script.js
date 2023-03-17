const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

let lastchanged ="";
fast.addEventListener("change",() => {
checkboxChecked(fast);
});

cheap.addEventListener("change",() => {
   
    checkboxChecked(cheap);
       
      
    
    });

    good.addEventListener("change",() => {
     
        checkboxChecked(good);
        });



        function checkboxChecked (check) {
        if(good.checked === true && fast.checked === true && good.checked === true) {
         lastchanged.checked = false;
          lastchanged = check;
        }else {
            lastchanged = unchecked;
        }



        }





        