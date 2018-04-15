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
           <div class="card text-black bg-secondary mb-3">
                <div class="card-body">
                    
                    <div class="row">
                        <div class="col-md-2">
                            <a href="${user.html_url}"><img src="${user.avatar_url}" class="img-thumbnail border" width="100%"></a>
                            <a href="${user.html_url}" target="_blank"  class="btn btn-secondary btn-block">View Profile</a>
                        </div>
                        <div class="col-md-10">
                            <h2 class="card-title">${user.name}</h2>
                            <blockquote class="blockquote">
                            <p class="mb-0">${user.bio}</p>    
                            </blockquote>
                            
                            <div class="row">
                                <div class="col-md-3">
                                    Repositories <span class="badge badge-light">${user.public_repos}</span><br>
                                    Location: ${user.location}
                                </div>
                                <div class="col-md-2">
                                    Followers <span class="badge badge-light">${user.followers}</span><br>
                                    Company: ${user.company}
                                </div>
                                <div class="col-md-3">
                                    Following <span class="badge badge-light">${user.following}</span>
                                </div>
                                <div class="col-md-4">
                                    URL: <a href="" target="_blank">${user.html_url}</a>
                                    Email: ${user.email}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         `);

       });
   }) 
});