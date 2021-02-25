const calc = (num1, operator, num2) => {
    let number1,number2;
    let calcResult = { result:0,errors:[] }; 
    number1 = Number(num1);
    number2 = Number(num2);
    if (isNaN(number1) || number1==null)
    {
        calcResult.result = 'Hesaplanamadı';
        calcResult.errors.push(`ilk parametre sayı girilmedi!!!`);
    }
    else if (isNaN(number2) || number2==null)
    {
        calcResult.result = 'Hesaplanamadı';
        calcResult.errors.push(`ikinci parametre sayı girilmedi!!!`);
    }
    else
        switch (operator) {
            case '+':
                calcResult.result = number1 + number2;            
                break;
            case '-':
                calcResult.result = number1 - number2;
                break;
            case '*':
                calcResult.result = number1 * number2;
                break;
            case '/':
                if (number2 == 0) {
                    calcResult.errors.push('Sıfıra bölme hatası yapıldı!!!');
                    calcResult.result = 'Tanımsız';
                }
                else calcResult.result = number1 / number2;
                break;
            default:
                calcResult.result = 'Hesaplanamadı';
                calcResult.errors.push('Operator yanlış girildi!!!')
                break;        
        }
    return calcResult;    
}
//Hata donduren islemler
console.log(calc('a','+','1'));
console.log(calc('1','+','a'));
console.log(calc('1','.','2'));
console.log(calc('1','/','0'));
//Hatasiz islemler
console.log(calc('1','+','1'));
console.log(calc('1','-','1'));
console.log(calc('1','*','1'));
console.log(calc('4','/','2'));