function checkCountry() {
  let countrycode = document.querySelector("#country").value;
  console.log(`${countrycode}`);

  fetch(`https://restcountries.eu/rest/v2/callingcode/${countrycode}`)
    .then(response => response.json())

    .then(countries => {
      // console.log(countries)
      // document.querySelector(".result").innerHTML = "";
      countries.forEach(element => {
        document
          .querySelector(".result").insertAdjacentHTML(`beforeend`,
            `The state of ${element.name} has the calling-code ${countrycode}.  The population is an estimated ${element.population}, yet that could always change, while we speak, depending on how bored people have been 9 months ago. The countries people call their beloved nation 
                  "${element.nativeName}".
                            <hr><img src="${element.flag}" class="flag">
                            < This is the country's flag.`)

      });
    });
}