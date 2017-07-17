let char = document.querySelector('.characters');



function reqListener () {
  let data = JSON.parse(this.responseText);
  console.log(data)
  data.results.forEach(function(el){
    let li = document.createElement( "li");
    let textcontent = document.createTextNode( el.name);
    li.appendChild(textcontent);
    char.appendChild(li);
  })
}

// 2. Create our Ajax Request
//get:https://api.github.com/users/akonam



let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/akonam");

req.addEventListener("load", reqListener);
req.send();


vCard = vCard();

console.log(vCard.getFormattedString());

vCard.firstName = 'Guy';
vCard.lastName = 'Nzeribe';
vCard.organization = 'Cool Corporation';
vCard.photo.attachFromUrl('https://avatars2.githubusercontent.com/u/5659221?v=3&s=460', 'JPEG');
vCard.workPhone = '202-555-1234';
vCard.email = 'gnzeribe@gmail.com';
vCard.Website(url) = 'https://github.com/akonam';
