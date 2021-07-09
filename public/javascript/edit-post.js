async function editFormHandler(event) {
    event.preventDefault();

    var id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    var title = document.querySelector('input[name="post-title"]').value;
    var post_text = document.querySelector('textarea[name="post-text"]').value;

    var response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler); 
