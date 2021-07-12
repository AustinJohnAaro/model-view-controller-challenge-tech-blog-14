async function newFormHandler(event) {
    event.preventDefault();

    var title = document.querySelector('input[name="post-title"]').value;
    var post_text = document.querySelector('textarea[name="post-text"]').value;

    var response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
var app = express();
var PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler); 
