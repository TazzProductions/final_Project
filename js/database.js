// const getPosts = () => {
//   return fetch("http://localhost:3000/api/vehicles/")
//     .then(res => res.json())
//     .then(posts => console.log(posts));
// };

// const post = {
//   id: '10',
//   PName: 'Aventador Midstar',
//   seatNum: 2,
//   mpg: 19,
//   tachometer: '0-120: 2.3 sec',
//   luggageCap: 2,
//   transmission: 'Auto',
//   engine: '8.5 lt',
//   horsepower: 901,
//   BName: 'Aventador'

// }

// const newPost = post => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }

//   return fetch("http://localhost:3000/api/vehicles/", options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => console.error(`Error: ${error}`))

// }

// newPost(post).;
class Script {

  fetch("http://localhost:3000/api/vehicles/SPP")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.getElementById("pname").innerHTML = data[0].PName;
      this.image = data[0].img;
      document.getElementById("pimg").setAttribute("src", image);
      document.getElementById('pabout').innerHTML = data[0].product_about;
    });

};