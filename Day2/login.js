const adminUsers = [
    {
        username: "admin",
        password: "admin123",
        role: "admin",
        nama: "Admin"
    }
];

function checkAdminLogin(username, password) {
    const admin = adminUsers.find(u => u.username === username && u.password === password);
    return admin || null;
}

function checkUserLogin(username, password) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(u => u.username === username && u.password === password);
    return user || null;
}

function checkLogin(username, password) {
    const admin = checkAdminLogin(username, password);
    if (admin) {
        return admin;
    }
    
    const user = checkUserLogin(username, password);
    return user;
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginform');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                alert('Username dan password harus diisi!');
                return;
            }
            
            const user = checkLogin(username, password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                alert(`Selamat datang, ${user.nama}! Login berhasil.`);
                
                if (user.role === 'admin') {
                    window.location.href = '../view/admin-dashboard.html';
                } else {
                    window.location.href = '../index.html';
                }
                
                loginForm.reset();
            } else {
                alert('Username atau password salah!');
            }
        });
    }
});

function logout() {
    localStorage.removeItem('currentUser');
    alert('Logout berhasil!');
}

function isLoggedIn() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

function getCurrentUser() {
    return isLoggedIn();
}