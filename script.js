function calcular(){

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value / 100;
    
    

    var imc = peso / (altura ** 2);
    let description = '';

    

    if(imc < 18.5){
        description = `Abaixo do peso! Seu imc é `;
    }else if(imc >= 18.5 && imc <=25) {
        description = `Peso Ideal! Seu imc é `;
    }else if(imc > 25 && imc <= 30) {
        description = 'Sobrepeso! Seu Imc é ';
    }else if(imc > 30 && imc <= 35){
        description = 'Obesidade I ! Seu Imc é ';
    }else if (imc > 35 && imc <= 40){
        description = "Obesidade II ! Seu Imc é ";
    }else if (imc > 40){ 
        description = 'Obesidade III ! Seu Imc é ';
    }


    
    document.getElementById('result').innerText = description + `${(imc).toFixed(2)}` ;
    
}
