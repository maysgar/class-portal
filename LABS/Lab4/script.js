
//FIRST GENERATION

var request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/1/', true);

request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    //const h1 = document.createElement('h1');
    //h1.textContent = data.name;

    document.getElementById("pokeImage").src = data.sprites.front_default;

    $("#pokeName").append(data.name);
    $("#pokeAb1").append(data.abilities[0].ability.name);
    $("#pokeAb2").append(data.abilities[1].ability.name);


  } else {
    console.log('error');
  }
}

request.send();


var request2 = new XMLHttpRequest();

request2.open('GET', 'https://pokeapi.co/api/v2/pokemon/4/', true);

request2.onload = function () {

    // Begin accessing JSON data here
    var data2 = JSON.parse(this.response);
  
    if (request2.status >= 200 && request2.status < 400) {
  
      //const h1 = document.createElement('h1');
      //h1.textContent = data.name;
  
      document.getElementById("poke2Image").src = data2.sprites.front_default;
  
      $("#poke2Name").append(data2.name);
      $("#poke2Ab1").append(data2.abilities[0].ability.name);
      $("#poke2Ab2").append(data2.abilities[1].ability.name);
  
  
    } else {
      console.log('error');
    }
  }

  request2.send();


  var request3 = new XMLHttpRequest();

  request3.open('GET', 'https://pokeapi.co/api/v2/pokemon/7/', true);

  request3.onload = function () {

    // Begin accessing JSON data here
    var data3 = JSON.parse(this.response);
  
    if (request3.status >= 200 && request3.status < 400) {
  
      //const h1 = document.createElement('h1');
      //h1.textContent = data.name;
  
      document.getElementById("poke3Image").src = data3.sprites.front_default;
  
      $("#poke3Name").append(data3.name);
      $("#poke3Ab1").append(data3.abilities[0].ability.name);
      $("#poke3Ab2").append(data3.abilities[1].ability.name);
  
  
    } else {
      console.log('error');
    }
  }

request3.send();


//SECOND GENERATION

var request4 = new XMLHttpRequest();

request4.open('GET', 'https://pokeapi.co/api/v2/pokemon/152/', true);

request4.onload = function () {

  // Begin accessing JSON data here
  var data4 = JSON.parse(this.response);

  if (request4.status >= 200 && request4.status < 400) {

    //const h1 = document.createElement('h1');
    //h1.textContent = data.name;

    document.getElementById("poke4Image").src = data4.sprites.front_default;

    $("#poke4Name").append(data4.name);
    $("#poke4Ab1").append(data4.abilities[0].ability.name);
    $("#poke4Ab2").append(data4.abilities[1].ability.name);


  } else {
    console.log('error');
  }
}

request4.send();


var request5 = new XMLHttpRequest();

request5.open('GET', 'https://pokeapi.co/api/v2/pokemon/155/', true);

request5.onload = function () {

    // Begin accessing JSON data here
    var data5 = JSON.parse(this.response);
  
    if (request5.status >= 200 && request5.status < 400) {
  
      //const h1 = document.createElement('h1');
      //h1.textContent = data.name;
  
      document.getElementById("poke5Image").src = data5.sprites.front_default;
  
      $("#poke5Name").append(data5.name);
      $("#poke5Ab1").append(data5.abilities[0].ability.name);
      $("#poke5Ab2").append(data5.abilities[1].ability.name);
  
  
    } else {
      console.log('error');
    }
  }

  request5.send();


  var request6 = new XMLHttpRequest();

  request6.open('GET', 'https://pokeapi.co/api/v2/pokemon/158/', true);

  request6.onload = function () {

    // Begin accessing JSON data here
    var data6 = JSON.parse(this.response);
  
    if (request6.status >= 200 && request6.status < 400) {
  
      //const h1 = document.createElement('h1');
      //h1.textContent = data.name;
  
      document.getElementById("poke6Image").src = data6.sprites.front_default;
  
      $("#poke6Name").append(data6.name);
      $("#poke6Ab1").append(data6.abilities[0].ability.name);
      $("#poke6Ab2").append(data6.abilities[1].ability.name);
  
  
    } else {
      console.log('error');
    }
  }

request6.send();