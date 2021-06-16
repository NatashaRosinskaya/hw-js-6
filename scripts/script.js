//Задание 1
let str1 = 'aaa@bbb@ccc';
console.log (str1.replace (/@/g, '!'));

//Задание 2
let date = '2025-12-31',
    newDate = date.split ('-');
console.log (newDate[2] + '/' + newDate[1] + '/' + newDate[0]);

//Задание 3
let str3 = 'Я учу javascript!';

console.log (str3.substr (2, 14));
console.log (str3.substring(2, 16));
console.log (str3.slice(2, 16));

//Задание 4
let arr4 = [4, 2, 5, 19, 13, 0, 10],
    arrNumber4 = arr4.length,
    sum4 = 0;
for (i = 0; i < arrNumber4; i++){
    arr4[i] = Math.pow (arr4[i], 3);
    sum4 += arr4[i];
} console.log (Math.sqrt(sum4));

//Задание 5
let a1 = 3,
    b1 = 5,
    c1 = a1 - b1;
console.log (Math.abs (c1));

let a2 = 6,
    b2 = 1,
    c2 = a2 - b2;
console.log (Math.abs (c2));

//Задание 6
let dateNow = new Date ();
console.log (dateNow.toLocaleString('ru'));

function newDateNow (number){
	if (number <= 9) { 
		return number = '0' + number;
	} else {
		return number;
	}
}

console.log (newDateNow (dateNow.getHours()) + ':' + newDateNow (dateNow.getMinutes()) + ':' + newDateNow (dateNow.getSeconds()) + ' ' + newDateNow(dateNow.getDate()) + '.' + newDateNow(dateNow.getMonth() + 1) + '.' 
+ dateNow.getFullYear());

//Задание 7
let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab{1,}a/g));

//Задание 8 (??)
/*let phone = '+37529-123-14-15';
let phonenumber = /[+]375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/gi;
    console.log(phonenumber.test(phone));*/

    function phoneNumber (){
        let phone = '+37529-123-14-15';
        let phonenumber = /[+]375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/gi;
      
        if (phonenumber.test(phone) == true){
            return true;
        } else{
            return false;
        }
    }
    phoneNumber (); 

    function phoneNumber2 (phone2){
    
        let phonenumber2 = /[+]375[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/gi;
        return phonenumber2.test(phone2);
    
    }
    phoneNumber2 ('+37529-123-14-15'); 


//Задание 9
