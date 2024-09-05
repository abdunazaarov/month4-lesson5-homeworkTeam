// 1 - Masala


// {
//     function birthday(year){
//         let result = 2024 - year
//         if (result > 18){
//             return "Siz 18 yoshdan kattasiz."
//         }
//         else if (result < 18){
//             return "Siz 18 yoshdan kichiksiz."
//         }
//         else {
//             return "Siz 18 yoshdasiz."
//         }
//     }
    
//     console.log(birthday(2005))
// }

// ---------------------------------------------------------

// 2 - Masala


// {
//     function posOrNeg(number){
//         if (number > 0){
//             return "Musbat"
//         }
//         else {
//             return "Manfiy"
//         }
//     }

//     console.log(posOrNeg(0))
// }

// ----------------------------------------------------------

// 3 - Masala


// {
//     let count = 0
//     function positiveCount(a, b, c){
//         if (a > 0){
//             count++
//         }
//         if (b > 0){
//             count++
//         }
//         if (c > 0){
//             count++
//         }
//         return count
//     }

//     console.log(positiveCount(3, 6, -2))
// }

// ----------------------------------------------------------

// 4 - Masala


// {
//     function toqJuft(a, b){
//         if (a % 2 === 1){
//             console.log(`${a} - Toq`)
//         }
//         else {
//             console.log(`${a} - Juft`)
//         }
//         if (b % 2 === 1){
//             console.log(`${b} - Toq`)
//         }
//         else {
//             console.log(`${b} - Juft`)
//         }
//     }

//     toqJuft(3, 8)
// }

// ----------------------------------------------------------

// 5 - Masala


// {
//     function foo(number){
//         if (number % 2 === 1){
//             number *= 2
//             return number
//         }
//         else {
//             number /= 2
//             return number
//         }
//     }

//     console.log(foo(7))
// }

// ---------------------------------------------------------

// 6 - Masala


// {
//     function foo(number){
//         if (number > 0){
//             number += 1
//             return number
//         }
//         else if (number < 0){
//             number -= 2
//             return number
//         }
//         else {
//             number = 10
//             return number
//         }
//     }

//     console.log(foo(0))
// }

// ----------------------------------------------------------

// 7 - Masala


// {
//     function foo(a, b){
//         if (a > b){
//             console.log(a, b)
//         }
//         else if (a < b){
//             console.log(b, a)
//         }
//         else {
//             console.log("Sonlar o'zoro teng.")
//         }
//     }

//     foo(9, 12)
// }

// ----------------------------------------------------------

// 8 - Masala


// {
//     function foo(number){
//         if (number > 0 && number % 2 === 0){
//             number++
//             return number
//         }
//         else {
//             return number
//         }
//     }

//     console.log(foo(8))
// }

// ----------------------------------------------------------

// 9 - Masala


// {
//     function foo(a, b){
//         if (a > b){
//             console.log(a * 10, b)
//         }
//         else if (a < b){
//             console.log(a, b * 10)
//         }
//         else {
//             console.log("Sonlar o'zoro teng.")
//         }
//     }

//     foo(10, 7)
// }

// ----------------------------------------------------------

// 10 - Masala


// {
//     let toq = 0
//     let juft = 0

//     function foo(a, b, c){
//         if (a % 2 === 1){
//             toq++
//         }
//         else {
//             juft++
//         }
//         if (b % 2 === 1){
//             toq++
//         }
//         else {
//             juft++
//         }
//         if (c % 2 === 1){
//             toq++
//         }
//         else {
//             juft++
//         }

//         console.log(`Toq - ${toq}, Juft - ${juft}`)
//     }

//     foo(4, 9, 6)
// }

// -----------------------------------------------------------




//                 Q O' SH I M CH A L A R



// 11 - Masala

//  sonni 3 - darajaga ko'taradi.



// {
//     function foo(number){
//         let result = Math.pow(number, 3)
//         return result
//     }

//     console.log(foo(3));
// }

// --------------------------------------------------------------------

// 12 - Masala

// Bu funksiya K sonining N sonning darajasi ekanligini tekshiradi. Agar K soni N ning darajasi bo‘lsa, true qiymatini qaytaradi, aks holda false.


