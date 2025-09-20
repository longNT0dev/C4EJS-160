1) Siêu thị mini – Tính hóa đơn có khuyến mãi

Bối cảnh: Bạn có giỏ hàng là một mảng các món hàng. Trái cây giảm 10%. Nếu tổng trước khuyến mãi loại theo danh mục vượt 100 thì giảm thêm 5% trên tổng sau giảm theo danh mục.

Dữ liệu mẫu:

const cart = [
  { name: 'Banana', category: 'fruit', price: 12, qty: 3 },
  { name: 'Milk',   category: 'dairy', price: 30, qty: 1 },
  { name: 'Apple',  category: 'fruit', price: 15, qty: 2 },
  { name: 'Bread',  category: 'bakery', price: 20, qty: 1 }
];


2) Sổ điểm lớp – Tính trung bình & phân loại

Bối cảnh: Mỗi học sinh là 1 object có name và scores (mảng điểm). TB ≥ 6.5 ⇒ Pass, ngược lại Fail. Nếu có bất kỳ điểm < 5 ⇒ thêm cờ “needs help”.

Dữ liệu mẫu:

const students = [
  { name: 'An',   scores: [8, 7, 9] },
  { name: 'Binh', scores: [5, 6, 5] },
  { name: 'Chi',  scores: [9, 9, 10] },
  { name: 'Dung', scores: [4, 7, 6] }
];


3) Nhật ký nhiệt độ – Cảnh báo sốt

Bối cảnh: Bạn có mảng nhiệt độ theo ngày (°C). Nhiệt độ > 37.5 là sốt. Tìm số lần sốt, max, min.

Dữ liệu mẫu:

const readings = [36.5, 37.8, 38.2, 36.9, 35.9, 37.2];


Yêu cầu:

Dùng for để:

Đếm feverCount (giá trị > 37.5).

Tìm max và min thủ công (không dùng Math.max(...arr)).

Trả về object { feverCount, max, min }.

4) Lên kế hoạch trong ngày – Chọn việc ≤ 30 phút

Bối cảnh: Danh sách việc cần làm có tags, done, est (phút). Hôm nay bạn chỉ làm các việc chưa xong và ≤ 30 phút. Việc có tag 'urgent' sẽ được gắn nhãn [URGENT].

Dữ liệu mẫu:

const tasks = [
  { title: 'Email client', tags: ['work','urgent'], done: false, est: 10 },
  { title: 'Buy milk',     tags: ['home'],          done: false, est: 5  },
  { title: 'Fix bug #123', tags: ['work'],          done: false, est: 45 },
  { title: 'Read book',    tags: ['personal'],      done: true,  est: 30 },
  { title: 'Pay bills',    tags: ['home','urgent'], done: false, est: 15 }
];


Yêu cầu:

Duyệt tasks bằng for.

Tạo mảng planToday là chuỗi tiêu đề dạng:

"[URGENT] Email client (10m)" nếu có tag urgent

"Buy milk (5m)" nếu không

Chỉ thêm nếu done === false và est <= 30.



5) Quản lý kho – Lập đơn nhập lại

Bối cảnh: Mỗi sản phẩm có stock và minStock. Nếu stock < minStock thì cần nhập thêm. Nếu stock === 0, thêm buffer an toàn +2 chiếc.

Dữ liệu mẫu:

const products = [
  { sku: 'A1', stock: 5,  minStock: 10 },
  { sku: 'B2', stock: 12, minStock: 8  },
  { sku: 'C3', stock: 0,  minStock: 5  },
  { sku: 'D4', stock: 7,  minStock: 7  }
];


Yêu cầu:

Dùng for để tạo restockOrders là mảng object { sku, quantity }.

quantity = minStock - stock

Nếu stock === 0 ⇒ quantity += 2 (buffer)

Tính thêm totalItems là tổng quantity cần nhập.