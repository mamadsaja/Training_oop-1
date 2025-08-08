function displayAllBlogs() {
    console.log("Menampilkan semua blog untuk admin");

    const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
    const allBlogsContainer = document.getElementById("allBlogs");
    
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
    
    if (updatedBlogs.length === 0) {
        allBlogsContainer.innerHTML = `
            <div class="border shadow-xl/30 h-full m-5 rounded-lg p-8 text-center">
                <p class="text-xl text-gray-500">Belum ada postingan blog dari user manapun.</p>
            </div>
        `;
        return;
    }
    
    updatedBlogs.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    
    updatedBlogs.forEach(function(Blog) {
        // const createdAt = Blog.createdAt ? new Date(Blog.createdAt).toLocaleDateString('id-ID') : 'Tanggal tidak tersedia';
        
        allBlogsContainer.innerHTML += `
            <div class="border shadow-xl/30 h-full m-5 rounded-lg" >
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
        `;
    });
    }

    function edit(id) {
        const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const blogToEdit = blogs.find(blog => blog.id == id);

        if (!blogToEdit) {
            alert("Blog tidak ada");
            return;
        }

        if (currentUser.role === 'admin') {
            localStorage.setItem("editId", id);
            window.location.href = "edit.html";
        } else {
            if (blogToEdit.authorId !== currentUser.username) {
                alert("Anda tidak memiliki izin untuk mengedit blog ini!");
                return;
            }
            localStorage.setItem("editId", id);
            window.location.href = "edit.html";
        }
    }

function deleteBlog(id) {
    const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
    const blogToDelete = blogs.find(blog => blog.id == id);

    if (!blogToDelete) {
        alert("Blog tidak ada");
        return;
    }

    if (confirm(`Apakah Anda yakin ingin menghapus blog "${blogToDelete.title}" oleh ${blogToDelete.authorName || blogToDelete.authorId}?`)) {
        const updatedBlogs = blogs.filter(blog => blog.id != id);
        localStorage.setItem("Blog", JSON.stringify(updatedBlogs));

        alert(`Blog "${blogToDelete.title}" berhasil dihapus`);
        console.log(`Blog dengan ID ${id} berhasil dihapus`);
        
        location.reload();
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    alert('Logout berhasil!');
    window.location.href = 'user/login.html';
}

document.addEventListener('DOMContentLoaded', function() {
    displayAllBlogs();
});
