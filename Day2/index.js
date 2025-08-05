// Registrasi    
let formRegis = document.getElementById("Register")
    formRegis.addEventListener("submit", (e)=>{
        e.preventDefault()
            
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        const newUser = {
            email: email,
            username: username,
            password: password,
        }

        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        document.getElementById("Register").reset();
            
        alert("sukses")
            
    })

function display() {
    //localStorage.setItem('users', InputDeviceInfo.value);
    console.log("check",localStorage.getItem("users"));

    const users = JSON.parse(localStorage.getItem("users"));
    const bodytable = document.getElementById("bodytable");
    users.map(function(user){
        // console.log(user.email);
        bodytable.innerHTML += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ${user.email}
                                    </th>
                                    <td class="px-6 py-4">
                                        ${user.username}
                                    </td>
                                    <td class="px-6 py-4">
                                        ${user.password}
                                    </td>
                                </tr>`
    })
}
display();
// Registrasi 

// Login
const loginForm = document.getElementById('loginform');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'username' && password === 'password') {
            alert('login sukses');
    }else{
        alert('username atau password salah');
    }
});
// Login