function login()
    {
        var name = document.getElementById("name").value;
        var pwd = document.getElementById("pass").value;
        if(name == "brownladybug163"  && pwd == "gallaries")
        {
            return true;
        }
        else{
            alert("invalid user Name or Password");
        return false;
        }
       
    }