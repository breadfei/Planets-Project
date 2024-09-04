let planets = [
    {name: "Mercury", inner: true, diameter: 3031.9, color: "#696969"},
    {name: "Venus", inner: true, diameter: 7520.8, color: "#b89165"},
    {name: "Earth", inner: true, diameter: 7917.5, color: "#5a5b86"},
    {name: "Mars", inner: true, diameter: 4212.3, color: "#df8c4e"},
    {name: "Jupiter", inner: false, diameter: 86881, color: "#f6a049"},
    {name: "Saturn", inner: false, diameter: 72367, color: "#dcd3a1"},
    {name: "Uranus", inner: false, diameter: 31518, color: "#b4d9df"},
    {name: "Neptune", inner: false, diameter: 30599, color: "#456eff"}
]
let index = 0
for (i in planets){
    console.log(i.name)
}
updatePlanetDisplay()
function nextIndex(){
    index++
    document.getElementById("IndexText").innerHTML="Index: " + (index+1);
    updatePlanetDisplay()
}
function backIndex(){
    index--
    document.getElementById("IndexText").innerHTML="Index: " + (index+1);
    updatePlanetDisplay()
}
function updatePlanetDisplay(){
    document.getElementById("planetName").innerHTML=planets[index].name;
    if (planets[index].inner){
        document.getElementById("planetType").innerHTML="Inner planet";
    } else {
        document.getElementById("planetType").innerHTML="Outer planet";
    }
    document.getElementById("planetDisplay").style.backgroundColor=planets[index].color;
    let diameter = planets[index].diameter / 100
    console.log(diameter)
    document.getElementById("planetDisplay").width = diameter;

    if (index <= 0){
        document.getElementById("backIndex").disabled = true;
    } else {
        document.getElementById("backIndex").disabled = false;
    }

    if (7 <= index){
        document.getElementById("nextButton").disabled = true;
    } else {
        document.getElementById("nextButton").disabled = false;
    }
}