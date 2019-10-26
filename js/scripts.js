function myFrm(){
  var m = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var f = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var g = document.getElementsById("gender").value;
  var d = document.getElementsById("day").value;
  var mnth = document.getElementsById("month").value;
  var y = document.getElementsById("year").value;

  var date = new Date(`${y}-${mnth}-${d}`);
  var day = date.getDay();
  if (g=="male"){
    return document.getElementsById("val").innerHTML=m[day] +" "+days[day];
  }
  if (g=="female"){
    return document.getElementsById("val").innerHTML=f[day] +" "+days[day];
  }
}