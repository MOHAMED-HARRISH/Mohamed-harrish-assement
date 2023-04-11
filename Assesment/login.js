function login()
    {
        var n = document.getElementById("name").value;
        var m = /[0-9]/;
        if(n === "")
        {
            alert("Enter a valid name");
            return false;
        }
        if(m.test(n))
        {
            alert("Name cannot contain numbers");
            return false;
        }
        return true;
    }