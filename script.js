function valName()
{
    var name = document.getElementById("name").value;
    var error = document.getElementById("error")
    var letters = /^[A-Za-z]+$/;
    if (name==null || name=="")
    {  
        error.textContent = "Name can't be blank"
        error.style.color = "red"  
    return false;
    }
else if(!letters.test(name))
    {
        error.textContent = "No Numbers allowed in name"
        error.style.color = "red"
        return false;
    }
}

function valAge()
{
    var age = document.getElementById("age").value;
    var error2 = document.getElementById("error2")
            if(age=='')
                {
                    error2.textContent = "Please enter your age"
                    error2.style.color = "red"
                return false;
                }
            else if(age>35 || age<18)
                {
                    error2.textContent = "Your are not eligible to register as per your age"
                    error2.style.color = "red"
                    return false;
                }
}

function valEmail()
{
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = document.getElementById("email").value;
    var error1 = document.getElementById("error1")  
            if(email=='')
                {
                    error1.textContent = "Please Enter Email-ID"
                    error1.style.color = "red"
                    return false;
                }
            else if (!filter.test(email))
                {
                    error1.textContent = "Invalid Email-ID"
                    error1.style.color = "red"
                return false;
                }

}



function val()
            {  
                var name = document.getElementById("name").value;
                var age = document.getElementById("age").value;
                var email = document.getElementById("email").value;
                var dt = document.getElementById("setDate").value;
                var today = new Date().toISOString().split('T')[0];
               // var error4 = document.getElementById("error4").value; 
                if (name==null || email=="" || age=='')
                {  
                    alert("Please fill all the compulsory field of the form")
                }   
                else                              
                {
                alert("Name= " + name + "  Age= " + age + "  Email ID= " + email + "  Date= " +dt + "  Current Date= " + today)
                }
            }

        function KeepCount() 
            {
                var topping = document.getElementsByName("chk[]");
                var count = 0;
                for (var i = 0; i < topping.length; i++) 
                {
                var el = topping[i];
                if (el.checked) 
                {
                count++;
                }
                }
               
                if (count >= 4) 
                {
                    alert('Pick Just Three Please')
                    return false;
                }
                
            }  


            function Count() 
            {
                
            }  

            function disabledDate()
            {
                var today = new Date().toISOString().split('T')[0];
                document.getElementsByName("setDate")[0].setAttribute('min', today);

            }

         /*   function errorMessage() {
                var error = document.getElementById("error")
                if (isNaN(document.getElementById("number").value))
                {
                     
                    // Changing content and color of content
                    error.textContent = "Please enter a valid number"
                    error.style.color = "red"
                } else {
                    error.textContent = ""
                }
            }*/
    