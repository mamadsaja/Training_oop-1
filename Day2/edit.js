        document.addEventListener("DOMContentLoaded", function () {
            const blogs = JSON.parse(localStorage.getItem("Blog")) || [];
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const editId = localStorage.getItem("editId");

            console.log("Edit ID:", editId);
            console.log("Blogs:", blogs);

            const blogToEdit = blogs.find(b => b.id == editId);

            if (blogToEdit) {
                if (currentUser.role !== 'admin' && blogToEdit.authorId !== currentUser.username) {
                    alert("Anda tidak memiliki izin untuk mengedit blog ini!");
                    window.location.href = "index.html";
                    return;
                }
                
                document.getElementById("editTitle").value = blogToEdit.title;
                document.getElementById("editBlog").value = blogToEdit.blog;
                console.log("Blog ditemukan :", blogToEdit);
                
                if (currentUser.role === 'admin') {
                    const blogInfo = document.getElementById("blogInfo");
                    const authorName = document.getElementById("authorName");
                    blogInfo.classList.remove("hidden");
                    authorName.textContent = blogToEdit.authorName || blogToEdit.authorId;
                    
                    document.getElementById("backLink").href = "admin-dashboard.html";
                } else {
                    document.getElementById("backLink").href = "index.html";
                }
            } else {
                console.log("Blog tidak ditemukan");
                alert("Blog tidak ditemukan!");
                window.location.href = "index.html";
                return;
            }

            document.getElementById("editTitle").addEventListener("blur", function() {
                validateForm("editTitle");
            });

            document.getElementById("editBlog").addEventListener("blur", function() {
                validateForm("editBlog");
            });

            document.getElementById("editform").addEventListener("submit", function (e) {
                e.preventDefault();
                console.log("Form submitted");
                
                const newTitle = document.getElementById("editTitle").value.trim();
                const newBlog = document.getElementById("editBlog").value.trim();
                
                const isTitleValid = validateForm("editTitle");
                const isBlogValid = validateForm("editBlog");
                
                if (!isTitleValid || !isBlogValid) {
                    alert("Title dan Blog harus diisi terlebih dahulu!");
                    return;
                }
                
                if (blogToEdit) {
                    blogToEdit.title = newTitle;
                    blogToEdit.blog = newBlog;
                    
                    const updatedBlogs = blogs.map(b => (b.id == editId ? blogToEdit : b));
                    
                    console.log("Updated blogs array:", updatedBlogs);
                    
                    localStorage.setItem("Blog", JSON.stringify(updatedBlogs));
                    localStorage.removeItem("editId");
                    
                    alert("Menyimpan perubahan...");
                    console.log("Redirecting...");
                    
                    if (currentUser.role === 'admin') {
                        window.location.href = "admin-dashboard.html";
                    } else {
                        window.location.href = "index.html";
                    }
                } else {
                    alert("Blog tidak ditemukan!");
                }
            });
        });

        function validateForm(fieldId){
            const field = document.getElementById(fieldId);
            const value = field.value.trim();
            const errorElement = document.getElementById(fieldId + "Error");

            if(value === ""){
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
                return false;
            }else if(fieldId === "editTitle" && value.length < 3){
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
                return false;
            }else if(fieldId === "editBlog" && value.length < 10){
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
                return false;
            }else{
                field.style.borderColor = "black";
                field.style.borderWidth = "1px";
                errorElement.classList.add("hidden");
                return true;
            }
        }
