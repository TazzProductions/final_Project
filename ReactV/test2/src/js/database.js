var change = '<div id="hide-CO"><div class="single-rental"><div class="container"><div class="row"><div class="col-sm-6"><div class="img-holder"><img src="images/c2.jpg" alt="" id="pimg"></div></div><div class="col-sm-6"><div class="txt-holder"><h3 id="single-header-txt">Rolls Royce Dawn</h3><p id="single-about-txt">The Dawn is not only one of the most beautiful luxury rental cars available but also has plenty of power under the hood. The Dawn rental is powered by a 6.6-liter twin turbo v12 engine that makes 563 horsepower. Combined with an 8 speed ZF transmission, this powerful engine glides the Rolls Royce Dawn from 0-60 in 4.5 seconds. The transmission is connected to the GPS system to adjust itself based on your position. It is so smooth that you won’t feel it shifting gears at all making it seem like the Dawn has an endless amount of power. There is no question about it this Rolls Royce has enough effortless power to guide you through the streets of Beverly Hills in style.</p><h3 id="single-cost-txt">The Price to rent a <div id="single-header"></div> in LA</h3><p id="single-cost-about">The cost to hire a Rolls Royce Dawn in Los Angeles can range between $1895-$1495 per day. During busy season or during large events like Academy Awards or Grammys prices can go up. For weekly Rolls Royce rentals, we offer special discounted rates. This car also requires a security deposit of $5,000 at the time of the rental. This is a refundable security deposit that is returned to you as soon as the car is returned without any damages. If you would like to rent this RR outside of Beverly Hills we can also deliver anywhere in California. For up to date pricing and availability please give us a call. We are happy to answer any questions regarding exotic car rental prices. For rental cars delivered to LAXairport, there is no cost. Let us help you find your favorite car in LA.</p></div></div></div></div></div><div class="single-product-detail"><div class="container"><div class="row"><div class="col-sm-12"><h3 class="single-detail-header">SPECIFICATIONS</h3></div></div></div></div><div class="details"><div class="container"><div class="row"><div class="col-sm-6"><i class="fas fa-money-bill-wave"></i><h3> MSRP: $ <p id="msrp"></p></h3></div><div class="col-sm-6"><i class="fas fa-car"></i><h3> Transmission: <p id="tm"></p></h3></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><h3><i class="fas fa-tachometer-alt"></i><p id="meter"></p></h3></div><div class="col-sm-6"><i class="fas fa-burn"></i><h3> MPG: <p id="mpg"></p></h3></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><i class="fas fa-cogs"></i><h3> Engine: <p id="engine"></p></h3></div><div class="col-sm-6"><i class="fas fa-horse-head"></i><h3> Horsepower: <p id="hp"></p></h3></div></div></div></div><div class="mt100 mb40 container"><div class="row"><div class="col-sm-6"><a href="#" class="call-now-rental" onclick="CNow();">Call Now</a></div><div class="col-sm-6"><a href="#" class="call-now" onclick="RNow();">Reserve Now</a></div></div></div></div>';

var setR = '<div class="rental-details" id="SR"><div class="row-CO"><div class="col-75-CO"><div class="container-CO"><form action="CtC();" class="mt30"><div class="row-CO"><div class="col-50-CO"><h3>Set Your Reservation</h3><label for="location">Choose A Pickup Location</label><select class="select-css" id="location"><option value="LA">Los Angeles</option><option value="F">Florida</option><option value="MS">Mississippi</option><option value="A">Atlanta</option><option value="T">Texas</option></select><div class="mt20 row-CO"><div class="col-50-CO"><label for="StartDate">Pickup Date</label><input type="date" name="Pickup" id="pdate"><label for="pickup_time" class="mt20">Pickup Time</label><input type="time" name="pickup_time" id="ptime"></div><div class="mt20 col-50-CO"><label for="ReturnDate">Return Date</label><input type="date" name="Return" id="rdate"><label for="return_time" class="mt20">Return Time</label><input type="time" name="return_time" id="rtime"></div><div class="mt20 col-50-CO"><label for="age">Age: </label><input type="number" name="age" placeholder="25+" id="age"></div></div></div><input type="submit" value="Set Reservation" class="btn" onclick="CtC();"></form></div></div></div></div>';


