document.getElementById('addBookmark').addEventListener('click', addBookmark);

function addBookmark() {
    const websiteName = document.getElementById('websiteName').value;
    const websiteURL = document.getElementById('websiteURL').value;

    if (!websiteName || !websiteURL) {
        alert('Please fill in both fields');
        return;
    }

    const bookmarksList = document.getElementById('bookmarksList');

    const bookmarkDiv = document.createElement('div');
    bookmarkDiv.classList.add('bookmark');

    bookmarkDiv.innerHTML = `
        <h2>${websiteName}</h2>
        <a href="${websiteURL}" target="_blank">${websiteURL}</a>
        <div class="btn-group">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>
    `;

    bookmarksList.appendChild(bookmarkDiv);

    document.getElementById('websiteName').value = '';
    document.getElementById('websiteURL').value = '';

    bookmarkDiv.querySelector('.btn-delete').addEventListener('click', () => {
        bookmarkDiv.remove();
    });

    bookmarkDiv.querySelector('.btn-edit').addEventListener('click', () => {
        document.getElementById('websiteName').value = websiteName;
        document.getElementById('websiteURL').value = websiteURL;
        bookmarkDiv.remove();
    });
}