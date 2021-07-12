async function loginFormHandler(event) {
    event.preventDefault();
  
    var email = document.querySelector('#email-login').value.trim();
    var password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      var response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    var username = document.querySelector('#username-signup').value.trim();
    var email = document.querySelector('#email-signup').value.trim();
    var password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      var response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  var app = express();
var PORT = process.env.PORT || 3001;

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); 

  
  