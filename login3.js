function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="12004066" && password=="somasekhar")
{
   alert("Login Successfully");
   return false;
}
else
{
   alert("Login Failed");
}

}