document.getElementById("upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = ""; // Xóa thông báo lỗi cũ
    if (file) {
        // Kiểm tra loại file
        if (!file.type.startsWith("image/")) {
            errorMessage.textContent = "Vui lòng chọn một file ảnh hợp lệ!";
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("avatar").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