var continueCO = '<div class="rental-details" id="CtC"><div class="row-CO"><div class="col-75-CO"><div class="container-CO"><form action="/action_page.php" class="mt30"><div class="row-CO"><div class="col-50-CO"><h3>Contact Information</h3><label for="fname"><i class="fa fa-user"></i> First Name</label><input type="text" id="fname" name="firstname" placeholder="John"><label for="fname"><i class="fa fa-user"></i> Last Name</label><input type="text" id="lname" name="lastname" placeholder="Doe"><label for="phone"><i class="fa fa-address-card-o"></i> Phone Number</label><input type="tel" id="adr" name="tel" placeholder="555-555-5555"><label for="email" class="mt20"><i class="fa fa-envelope"></i> Email</label><input type="text" id="email" name="email" placeholder="john@example.com"></div></div><input type="submit" value="Continue to checkout" class="btn" onclick="rentNow();"></form></div></div></div></div>';


var COdetails = '<div class="reserve-now" id="RN"><div class="row-CO"><div class="col-75-CO"><div class="container-CO"><form action="/action_page.php" class="mt30"><div class="row-CO"><div class="col-50-CO"><h3>Billing Address</h3><label for="fname"><i class="fa fa-user"></i> Full Name</label><input type="text" id="fname" name="firstname" placeholder="John M. Doe"><label for="email"><i class="fa fa-envelope"></i> Email</label><input type="text" id="email" name="email" placeholder="john@example.com"><label for="adr"><i class="fa fa-address-card-o"></i> Address</label><input type="text" id="adr" name="address" placeholder="542 W. 15th Street"><label for="city"><i class="fa fa-institution"></i> City</label><input type="text" id="city" name="city" placeholder="New York"><div class="row-CO"><div class="col-50-CO"><label for="state">State</label><input type="text" id="state" name="state" placeholder="NY"></div><div class="col-50-CO"><label for="zip">Zip</label><input type="text" id="zip" name="zip" placeholder="10001"></div></div></div><div class="col-50-CO"><h3>Payment</h3><label for="fname">Accepted Cards</label><div class="icon-container"><i class="fa fa-cc-visa" style="color:navy;"></i><i class="fa fa-cc-amex" style="color:blue;"></i><i class="fa fa-cc-mastercard" style="color:red;"></i><i class="fa fa-cc-discover" style="color:orange;"></i></div><label for="cname">Name on Card</label><input type="text" id="cname" name="cardname" placeholder="John More Doe"><label for="ccnum">Credit card number</label><input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"><label for="expmonth">Exp Month</label><input type="text" id="expmonth" name="expmonth" placeholder="September"><div class="row-CO"><div class="col-50-CO"><label for="expyear">Exp Year</label><input type="text" id="expyear" name="expyear" placeholder="2018"></div><div class="col-50-CO"><label for="cvv">CVV</label><input type="text" id="cvv" name="cvv" placeholder="352"></div></div></div></div><label><input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing</label><input type="submit" value="Rent Now!" class="btn"></form></div></div></div></div>';




function rentNow() {
  // event.preventDefault();
  document.getElementById('CtC').innerHTML = COdetails;
}

// function CtC() {
//   // event.preventDefault();
//   document.getElementById('SR').innerHTML = continueCO;
//   var location = document.getElementById("location").selectedIndex;
//   ULocation = document.getElementsByTagName("option")[location].value;
//   console.log(ULocation);

// }

function RNow() {
  // event.preventDefault();
  document.getElementById('hide-CO').innerHTML = setR;



}

function PId1() {
  
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[0].Pabout;
      document.getElementById("single-header").innerHTML = data[0].PName;
      document.getElementById("single-cost-about").innerHTML = data[0].PCabout;
      document.getElementById("pimg").setAttribute("src", data[0].img);
      document.getElementById("msrp").innerHTML = data[0].price;
      document.getElementById("tm").innerHTML = data[0].transmission;
      document.getElementById("meter").innerHTML = data[0].tachometer;

      document.getElementById("mpg").innerHTML = data[0].mpg;
      document.getElementById("engine").innerHTML = data[0].engine;
      document.getElementById("hp").innerHTML = data[0].horsepower;
      
    });
    console.log("Got it");
}

