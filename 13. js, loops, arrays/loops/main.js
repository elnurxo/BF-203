// task - 1
// - propmt-dan bir deyer goturursunuz(number) ve 
//daxil edin deyer qeder console-a hello world yazdirirsiniz.
// meselen 5 daxil etseniz console-a 5 defe hello world yazisi yazilmalidir

//#region TASK 1
// let num = Number(prompt("enter number"));
// let str = prompt("enter word: ");
// for (let i = 0; i < num; i++) {
//     console.log(str);
// }
//#endregion


// task - 2
// - bir reqem daxil edirsiniz ve size alet olaraq 
//hemin reqemin factorial-ini qaytarirsiniz
// meselen 6 daxil edilerse, output-a 6-nin factorial-ini qaytarmalisiniz
// factorial (6!) - 1*2*3*4*5*6

//#region TASK 2
// let num = Number(prompt("enter number: "));
// let result = 1;
// for (let i = 1; i <= num; i++) {
//     result *= i;
// }
// alert(`factorial of ${num} is ${result}`);
//#endregion


// task - 3
// - 2 reqem daxil edirsiniz (num1 ve num2) (num1<num2) sertini yoxlamalisiniz, 
//eger num2-ni daxil edende
// num1-den kicik olarsa o zaman num2-ni yeniden daxil etmelidir. 
//eger shert odenerse o zaman
// num1 ve num2 arasindaki ededlerin cemini hesablayib alert-e onu vermelisiniz

//#region TASK 3
// let num1 = Number(prompt("enter number 1: ")); //4
// let num2 = Number(prompt("enter number 2: ")); //9
// let sum = 0;
// while (num2<num1) {
//     num2 = Number(prompt("try again: "));
// }
// for (let i = num1; i <= num2; i++) {
//     sum+=i;
// }
// alert(`sum of numbers between ${num1} & ${num2} is equals to ${sum}`);

//#endregion

// task - 4
// - bir eded daxil edirsiniz ve output-a hemin ededin neche mertebeli oldugunu cixarirsiniz
// meselen 1992 daxil edilerse output-a 4 cixmalidir.

//#region TASK 4
// let num = Number(prompt("enter number: ")); //1992-> 4, 342->3, 10->2
// let count = 0;
// while (num>0) {
//     let reminder = num%10; //1
//     num = (num-reminder)/10; //0
//     count++;
// }
// alert(count);
//#endregion

// task - 5
// - bir string daxil edirsiniz ve output-a hemin string-deki sozlerin sayini cixarirsiniz.
// (butun sozler bir-birinden bir vergul ile ayrilmalidir)
// meselen, "apple,peach,banana,kiwi" daxil edilerse, output-a 4 cixmalidir.

//#region TASK 5
// let str = prompt("enter words");
// let counter = 1;
// for (let i = 0; i < str.length; i++) {
//     if (str[i]==',') {
//         counter++;
//     }
// }
// alert(counter);
//#endregion



// task - 6
// - 2 eded daxil edirsiniz. Birinci daxil etdiyiniz (num) ededinizdir, ikinci daxil etdiyiniz ise (pow)
// quvvet-dir. meselen num = 5 olarsa ve pow = 2 olarsa output-a 5-in kvadratini (25) cixarmalidir.
// let num = Number(prompt("enter number: ")); //5
// let pow = Number(prompt("enter power: ")); //2
// let result = 1;
// for (let i = 1; i <= pow; i++) {
//     result *= num;
// }
// alert(`power (${pow}) of ${num} is ${result}`);