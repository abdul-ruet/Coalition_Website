// Hide Jessica's info , showing it when clicked
function showJessicaInfo() {
    document.getElementById("jessica-info").style.display = "block";
    document.querySelector(".chat-history").style.display = "none";
  }
  
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic [coalition, skill-test]");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
 