function PId2() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[1].Pabout;
      document.getElementById("single-header").innerHTML = data[1].PName;
      document.getElementById("single-cost-about").innerHTML = data[1].PCabout;
      document.getElementById("pimg").setAttribute("src", data[1].img);
      document.getElementById("msrp").innerHTML = data[1].price;
      document.getElementById("tm").innerHTML = data[1].transmission;
      document.getElementById("meter").innerHTML = data[1].tachometer;

      document.getElementById("mpg").innerHTML = data[1].mpg;
      document.getElementById("engine").innerHTML = data[1].engine;
      document.getElementById("hp").innerHTML = data[1].horsepower;


    });
}

function PId3() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[2].Pabout;
      document.getElementById("single-header").innerHTML = data[2].PName;
      document.getElementById("single-cost-about").innerHTML = data[2].PCabout;
      document.getElementById("pimg").setAttribute("src", data[2].img);
      document.getElementById("msrp").innerHTML = data[2].price;
      document.getElementById("tm").innerHTML = data[2].transmission;
      document.getElementById("meter").innerHTML = data[2].tachometer;

      document.getElementById("mpg").innerHTML = data[2].mpg;
      document.getElementById("engine").innerHTML = data[2].engine;
      document.getElementById("hp").innerHTML = data[2].horsepower;


    });
}

function PId4() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[3].Pabout;
      document.getElementById("single-header").innerHTML = data[3].PName;
      document.getElementById("single-cost-about").innerHTML = data[3].PCabout;
      document.getElementById("pimg").setAttribute("src", data[3].img);
      document.getElementById("msrp").innerHTML = data[3].price;
      document.getElementById("tm").innerHTML = data[3].transmission;
      document.getElementById("meter").innerHTML = data[3].tachometer;

      document.getElementById("mpg").innerHTML = data[3].mpg;
      document.getElementById("engine").innerHTML = data[3].engine;
      document.getElementById("hp").innerHTML = data[3].horsepower;


    });
}

function PId5() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[4].Pabout;
      document.getElementById("single-header").innerHTML = data[4].PName;
      document.getElementById("single-cost-about").innerHTML = data[4].PCabout;
      document.getElementById("pimg").setAttribute("src", data[4].img);
      document.getElementById("msrp").innerHTML = data[4].price;
      document.getElementById("tm").innerHTML = data[4].transmission;
      document.getElementById("meter").innerHTML = data[4].tachometer;

      document.getElementById("mpg").innerHTML = data[4].mpg;
      document.getElementById("engine").innerHTML = data[4].engine;
      document.getElementById("hp").innerHTML = data[4].horsepower;


    });
}


function PId6() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[5].Pabout;
      document.getElementById("single-header").innerHTML = data[5].PName;
      document.getElementById("single-cost-about").innerHTML = data[5].PCabout;
      document.getElementById("pimg").setAttribute("src", data[5].img);
      document.getElementById("msrp").innerHTML = data[5].price;
      document.getElementById("tm").innerHTML = data[5].transmission;
      document.getElementById("meter").innerHTML = data[5].tachometer;

      document.getElementById("mpg").innerHTML = data[5].mpg;
      document.getElementById("engine").innerHTML = data[5].engine;
      document.getElementById("hp").innerHTML = data[5].horsepower;


    });
}


function PId7() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[6].Pabout;
      document.getElementById("single-header").innerHTML = data[6].PName;
      document.getElementById("single-cost-about").innerHTML = data[6].PCabout;
      document.getElementById("pimg").setAttribute("src", data[6].img);
      document.getElementById("msrp").innerHTML = data[6].price;
      document.getElementById("tm").innerHTML = data[6].transmission;
      document.getElementById("meter").innerHTML = data[6].tachometer;

      document.getElementById("mpg").innerHTML = data[6].mpg;
      document.getElementById("engine").innerHTML = data[6].engine;
      document.getElementById("hp").innerHTML = data[6].horsepower;


    });
}


