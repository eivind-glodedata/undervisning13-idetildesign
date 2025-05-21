console.log('Hello!');
//function typeText(elementId, text, speed) {
 // let i = 0;
  //const element = document.getElementById(elementId);

 // function type() {
 //   if (i < text.length) {
 //     element.innerHTML += text.charAt(i);
 //     i++;
 //     setTimeout(type, speed);
 //   }
 // }

  //type();
//}

/*typeText(
  'print',
  `Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit
litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram; multa quoque et bello
passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.
Musa, mihi causas memora, quo numine laeso, quidve dolens, regina deum tot volvere casus insignem pietate virum,
tot adire labores impulerit. Tantaene animis caelestibus irae?Urbs antiqua fuit, Tyrii tenuere coloni, Karthago,
Italiam contra Tiberinaque longe ostia, dives opum studiisque asperrima belli; quam Iuno fertur terris magis omnibus
unam posthabita coluisse Samo; hic illius arma, hic currus fuit; hoc regnum dea gentibus esse, si qua fata sinant,
iam tum tenditque fovetque. Progeniem sed enim Troiano a sanguine duci audierat, Tyrias olim quae verteret arces;
hinc populum late regem belloque superbum venturum excidio Libyae: sic volvere Parcas. Id metuens, veterisque memor
Saturnia belli, prima quod ad Troiam pro caris gesserat Argis--necdum etiam causae irarum saevique dolores
exciderant animo: manet alta mente repostum iudicium Paridis spretaeque iniuria formae, et genus invisum, et rapti
Ganymedis honores. His accensa super, iactatos aequore totoTroas, reliquias Danaum atque immitis Achilli, arcebat
longe Latio, multosque per annos errabant, acti fatis, maria omnia circum. Tantae molis erat Romanam condere gentem!`,
  100
);*/

//This will create a typing effect where "Hello, world!" is typed out in the element with ID myElement at a speed of 100 milliseconds per character.

// Usage example:
// typeText('myElement', 'Hello, world!', 100);

//menu.html
console.log("Working from Menu?");
const pizzaCardContainer = document.querySelector("#pizzaCardContainer");
console.log(pizzaCardContainer);

const pizzaCard = document.createElement("div");
pizzaCard.classList.add("pizzaCard");

const pizzaCardImg = document.createElement("img");
pizzaCardImg.classList.add("pizzaCardImg");

pizzaCard.appendChild(pizzaCardImg);
pizzaCardImg.src = "";
pizzaCardImg.alt = "Bildet av pizzaen";

const pizzaCardTitle = document.createElement("h3");
pizzaCardTitle.classList.add("pizzaCardTitle");
pizzaCardTitle.textContent = "Pizza navn";

pizzaCard.appendChild(pizzaCardImg);
pizzaCard.appendChild(pizzaCardTitle);
//legg til pizzaCardDescription til pizzaCard
//legg til pizzaCardPrize til pizzaCard

const pizzaCardDescription = document.createElement("p");
pizzaCardDescription.classList.add("pizzaCardDescription");
pizzaCardDescription.textContent = "Pizzabeskrivelse";
pizzaCard.appendChild(pizzaCardDescription);

const pizzaCardPrize = document.createElement("p");
pizzaCardPrize.classList.add("pizzaCardPrize");
pizzaCardPrize.textContent = "Pizzapris";

pizzaCard.appendChild(pizzaCardPrize);

pizzaCardContainer.appendChild(pizzaCard.cloneNode(true));
console.log(pizzaCardContainer);
pizzaCardContainer.appendChild(pizzaCard.cloneNode(true));
pizzaCardContainer.appendChild(pizzaCard.cloneNode(true));