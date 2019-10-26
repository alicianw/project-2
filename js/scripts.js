function myFrm() {
  var m = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var f = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  
  var d = document.getElementsByName("day").value;
  var mnth = document.getElementsByName("month").value;
  var y = document.getElementsByName("year").value;
  var g = document.getElementsByName("gen").value;

  var date = new Date(`${y}-${mnth}-${d}`);
  var day = date.getDay();
  console.log(g);
  if (g=="male"){
    return document.getElementsByName("val").innerHTML = m[day] +" "+days[day];
  }
  if (g=="female"){
    return document.getElementsByName("val").innerHTML = f[day] +" "+days[day];
  }
}