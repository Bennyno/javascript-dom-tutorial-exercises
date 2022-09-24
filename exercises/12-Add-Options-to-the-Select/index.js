let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
for(const country of countries){
    let option = document.createElement("option")
    option.innerHTML = country;
    mySelect.appendChild(option);
}

let input = document.getElementById("mySelect");
    input.addEventListener('change', function(country){
       alert(input.value); 
    })