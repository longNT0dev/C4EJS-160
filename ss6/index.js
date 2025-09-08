var example2



// External Script
console.log("Hello World!")

// Từ khóa khai báo biến + Tên biến = Giá trị của biến
// Constant => Hằng số không thay đổi
// const PI = 3.14

// PI = 3.1415 // Gán lại giá trị mới cho biến => Sai

// Khác biệt 1 giữa let + var
// console.log("Trước khi khởi tạo biến example1", example1)
// console.log("Trước khi khởi tạo biến example2", example2)

// let example1 = "Something wrong"
// var example2 = 2

// console.log("Sau khi khởi tạo biến example1", example1)
// console.log("Sau khi khởi tạo biến example2", example2)

// => var cơ chế hoisting đưa khai báo biến lên đầu

// Khác biệt 2 giữa let và var
// let a = 5 => let thì không cho phép khai báo biến trùng tên
// let a = 6
// var a = 5 => Cho phép khai báo biến trùng tên
// var a = 6

// Khác biệt 3 giữa let và var

// {
//     // Phạm vi 1
//     var a = 5
//     console.log(a)
// }

// console.log(a)

// {
//     // Phạm vi 1
//     let a = 5
//     console.log(a)
// }

// console.log(a)

// => Kết luận: Không dùng từ khóa var để khai báo biến mà chỉ sử dụng let hoặc const

// Scope
// {
//     // Phạm vi 1
//     let a = 5
//     console.log(a)

//     {
//         // Phạm vi 2
//         console.log(a)
//     }
// }

// console.log(a)

// Kiểu dữ liệu
// 1. Primitive value (Kiểu dữ liệu nguyên thủy)
// Number
// let number = 32
// String
// let str1 = "Đây là buổi học javascript đầu tiên"
// let str2 = "160"
// let str3 = 'Nay đường đông quá'
// Template literal
// let str4 = `Xin chào các bạn lớp ${str2}`
// Boolean
// let isRain = false
// let isStudent = true
// Undefined, Null
// let hmm // undefined
// let empty = null
// 2. Complex value (Kiểu dữ liệu phức)
// Array
// Object

// Toán tử toán học
// Cộng: +
// Trừ: -
// Nhân: *
// Chia:
//     Chia bình thường: /
//     Chia lấy phần dư: %
// console.log(2 + 3)
// console.log(10 - 5)
// console.log(5 * 2)
// console.log(5 / 2)
// console.log(5 % 2)

// console.log("127.0.0.1" + ":5500")

// let a = 10
// let b = 5

// a = a + b // 10 + 5 = 15

// a += b
// a -= b
// a *= b
// a /= b
// a %= b

// console.log(a)

//Toán tử so sánh
// == 
// ===
// !=
// !==
// >
// <
// >=
// <=


// Toán tử logic
// && => Điều kiện đồng thời
// || => Điều kiện 1 vế (1 trong n điều kiện thỏa mãn là được)

// Có đủ tiền và tài khoản tồn tại
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Đủ tiền mặt thanh toán hoặc Đủ tiền trong tài khoản để thanh toán
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// TypeScript:
// Từ khóa khai báo biến + Tên biến: Kiểu dữ liệu biến = Giá trị của biến