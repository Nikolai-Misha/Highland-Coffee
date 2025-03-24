// Toggle dropdown menu
const userIcon = document.getElementById('user-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

userIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('active');
});

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', function(e) {
  if (!userIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});

// Xử lý tìm kiếm
document.getElementById('search-icon').addEventListener('click', function() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('.shop-container .box');

  if (items.length > 0) {
    // Nếu đang ở trang có shop-container (menu.html)
    items.forEach(item => {
      const itemName = item.querySelector('h2').textContent.toLowerCase();
      if (itemName.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  } else {
    // Nếu ở trang không có shop-container (about.html, contact.html, v.v.)
    alert('Chức năng tìm kiếm chỉ khả dụng trên trang Thực đơn!');
  }
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('search-icon').click();
  }
});

// Xử lý đăng nhập/đăng ký
document.getElementById('login-btn').addEventListener('click', function(e) {
  e.preventDefault();
  showAuthForm('Đăng nhập');
});

document.getElementById('register-btn').addEventListener('click', function(e) {
  e.preventDefault();
  showAuthForm('Đăng ký');
});

function showAuthForm(type) {
  const formHTML = `
    <div class="auth-overlay" id="auth-overlay">
      <div class="auth-form">
        <h2>${type}</h2>
        <form id="${type === 'Đăng nhập' ? 'login-form' : 'register-form'}">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật khẩu" required />
          ${type === 'Đăng ký' ? '<input type="password" placeholder="Xác nhận mật khẩu" required />' : ''}
          <button type="submit">${type}</button>
          <button type="button" id="close-form">Đóng</button>
        </form>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', formHTML);

  document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('auth-overlay').remove();
  });

  const form = document.getElementById(type === 'Đăng nhập' ? 'login-form' : 'register-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert(`${type} Thành công!`);
    document.getElementById('auth-overlay').remove();
  });
}