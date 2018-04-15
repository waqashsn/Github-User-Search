$(document).ready(function(){
   $('#searchUser').on('keyup', function(e){
       let username = e.target.value;
       console.log(username);

       // make AJAX request to Github
       $.ajax({
           url:'https://api.github.com/users/'+username,
           data:{
               client_id:'515088579c4b24c8c879',
               client_secret:'ad0e84007a38f87a60ddccd6a02d288f094763b5'
           }
       }).done(function(user){
           $('#profile').html(`
           <div class="card text-white bg-primary mb-3">
                <div class="card-body">
                    
                    <div class="row">
                        <div class="col-md-3">
                            <a href="${user.html_url}"><img src="${user.avatar_url}" class="img-thumbnail border" width="100%"></a>
                            <a href="${user.html_url}" target="_blank"  class="btn btn-secondary btn-block">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <h2 class="card-title">${user.name}</h2>
                            <p>${user.bio}</p>
                        </div>

                    </div>
                </div>
            </div>
         `);

       });
   }) 
});