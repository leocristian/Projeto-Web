
function setCookie(cname,cvalue) {
    console.log("entrou set")
    var d = new Date();
    d.setTime(data.getTime() + 60000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + cvalue + ";" + expires + ";path=/";
    console.log("cname: ", cname)
    console.log("cvalue:", cvalue)
    console.log("doc cookie: ",document.cookie)
  }
  
function getCookie(cname) {
    var user = document.cookie.split("=");
    var name = cname + "=";
    console.log('AAAAAAA',name)
    console.log("get user:", user)
    
    return user
}

function checkCookie() {
    console.log("entrou")
    var user=getCookie("username");
    console.log("user: ", user)
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user);
         document.getElementById("usuario").innerText = user
       }
    }
  }

  window.onload = () => {
      checkCookie()
  }