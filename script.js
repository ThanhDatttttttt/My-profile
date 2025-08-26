// Lấy element ảnh và input
const avatar = document.getElementById("avatar");
const upload = document.getElementById("upload");

// Khi người dùng chọn file
upload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      avatar.src = e.target.result; // cập nhật ảnh
    };
    reader.readAsDataURL(file);
  }
});
