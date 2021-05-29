    //form 1

    function subFun(){
        var uname=document.forms["loginForm"]["uname"].value;
        var upswd=document.forms["loginForm"]["upswd"].value;

    if(uname==null || uname=="" ){
              document.getElementById("ErrorBox").innerHTML =
               "enter the user name";
             return false;
    }

    if(upswd==null || upswd==""){
              document.getElementById("ErrorBox").innerHTML =
               "enter the password";
             return false;
    }

    if (uname != '' && upswd != '' ){
     alert("Login successfully");
                     }
    
    
    }

//form 2
 function regFun(){
     let uname1 = document.forms['regForm']['uname1'].value;
     let uemail = document.forms['regForm']['email1'].value;
     let upswd1 = document.forms['regForm']['password1'].value;
     let upswd2 = document.forms['regForm']['repassword1'].value;

     if(uname1==null || uname1=="" ){
        document.getElementById("ErrorBox").innerHTML =
        "enter the user name";
        return false;
      }
     if(uemail==null || uemail==""){
        document.getElementById("ErrorBox").innerHTML=
        "enter the email";
        return false;
     }

     if(upswd1==null || upswd1==""){
        document.getElementById("ErrorBox").innerHTML =
         "enter the password";
        return false;
     }
     if(upswd2 == null || upswd2 == ""){
        document.getElementById("ErrorBox").innerHTML =
         "enter the confirm password";
       return false;
    }
    if(upswd1 != upswd2){
        document.getElementById('ErrorBox').innerHTML =
        "password don't match";
        return false;

    }

    if (uname1 != '' && upswd1 != '' && upswd2 != '' && uemail != '' && upswd1 == upswd2){
      alert("Register successfull");

    }


   

}