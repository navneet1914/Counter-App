 let countValue = document.querySelector('#counter');

 const increment = () => {
    // get the value from UI
     let value = parseInt(countValue.innerText); //jo v innerText use kr ko hmlog fetch krenge counter id waale div k andr jo value jo stored h usko vo string hoga usko hmlog convert krenge into integer using parseInt()
     // Update the value
     value = value + 1;
    //  set the value onto UI
     countValue.innerText = value;
 }

 const decrement = () => {
     // get the value from UI
     let value = parseInt(countValue.innerText); //jo v innerText use kr ko hmlog fetch krenge counter id waale div k andr jo value jo stored h usko vo string hoga usko hmlog convert krenge into integer using parseInt()
     // Update the value
     value = value - 1;
    //  set the value onto UI
     countValue.innerText = value;
 }