function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft= "0";
}

// Add event listeners for chapter links
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const chapterId = this.getAttribute('href').substring(1);
        // Load chapter content dynamically here
        // For example, set innerHTML of mainContent
        // document.getElementById('mainContent').innerHTML = '<h2>Chapter Content</h2>';
        closeNav();
    });
});