//      <div class="col-4">
//                     <div class="bg-white text-start p-0 rounded-2">
//                         <img class="card-img-top rounded-top-2" src="img/wayne-barnett-founder-ceo.jpg" alt="Title">
//                         <div class="card-body text-center py-4">
//                             <h4 class="card-title">Wayne Barnett</h4>
//                             <p class="card-text">
//                                 Founder & CEO
//                             </p>
//                         </div>
//                     </div>
//        </div>

"use strict";

myOurTeam();

function myOurTeam() {
  const teamInfos = [
    {
      name: "Wayne Barnett",
      position: "Founder & CEO",
      img: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Carrol",
      position: "Chief Editor",
      img: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      position: "Office Manager",
      img: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      position: "Social Media Manager",
      img: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      position: "Developer",
      img: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      position: "Graphic Designer",
      img: "barbara-ramos-graphic-designer.jpg",
    },
  ];

  for (let i = 0; i < teamInfos.length; i++) {
    console.log(teamInfos[i].name);
    console.log(teamInfos[i].position);
    console.log(teamInfos[i].img);
    myPrinter(teamInfos[i]);
  }
}

function myPrinter(element) {
  const rowDom = document.getElementById("cards-space");
  const col = document.createElement("div");
  col.classList.add("col-4");
  const card = `
      <div class="bg-white text-start p-0 rounded-2">
          <img class="card-img-top rounded-top-2" src="img/${element.img}" alt="${element.name}">
              <div class="card-body text-center py-4">
                  <h4 class="card-title">${element.name}</h4>
                  <p class="card-text">
                  ${element.position}
                  </p>
              </div>
      </div>
      `;
  col.innerHTML = card;
  rowDom.append(col);
}
