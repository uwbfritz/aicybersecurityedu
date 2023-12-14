function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft= "0";
}

window.onload = function() {
    var gifs = document.querySelectorAll('.gif'); // Select all elements with the class 'gif'

    gifs.forEach(function(gif) {
        setInterval(function() {
            var src = gif.src;
            gif.src = "";
            gif.src = src;
        }, 6000); // Adjust the time for each GIF if necessary
    });
};

// Add event listeners for chapter links
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault();
        const chapterId = this.getAttribute('href').substring(1);
        // Load chapter content dynamically here
        // For example, set innerHTML of mainContent
        // document.getElementById('mainContent').innerHTML = '<h2>Chapter Content</h2>';
        closeNav();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

function fetchNews() {
    fetch('/api/news/cybersecurity')
        .then(response => response.json())
        .then(data => {
            const newsContent = document.getElementById('newsContent');
            newsContent.innerHTML = ''; // Clear existing content

            data.forEach(newsItem => {
                const newsDiv = document.createElement('div');
                newsDiv.className = 'news-item';

                const title = document.createElement('h3');
                title.textContent = newsItem.title;

                const description = document.createElement('p');
                description.textContent = newsItem.description.value;

                const link = document.createElement('a');
                link.href = newsItem.link;
                link.textContent = 'Read More';
                link.target = '_blank';

                newsDiv.appendChild(title);
                newsDiv.appendChild(description);
                newsDiv.appendChild(link);

                newsContent.appendChild(newsDiv);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}
window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var sidebar = document.querySelector('.sidebar');

    if (window.pageYOffset > headerHeight) {
        sidebar.style.top = '0';
    } else {
        sidebar.style.top = (headerHeight - window.pageYOffset) + 'px';
    }
});



