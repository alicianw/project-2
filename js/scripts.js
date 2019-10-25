function myFrm() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
   var year = document.getElementById("year").value;
    var cc = parseInt(year.slice(0, 2));
    var yy = parseInt(year.slice(2, 4));
    var gender = document.getElementById("gender").value;
  
    var fml =( ( (cc/4) - 2 * (cc - 1)) + ((5*yy/4) ) + ((26*(month+1)/day)) + day )% 7;
    var bdate = fml.toFixed(0);
    
     
     var mname = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
      var fname = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    if (gender == "male"){
      return  document.getElementById("result").innerHTML = mname[bdate-1];
      }
  
      if (gender == "female"){
        return  document.getElementById("result").innerHTML = fname[bdate-1];
      }

  }
  