// Mảng lưu trữ các phím người dùng vừa gõ
const pressed = [];

// Khai báo các mật mã (nhớ viết thường)
const secretHacker = 'hack';
const secretLove = 'songtu';

// Lắng nghe sự kiện gõ phím trên toàn bộ trang web
window.addEventListener('keyup', (e) => {
  pressed.push(e.key.toLowerCase());
  
  // Giữ lại số lượng phím vừa đủ với độ dài của mật mã dài nhất để tránh tràn bộ nhớ
  pressed.splice(-10, pressed.length - 10); 
  
  const currentInput = pressed.join('');

  // 1. Nếu người dùng gõ chữ "hack"
  if (currentInput.includes(secretHacker)) {
    console.log("Hacker mode activated!");
    
    // Đổi màu nền và chữ toàn bộ trang web sang phong cách Matrix
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#00ff00';
    
    // Đổi màu các thẻ tag, khung terminal và các viền
    document.documentElement.style.setProperty('--bg', '#000000');
    document.documentElement.style.setProperty('--panel', '#000000');
    document.documentElement.style.setProperty('--ink', '#00ff00');
    document.documentElement.style.setProperty('--muted', '#009900');
    document.documentElement.style.setProperty('--accent2', '#00ff00');
    document.documentElement.style.setProperty('--rule', '#004400');
    
    // Reset mảng để người dùng có thể gõ lại từ đầu nếu muốn
    pressed.length = 0; 
  }

  // 2. Nếu người dùng gõ chữ "songtu"
  if (currentInput.includes(secretLove)) {
    console.log("Secret message unlocked!");
    
    // Thông điệp ẩn giấu hiện lên
    alert("🔓 MỞ KHÓA THÔNG ĐIỆP BÍ MẬT:\n\nCode web này tuy có thể còn vài cái bug, nhưng được gặp Duyên chắc chắn là tính năng hoàn hảo nhất của anh rồi! 😉");
    
    pressed.length = 0;
  }
});