function PId8() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[8].Pabout;
      document.getElementById("single-header").innerHTML = data[8].PName;
      document.getElementById("single-cost-about").innerHTML = data[8].PCabout;
      document.getElementById("pimg").setAttribute("src", data[8].img);
      document.getElementById("msrp").innerHTML = data[8].price;
      document.getElementById("tm").innerHTML = data[8].transmission;
      document.getElementById("meter").innerHTML = data[8].tachometer;

      document.getElementById("mpg").innerHTML = data[8].mpg;
      document.getElementById("engine").innerHTML = data[8].engine;
      document.getElementById("hp").innerHTML = data[8].horsepower;


    });
}



function PId9() {
  document.getElementById("change").innerHTML = change;

  // event.preventDefault();
  fetch("http://localhost:3000/api/vehicles/")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("single-about-txt").innerHTML = data[8].Pabout;
      document.getElementById("single-header").innerHTML = data[8].PName;
      document.getElementById("single-cost-about").innerHTML = data[8].PCabout;
      document.getElementById("pimg").setAttribute("src", data[8].img);
      document.getElementById("msrp").innerHTML = data[8].price;
      document.getElementById("tm").innerHTML = data[8].transmission;
      document.getElementById("meter").innerHTML = data[8].tachometer;

      document.getElementById("mpg").innerHTML = data[8].mpg;
      document.getElementById("engine").innerHTML = data[8].engine;
      document.getElementById("hp").innerHTML = data[8].horsepower;


    });
}





























// var change = '<div class="single-rental"><div class="container"><div class="row"><div class="col-sm-6"><div class="img-holder"><img src="images/c2.jpg" alt="" id="pimg"></div></div><div class="col-sm-6"><div class="txt-holder"><h3 id="single-header-txt">Rolls Royce Dawn</h3><p id="single-about-txt">The Dawn is not only one of the most beautiful luxury rental cars available but also has plenty of power under the hood. The Dawn rental is powered by a 6.6-liter twin turbo v12 engine that makes 563 horsepower. Combined with an 8 speed ZF transmission, this powerful engine glides the Rolls Royce Dawn from 0-60 in 4.5 seconds. The transmission is connected to the GPS system to adjust itself based on your position. It is so smooth that you won’t feel it shifting gears at all making it seem like the Dawn has an endless amount of power. There is no question about it this Rolls Royce has enough effortless power to guide you through the streets of Beverly Hills in style.</p><h3 id="single-cost-txt">The Price to rent a Rolls Royce Dawn in LA</h3><p id="single-cost-about">The cost to hire a Rolls Royce Dawn in Los Angeles can range between $1895-$1495 per day. During busy season or during large events like Academy Awards or Grammys prices can go up. For weekly Rolls Royce rentals, we offer special discounted rates. This car also requires a security deposit of $5,000 at the time of the rental. This is a refundable security deposit that is returned to you as soon as the car is returned without any damages. If you would like to rent this RR outside of Beverly Hills we can also deliver anywhere in California. For up to date pricing and availability please give us a call. We are happy to answer any questions regarding exotic car rental prices. For rental cars delivered to LAXairport, there is no cost. Let us help you find your favorite car in LA.</p></div></div></div></div></div><div class="single-product-detail"><div class="container"><div class="row"><div class="col-sm-12"><h3 class="single-detail-header">SPECIFICATIONS</h3></div></div></div></div><div class="details"><div class="container"><div class="row"><div class="col-sm-6"><i class="fas fa-money-bill-wave"></i><h3> MSRP: <p id="specs"></p></h3></div><div class="col-sm-6"><i class="fas fa-car"></i><h3> Transmission: </h3></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><h3><i class="fas fa-tachometer-alt"></i><p id="specs"></p></h3></div><div class="col-sm-6"><i class="fas fa-burn"></i><h3> MPG: <p id="specs"></p></h3></div></div></div><div class="container"><div class="row"><div class="col-sm-6"><i class="fas fa-cogs"></i><h3> Engine: <p id="specs"></p></h3></div><div class="col-sm-6"><i class="fas fa-horse-head"></i><h3> Horsepower: <p id="specs"></p></h3></div></div></div></div>';
// console.log(change);