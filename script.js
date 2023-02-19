async function api(course, year, term){

  var url = 'https://www.sfu.ca/bin/wcm/course-outlines?'

  var data = ''
  var url_tmp = url + year + "/" + term + course;

  data = await fetch(url_tmp);
  if (data.ok){
    return year + term
  }
  
}


async function test(){

  let list = document.getElementById("myList");

  while( list.firstChild ){
    list.removeChild( list.firstChild );
  }

  var courseInput = document.getElementById("courseInput").value;
  var course = "/"
  // var department = ""
  // var number = ""

  for (let i = 0; i < courseInput.length; i++){
    if (isNaN(courseInput[i])){
      course += courseInput[i];
    }
    else{
      course = course + "/";
      for (let j = i; j < courseInput.length; j++){
        course += courseInput[j]
      }
      break;
    }
  }

  //var course = "/" + department + "/" + number
  var year = [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
  var term = ["spring", "summer", "fall"]

  var ret = []

  for (const yr of year){
    for (const tm of term){
      var data = await api(course,yr,tm);
      if (data != null){
        ret.push(data);
      }
    }
  }

  console.log(ret)

  ret.forEach((item) =>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  })

  //document.getElementById("output").innerHTML = 'hi';
}