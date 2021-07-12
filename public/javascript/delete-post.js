async function deleteFormHandler(event){
    event.preventDefault();

    var id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      } 
}

var app = express();
var PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler); 
