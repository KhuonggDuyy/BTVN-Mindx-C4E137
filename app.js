// let a = "hello";
// let b = 10;

// nhập dữ liệu từ bàn phím và gán giá trị cừa nhập vào trong một biến

// let input = prompt("Hãy nhập vào đây để gán giá trị cho biến 'input':"); //dữ liệu nhập vào có kiểu string

// let x = Number(prompt ("nhập số x"));
// let y = Number(prompt ("nhập số y"));

// let z = x + y;
// console.log(z);
// console.log(y);

// console.log("bạn vừa nhập vào" + input);

// let name = "nkd";

// {

//     //bên trong một khối lệnh
//     let age = 28;
//     let name= "someone else";

//     {
//      let address = "Tuyen Quang";   
//      // dùng được age ở chỗ này

//      // address chỉ tồn tại ở trong này
//     }

//     console.log(name);

// }

// console.log(age); //không tồn tại ở đây

// let age = prompt("nhập vào tuổi của bạn");

// // nếu age nhỏ hơn 18 thì => "không cho vào"
// // nếu age lớn hơn hoặc bằng 18 thì => "vào thoải mái"

// if (age<18) {
//     console.log("không cho vào");
// }
// else {
//     console.log("cho vào");
// }


//nhập vào phân loại học sinh:1,2,3
//nếu phân loại là 1 => 'thằng này xứng đáng có 10 người yêu'
//nếu phân loại là 2 => '9.5 điểm'
//nếu phân loại là 3 => 'cần cố gắng hơn'

// let rank = prompt('nhập vào phân loại');
// if (rank == 1) {
//     console.log('thằng này xứng đáng có 10 người yêu')
// } else if(rank == 2) {
//     console.log ('9.5 diem');
// } else if (rank == 3) {
//     console.log ('cần cố gắng hơn');
// } else {
//     console.log('nhập đúng cmn rank đi');
// }

// let text = prompt('nhập vào 1 chuỗi');

// if (text.length <8){
//     console.log('chuỗi ngắn quá');
// } else if (text.length >=8){
//     console.log('nhập đủ');
// }

//in ra dòng i love y 500 lần, mỗi dòng có đánh số thứ tự
// for(let count = 1; count <=500; count++) {
//     console.log(count + ". i love you");
// }

//tính tổng các số từ 1 đến 50
//hãy tính tổng các số chẵn từ -10 đến 50
//hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100;100]

// let num = 10;
// while (num >= 6) {
//     console.log(num);
//     num = Marth.floor(Marth.random() * 10);
// }

// let index = 1;
// while (index <=200){
//     console.log(index);
//     index++;
// }

// let s = prompt("chuỗi s");
// let l = prompt("số 1");

// while (s.length <1) {
//     s += 'a';
// }

// console.log(s);

// let x = prompt("nhập số x");
// let y = prompt("nhập số y");

// if(
//     x >= 0
//     && x < y
//     && y <= 100
// ){

// while (x<y) {
//     x++;
//     y--;
// }

// console.log(x,y);
// } else {
//     console.log("nhập sai x và y");
// }


// //in ra dãy số từ 1 đến 500
// let index = 1;
// for (index <=500){
//     console.log(index);
//     index++;
// }


//in ra các số chia hết cho 2 và 3 trong số từ 1 đến 300
// for (let num = 1; num <= 100; num++) {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//     else if (num % 3 === 0) {
//         console.log(num);
//     }
//   }

//tính tổng các số chẵn trong đoạn[-30,50]
//   let sum = 0;
// for (let a = -30; a <=50; a++){
// if (a % 2 == 0) {
//     sum +=a

// }
// }
// console.log(sum);

//nhập vào số n, tính giai thừa của số n
// let input = Number (prompt('nhập vào số n'));
// let giaithua = 1;
// for (n = input; n >= 1; n--){
//     giaithua *= n
// }
// console.log(giaithua);


//nhập vào 3 số a,b,x (a<b). tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x
// let a = Number(prompt('a'));
// let b = Number(prompt('b'));
// let x = Number(prompt('x'));

// let res = null;

// for(let i = a; i <= b; i++){
//     if (i % x == 0) {
//         res = i;
//         break;
//     }
// }

// console.log(res);

// Bài về nhà

//7. Nhập vào số n. Hãy in ra số ước của n.
// let n = parseInt(prompt("Nhập vào số n: "));
// console.log("ước của n" + n + " là:");

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }


//12.Trò chơi đoán số
// let correct = Math.floor(Math.random() * 20) + 1;
// console.log(`Tạo ra một số bất kì: ${correct}`);

// let count = 0;
// while (count < 5) {
//   let answer = prompt("Đoán một số (1-20):");

//   if (answer == correct) {
//     console.log("Đoán đúng!");
//     break;
//   } else {
//     console.log("Đoán sai!");
//     count++;
//   }
// }

// if (count == 5) {
//   console.log("Bạn đã thua!");
// }


//13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n.
// let n = prompt("Nhập vào số n:");
// if ( n < 2){
//     console.log("Nhập lại");
// } else if ( n < 10){ 
// // for (let i = 1; i <= 10; i++) {
// //   console.log(`${n} x ${i} = ${n * i}`);
// // }
// for (int i = 0; i < n; i++) {
//     for (int j = 0; j < n; j++) {
//       System.out.print(" * ");
//     }
//     System.out.println();
//   }
// }


//14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// let n = prompt("Nhập số n:");
// if (n < 2){
//     console.log("Nhập lại");
// }
// printSquare(n);

// function printSquare(n) {
//     for (let i = 0; i < n; i++) {
//       let row = '';
//       for (let j = 0; j < n; j++) {
//         row += ' * ';
//       }
//       console.log(row);
//     }
//   }

//15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.
// function main() {
//     const chieuDai = Number(prompt("Nhập chiều dài", 1))
//     const chieuRong = Number(prompt("Nhập chiều rộng", 1))
//     let canhDai = ''

//     for (let j = 2; j <= chieuRong; j++) {
//       canhDai += ' * '
//     }

//     for (let i = 2; i <= chieuDai; i++) {
//       console.log(canhDai)
//     }
//   }
//   main()
  
//16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// let n = prompt("Nhập số n:");
// if (n >= 3) {
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += '* ';
//     }
//     console.log(row);
//   }
// } else {
//   console.log('n phải lớn hơn hoặc bằng 3');
// }

