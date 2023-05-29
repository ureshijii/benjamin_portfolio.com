
function Validation() {
    var emailID = document.myForm.Email.value;
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");
    
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('fname').value;
    
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    }
    
    if (atpos < 1 || dotpos - atpos < 2) {
      alert("Please enter a correct email ID");
      document.myForm.Email.focus();
      return false;
    }
    
    return true;
  }
  
  