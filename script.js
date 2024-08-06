const selectConvertfrom = document.querySelector('.currencies-convert-from') //SELETOR moeda de cima
const selectConvertTo = document.querySelector('.currencies-convert-to') //SELETOR moeda de baixo
const inputCurrency = document.querySelector('.input-currency') //VALOR DIGITADO
const convertButton = document.querySelector('.convert-button') //BOTÃO CONVERTER

const valueFromConvert = document.querySelector('.currency-value-from-convert') //valor q aparecerá CIMA
const valueToConvert = document.querySelector('.currency-value-to-convert') //valor q aparecerá baixo





function convertcurrency(){ //VALORES CONVERTIDOS

    const namecoinsFromconvert = document.querySelector('#currency-name-from-convert') //Nomes que aparecerão cima
    const namecoinsToconvert = document.querySelector('#currency-name-to-convert') //Nomes que aparecerão baixo

    const flagsFromConvert = document.querySelector('#coins-flags-from-convert') //bandeiras de cima
    const flagsToConvert = document.querySelector('#coins-flags-to-convert') //bandeiras de baixo

    //valores em relação ao Real
    dolar = 5.72
    euro = 6.27
    bitcoin = 310672.5
    

    //OPERAÇÃO REAL > MOEDAS
    
    if (selectConvertfrom.value == "real" && selectConvertTo.value == 'dolar'){
        

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / dolar).toFixed(2)

        namecoinsFromconvert.innerHTML = 'Real'
        namecoinsToconvert.innerHTML = "Dólar Americano"

        flagsFromConvert.src = "./assets/Real.png"
        flagsToConvert.src = "./assets/Dolar.png"
        

    }
    if (selectConvertfrom.value == "real" && selectConvertTo.value == 'euro'){
        
        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / euro).toFixed(2)

        namecoinsFromconvert.innerHTML = 'Real'
        namecoinsToconvert.innerHTML = "Euro"

        flagsFromConvert.src = "./assets/Real.png"
        flagsToConvert.src = "./assets/euro.png"
        

    }
    if (selectConvertfrom.value == "real" && selectConvertTo.value == 'bitcoin'){
        

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / bitcoin).toFixed(6)

        namecoinsFromconvert.innerHTML = 'Real'
        namecoinsToconvert.innerHTML = "Bitcoin"

        flagsFromConvert.src = "./assets/Real.png"
        flagsToConvert.src = "./assets/bitcoin.png"
    }
    if (selectConvertfrom.value == "real" && selectConvertTo.value == 'real'){
        window.alert('As moedas são iguais, Tente de outra forma!')
    }


    
    //OPERAÇÃO DOLAR > MOEDAS

    if (selectConvertfrom.value == "dolar" && selectConvertTo.value == 'real'){
        

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value * dolar).toFixed(2)

        namecoinsFromconvert.innerHTML = 'Dólar'
        namecoinsToconvert.innerHTML = "Real"

        flagsFromConvert.src = "./assets/Dolar.png"
        flagsToConvert.src = "./assets/Real.png"
    }
    
    if (selectConvertfrom.value == "dolar" && selectConvertTo.value == 'euro'){
        

        
        euro = 0.91

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value * euro).toFixed(2)

        
        namecoinsFromconvert.innerHTML = 'Dólar'
        namecoinsToconvert.innerHTML = "Euro"

        flagsFromConvert.src = "./assets/Dolar.png"
        flagsToConvert.src = "./assets/euro.png"

    }

    if (selectConvertfrom.value == "dolar" && selectConvertTo.value == 'bitcoin'){
        

        
        bitcoin = 54559.50

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / bitcoin).toFixed(6)

        namecoinsFromconvert.innerHTML = 'Dólar'
        namecoinsToconvert.innerHTML = "Bitcoin"

        flagsFromConvert.src = "./assets/Dolar.png"
        flagsToConvert.src = "./assets/bitcoin.png"

    }

    if (selectConvertfrom.value == "dolar" && selectConvertTo.value == 'dolar'){
        window.alert('As moedas são iguais, Tente de outra forma!')
    }







    //OPERAÇÃO EURO > MOEDAS



    if (selectConvertfrom.value == "euro" && selectConvertTo.value == 'real'){
        

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / euro).toFixed(2)

        namecoinsFromconvert.innerHTML = 'Euro'
        namecoinsToconvert.innerHTML = "Real"

        flagsFromConvert.src = "./assets/euro.png"
        flagsToConvert.src = "./assets/Real.png"
    }
    
    if (selectConvertfrom.value == "euro" && selectConvertTo.value == 'dolar'){
        

        
        dolar = 1.10

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value * dolar).toFixed(2)

        
        namecoinsFromconvert.innerHTML = 'Euro'
        namecoinsToconvert.innerHTML = "Dólar"

        flagsFromConvert.src = "./assets/euro.png"
        flagsToConvert.src = "./assets/Dolar.png"

    }

    if (selectConvertfrom.value == "euro" && selectConvertTo.value == 'bitcoin'){
        

        
        bitcoin = 49304,91

        valueFromConvert.innerHTML = inputCurrency.value
        valueToConvert.innerHTML = (inputCurrency.value / bitcoin).toFixed(6)

        namecoinsFromconvert.innerHTML = 'Euro'
        namecoinsToconvert.innerHTML = "Bitcoin"

        flagsFromConvert.src = "./assets/euro.png"
        flagsToConvert.src = "./assets/bitcoin.png"

    }

    if (selectConvertfrom.value == "euro" && selectConvertTo.value == 'euro'){
        window.alert('As moedas são iguais, Tente de outra forma!')
    }





        //OPERAÇÃO BITCOIN > MOEDAS

        if (selectConvertfrom.value == "bitcoin" && selectConvertTo.value == 'real'){
            
    
            valueFromConvert.innerHTML = inputCurrency.value
            valueToConvert.innerHTML = (inputCurrency.value * bitcoin).toFixed(2)
    
            namecoinsFromconvert.innerHTML = 'Bitcoin'
            namecoinsToconvert.innerHTML = "Real"
    
            flagsFromConvert.src = "./assets/bitcoin.png"
            flagsToConvert.src = "./assets/Real.png"
        }
        
        if (selectConvertfrom.value == "bitcoin" && selectConvertTo.value == 'dolar'){
            
    
            
            bitcoin = 54559.50
    
            valueFromConvert.innerHTML = inputCurrency.value
            valueToConvert.innerHTML = (inputCurrency.value * bitcoin).toFixed(2)
    
            
            namecoinsFromconvert.innerHTML = 'Bitcoin'
            namecoinsToconvert.innerHTML = "Dólar"
    
            flagsFromConvert.src = "./assets/bitcoin.png"
            flagsToConvert.src = "./assets/Dolar.png"
    
        }
    
        if (selectConvertfrom.value == "bitcoin" && selectConvertTo.value == 'euro'){
            
    
            
            bitcoin = 49304,91
    
            valueFromConvert.innerHTML = inputCurrency.value
            valueToConvert.innerHTML = (inputCurrency.value * bitcoin).toFixed(6)
    
            namecoinsFromconvert.innerHTML = 'Bitcoin'
            namecoinsToconvert.innerHTML = "Bitcoin"
    
            flagsFromConvert.src = "./assets/bitcoin.png"
            flagsToConvert.src = "./assets/euro.png"
    
        }
    
        if (selectConvertfrom.value == "bitcoin" && selectConvertTo.value == 'bitcoin'){
            window.alert('As moedas são iguais, Tente de outra forma!')
        }
    



}












function selectcoinsConvertFrom(){ //VERIFICA O SELECT CONVERTER DE
    console.log(selectConvertfrom.value);

    convertcurrency()
    
}



function selectcoinsConvertTO(){ //VERIFICA O SELECT CONVERTER PARA
    console.log(selectConvertTo.value);

    convertcurrency()
}



function exchangeitems(){
    
}





selectConvertTo.addEventListener("change", selectcoinsConvertTO)
selectConvertfrom.addEventListener("change", selectcoinsConvertFrom)
convertButton.addEventListener("click", convertcurrency)



