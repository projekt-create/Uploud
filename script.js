const Input = document.getElementById('imageInput');
const Img = document.getElementById('imagePreview');

Input.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            Img.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});
