// formulas
// c para f -> (c * 1.8) + 32;
// f para c -> (c - 32) * 5/9
// c para k -> c + 273.15;
// k para c -> k - 273.15;
// k para f -> (k - 273.15) * 1.8 + 32;
// f para k -> (f - 32) * 5/9 + 273.15;

var celsius = document.getElementById("c");
var fah = document.getElementById("f");
var kelvin = document.getElementById("k");

const inputs = document.getElementsByClassName("input");

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener('input', function(v){
        
        let valor = parseFloat(v.target.value);

        if(isNaN(valor)){
            celsius.value = "";
            fah.value = "";
            kelvin.value = "";
        } else {

            switch(v.target.placeholder){
            
                case "Celsius":{

                    fah.value = ((valor * 1.8) + 32).toFixed(1).replace(".", ",");

                    kelvin.value = (valor + 273.15).toFixed(1).replace(".", ",");

                    break;
                }

                case "Fahrenheit":{

                    celsius.value = ((valor - 32) * 5/9).toFixed(1).replace(".", ",");

                    kelvin.value = ((valor - 32) * 5/9 + 273.15).toFixed(1).replace(".", ",");

                    break;
                }

                case "Kelvin":{

                    celsius.value = (valor - 273.15).toFixed(1).replace(".", ",");

                    fah.value = ((valor - 273.15) * 1.8 + 32).toFixed(1).replace(".", ",");

                    break;
                }
            }
        }
            
    });
}