function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}


// إغلاق القائمة عند الضغط على أي رابط
var links = document.querySelectorAll('#nav-links a');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        var navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("active"); // إغلاق القائمة
    });
});