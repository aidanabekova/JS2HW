const personalNum = document.querySelector('.personalNum');
const innCheck = document.querySelector('.innCheck');
const innPrint = document.querySelector('.innPrint');
const innRegExp = /^[0, 1]\d{13}$/g;
innCheck.addEventListener('click', () => {
    if(innRegExp.test(personalNum.value)){
        innPrint.innerText = `Верификация пройдена успешно, ваш ИНН ${personalNum.value} подтвержден ✅`;
        innPrint.style.cssText = 'color: black; max-width: 550px; height: 20px; border: 1.5px green solid;' +
            'margin-top: 30px ';
        personalNum.value = '';
    }else {
        innPrint.innerText = 'Вы ввели неправилный ИНН, повторите попытку ❌';
        innPrint.style.cssText = 'color: blak; max-width: 370px; height: 20px; border: 1.5px red solid;' +
            'margin-top: 30px ';
        personalNum.value = '';
    }
});