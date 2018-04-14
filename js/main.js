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
           console.log(user);

       });
   }) 
});