// {
//     function IsPowerN(K, N) {
//         if (K < 1 || N <= 1) return false;
//         while (K % N === 0) {
//             K /= N;
//         }
//         return K === 1;
//     }
    
//     console.log(IsPowerN(8, 2)); 
//     console.log(IsPowerN(9, 3)); 
//     console.log(IsPowerN(10, 2)); 
    
// }

// ----------------------------------------------------------------------

// 13 - Masala

// Funksiya N sonining tub son ekanligini aniqlaydi. Agar N tub son bo‘lsa, true, aks holda false qaytaradi. Tub son faqat o‘ziga va 1 ga bo‘linadi.


// {
//     function IsPrime(N) {
//         if (N <= 1) return false;
//         for (let i = 2; i <= Math.sqrt(N); i++) {
//             if (N % i === 0) return false;
//         }
//         return true;
//     }
    
//     console.log(IsPrime(11)); 
//     console.log(IsPrime(4));  
    
// }

// ---------------------------------------------------------------------

// 14 - Masala

// Bu funksiya K sonidagi raqamlar sonini aniqlaydi. Masalan, 12345 soni 5 ta raqamdan iborat.


// {
//     function DigitCount(K) {
//         return K.toString().length;
//     }
    
//     console.log(DigitCount(12345)); 
//     console.log(DigitCount(987));  
    
// }

// ------------------------------------------------------------------------

// 15 - Masala

// Funksiya K sonidagi o‘ngdan chapga qarab N-chi raqamni qaytaradi. Agar bunday raqam bo‘lmasa, -1 qaytaradi. Masalan, 12345 sonining 2-chi raqami 4 bo‘ladi.


// {
//     function DigitN(K, N) {
//         let digits = K.toString();
//         return N <= digits.length ? parseInt(digits[digits.length - N]) : -1;
//     }
    
//     console.log(DigitN(12345, 2)); 
//     console.log(DigitN(12345, 6)); 
    
// }

// -------------------------------------------------------------------

// 16 - Masala

// Funksiya N soni palindrom ekanligini tekshiradi. Palindrom son — chapdan va o‘ngdan o‘qilganda bir xil bo‘ladi (masalan, 121). Agar N palindrom bo‘lsa, true qaytaradi.


// {
//     function IsPalindrom(N) {
//         let str = N.toString();
//         let reversedStr = str.split('').reverse().join('');
//         return str === reversedStr;
//     }
    
//     console.log(IsPalindrom(121)); 
//     console.log(IsPalindrom(123)); 
    
// }

// ------------------------------------------------------------------

// 17 - Masala

// Bu funksiya gradus qiymatini radian qiymatiga o‘giradi. Masalan, 180 gradus 3.14159 radian (p) ga teng.


// {
//     function DegToRad(D) {
//         return D * (Math.PI / 180);
//     }
    
//     console.log(DegToRad(180)); 
    
// }

// --------------------------------------------------------------------

// 18 - Masala

// Bu funksiya radian qiymatini gradusga aylantiradi. Masalan, p radian 180 gradusga teng.


// {
//     function RadToDeg(R) {
//         return R * (180 / Math.PI);
//     }
    
//     console.log(RadToDeg(Math.PI));
    
// }

// ----------------------------------------------------------------------

// 19 - Masala

// Funksiya N sonining faktorialini hisoblaydi. Faktorial — sonning o‘zidan kichik bo‘lgan barcha sonlarning ko‘paytmasi (masalan, 5! = 5 * 4 * 3 * 2 * 1 = 120).


// {
//     function Fact(N) {
//         if (N === 0 || N === 1) return 1;
//         return N * Fact(N - 1);
//     }
    
//     console.log(Fact(5));     
// }

// ---------------------------------------------------------------------

// 20 - Masala

// Bu funksiya N sonining ikkilik faktorialini hisoblaydi. Ikkilik faktorial — sonning o‘zidan boshlab, 2 ga bo‘lingan sonlar ko‘paytmasi (masalan, 5!! = 5 * 3 * 1 = 15, 6!! = 6 * 4 * 2 = 48).


// {
//     function Fact2(N) {
//         let result = 1;
//         for (let i = N; i > 0; i -= 2) {
//             result *= i;
//         }
//         return result;
//     }
    
//     console.log(Fact2(5));
//     console.log(Fact2(6)); 
    
// }

// ---------------------------------------------------------------------