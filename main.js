let submitButton = document.getElementById("submitButton");

let onClick = event => {
  event.preventDefault();
  // console.log(event);
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  // console.log("Yub", firstName, lastName);

  // setup URL
  let url = `https://api.icndb.com/jokes/random`;

  if (firstName) {
    url += `?firstName=${firstName}`;
  }

  if (lastName) {
    if (firstName) {
      url += `&lastName=${lastName}`;
    } else {
      url += `?lastName=${lastName}`;
    }
  }

  console.log(url);
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        };
      }
      // console.log(response);
      return response.json();
    })
    .then(function(json) {
      // update DOM with response
      //console.log(json);

      document.getElementById("jokeHeader").innerText = "Result:";
      document.getElementById("jokeText").innerHTML = json.value.joke;
    });
};

submitButton.addEventListener("click", onClick);
