let uploadBlog = document.getElementById("Upload")
        
        uploadBlog.addEventListener("submit", (e)=>{
            e.preventDefault()

            const title = document.getElementById("title").value.trim();
            const blog = document.getElementById("blog").value.trim();

            if(title === "" || blog === ""){
                alert("Title dan blog tidak boleh kosong!");
                return false;
            }

            if(title.length < 3 || blog.length < 10){
                alert("Title minimal 3 karakter dan blog minimal 10 karakter!");
                return false;
            }

            const existingBlog = JSON.parse(localStorage.getItem("Blog")) || [];

            let newId = 1;
            if (existingBlog.length > 0) {
                const lastId = Math.max(...existingBlog.map(b => b.id || 0));
                newId = lastId + 1;
            }

            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            
            const newBlog ={
                id: newId,
                title: title,
                blog: blog,
                authorId: currentUser.username,
                authorName: currentUser.nama || currentUser.username,
                createdAt: new Date().toISOString()
            }

            existingBlog.push(newBlog);
            localStorage.setItem("Blog", JSON.stringify(existingBlog));
            document.getElementById("Upload").reset();

            alert("Berhasil menambahkan blog!");
        })

        function validateField(fieldId) {
            const field = document.getElementById(fieldId);
            const value = field.value.trim();
            const errorElement = document.getElementById(fieldId + "Error");
            
            if (value === "") {
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
            } else if (fieldId === "title" && value.length < 3) {
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
            } else if (fieldId === "blog" && value.length < 10) {
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
                errorElement.classList.remove("hidden");
            } else {
                field.style.borderColor = "black";
                field.style.borderWidth = "1px";
                errorElement.classList.add("hidden");
            }
        }

        document.getElementById("title").addEventListener("input", () => validateField("title"));
        document.getElementById("blog").addEventListener("input", () => validateField("blog"));

        function checkFormValidity() {
            const title = document.getElementById("title").value.trim();
            const blog = document.getElementById("blog").value.trim();
            const submitButton = document.querySelector('button[type="submit"]');
            
            if (title !== "" && blog !== "" && title.length >= 3 && blog.length >= 10) {
                submitButton.disabled = false;
                submitButton.style.opacity = "1";
            } else {
                submitButton.disabled = true;
                submitButton.style.opacity = "0.5";
            }
        }

        document.getElementById("title").addEventListener("input", checkFormValidity);
        document.getElementById("blog").addEventListener("input", checkFormValidity);

        checkFormValidity();