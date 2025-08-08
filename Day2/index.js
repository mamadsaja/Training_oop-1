function addUser(userData) {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    const existingUser = existingUsers.find(user => user.username === userData.username);
    if (existingUser) {
        alert('Username sudah digunakan!');
        return false;
    }
    
    const newUser = {
        ...userData,
        role: "user",
        nama: userData.username
    };
    
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    
    return true;
}

function displayUsers() {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const tableBody = document.getElementById('bodytable');
    
    if (tableBody) {
        tableBody.innerHTML = '';
        
        existingUsers.forEach(user => {
            const row = document.createElement('tr');
            row.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
            row.innerHTML = `
                <td class="px-6 py-4">${user.email || '-'}</td>
                <td class="px-6 py-4">${user.username}</td>
                <td class="px-6 py-4">${user.password}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('Register');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!email || !username || !password) {
                alert('Semua field harus diisi!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password minimal 6 karakter!');
                return;
            }
            
            if (username.toLowerCase() === 'admin') {
                alert('Username "admin" tidak diperbolehkan!');
                return;
            }
            
            const userData = {
                email: email,
                username: username,
                password: password
            };
            
            if (addUser(userData)) {
                alert('Registrasi berhasil! Silakan login.');
                registerForm.reset();
                displayUsers(); 
            }
        });
    }
    
    displayUsers();
});

function clearAllUsers() {
    if (confirm('Yakin ingin menghapus semua user?')) {
        localStorage.removeItem("users");
        displayUsers();
        alert('Semua user telah dihapus!');
    }
}
