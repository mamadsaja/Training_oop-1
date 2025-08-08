 function tampilkanNama() {
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const userNameElement = document.getElementById("userName");
            
            if (currentUser && currentUser.nama) {
                userNameElement.textContent = currentUser.nama;
            } else if (currentUser && currentUser.username) {
                userNameElement.textContent = currentUser.username;
            } else {
                userNameElement.textContent = "Guest";
            }
        }
        tampilkanNama();

        function refreshPage() {
            location.reload();
        }

        function display(){
            console.log("chek",localStorage.getItem("Blog"));

            const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const bodytable = document.getElementById("cardblog");
            
            let updatedBlogs = blogs;
            let needsUpdate = false;
            
            blogs.forEach(blog => {
                if (!blog.authorId) {
                    blog.authorId = "admin"; 
                    blog.authorName = "Admin";
                    blog.createdAt = new Date().toISOString();
                    needsUpdate = true;
                }
            });
            
            if (needsUpdate) {
                localStorage.setItem("Blog", JSON.stringify(updatedBlogs));
            }
            
            const userBlogs = updatedBlogs.filter(blog => blog.authorId === currentUser.username);
            
            if (userBlogs.length === 0) {
                cardblog.innerHTML = `
                    <div class="border shadow-xl/30 h-full m-5 rounded-lg p-8 text-center">
                        <p class="text-xl text-gray-500">Belum ada postingan blog. Silakan buat postingan pertama Anda!</p>
                        <a href="upload.html" class="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Buat Postingan</a>
                    </div>
                `;
                return;
            }
            
            userBlogs.map(function(Blog){
                cardblog.innerHTML += `<div class="border shadow-xl/30 h-full m-5 rounded-lg" >
                                            <div class="border h-15 rounded-t-lg flex items-center p-5">
                                                <p class="font-medium text-xl">${Blog.title}</p>
                                            </div>
                                            <div class="p-5">
                                                <p>${Blog.blog}</p>
                                            </div>
                                            <div class="border h-10 flex items-center justify-end gap-5 p-5 rounded-b-lg">
                                                <button class="text-xl" onclick="edit('${Blog.id}')">Edit</button>                                                
                                                <button class="text-xl" onclick="hapus('${Blog.id}')">Hapus</button>
                                            </div>
                                        </div>
                                        `
            })
                
        }
        display();

        function edit(id) {
            const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const blogToEdit = blogs.find(blog => blog.id == id);

            if (!blogToEdit) {
                alert("Blog tidak ada");
                return;
            }

            if (currentUser.role !== 'admin' && blogToEdit.authorId !== currentUser.username) {
                alert("Anda tidak memiliki izin untuk mengedit blog ini!");
                return;
            }

            localStorage.setItem("editId", id);
            window.location.href = "edit.html";
        }
        
        function hapus(id){
            const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const Blogtodelete = blogs.find(blog => blog.id == id);

            if (!Blogtodelete) {
                alert("Blog tidak ada");
                return;
            }

            if (Blogtodelete.authorId !== currentUser.username) {
                alert("Anda tidak memiliki izin untuk menghapus blog ini!");
                return;
            }

            if (confirm(`Apakah ada yakin ingin menghapus ${Blogtodelete.title}?`)) {
                const element = document.getElementById(id);
                if (element) {
                    element.remove();
                }

                const updatedBlogs = blogs.filter(blog => blog.id != id);
                localStorage.setItem("Blog", JSON.stringify(updatedBlogs));

                alert(`Blog ${Blogtodelete.title} berhasil dihapus`);
                console.log(`Blog dengan ID ${id} berhasil dihapus`);
                
                location.reload();
            }
        }

function logout() {
    localStorage.removeItem('currentUser');
    alert('Logout berhasil!');
    window.location.href = 'user/login.html';
}

