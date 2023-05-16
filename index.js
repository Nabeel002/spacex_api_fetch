const app= require('express')();
const PORT =8000


app.listen(PORT, console.log(`the port is at: http://localhost:${PORT}`));

//getting the data from the tours endpoint
app.get("/",(req,res)=>{
    const data = fetch("https://tours.amalog.in/api/tours/")
    .then(resp=>resp.text()) //getting the response and converting the response into a text
    .then(data=>res.send(data)) ///returning the promise and sending it to the browser
});

// spacex
app.get("/", (req, res) => {
  const data = fetch("https://api.spacexdata.com/v3/launches/next") //endpoint
    .then((resp) => resp.text()) //getting the response and converting the response into a text
    .then((data) => res.send(data)); ///returning the promise and sending it to the browser
});



// spacex dragons
app.get('/',(req,res)=>{
const data = fetch("https://api.spacexdata.com/v3/dragons")
  .then((resp) => resp.text())
  .then((data) => res.send(data));



})


//error handling with fetch
app.get("/", (req, res) => {
  const data = fetch("https://api.spacexdata.com/v3/dragons")
    .then((resp) =>{
if(resp.ok){

    resp.text();
}
else{
    console.log("something didnt work the error code is: " + resp.status())
}

    })
    .then((data) => res.send(data));
});


//post method in fetch
app.get('/',(req,res)=>{

    const data = fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:"nabeel",
        id:123
      }),
    })
      .then((resp) => resp.text())
      .then((data) => res.send(data));

})