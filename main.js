let teams = [
  {
    name:"Titans",
    img:"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Texans",
    img:"https://pbs.twimg.com/profile_images/664402312996200448/5W2Lusba_400x400.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Jaguars",
    img:"https://pbs.twimg.com/profile_images/664403706822197248/upeZoABV_400x400.png",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Colts",
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/bb/69/98/bb69980d-5056-db6a-8b2b-9288c6e68a5c/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chiefs",
    img:"https://pbs.twimg.com/profile_images/686564181294866432/rVDkZsSS_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chargers",
    img:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_yt3jycgvxti01.png",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Raiders",
    img:"https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/kxnsdxxdhtwtpxvlcewy",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Broncos",
    img:"https://pbs.twimg.com/profile_images/736779046785290240/xhsCcyA-_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Rams",
    img:"https://i.pinimg.com/originals/88/79/a4/8879a4f189033c8f6615d10b895b0046.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Cardinals",
    img:"https://pbs.twimg.com/profile_images/796560374254288896/mtgjLctY_400x400.jpg",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"49ers",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/23/logo.png",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Seahawks",
    img:"https://static.clubs.nfl.com/seahawks/zadj3ehrnxwhvl6swapk",
    conference:"NFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Panthers",
    img:"https://apprecs.org/ios/images/app-icons/256/3b/462021947.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Falcons",
    img:"https://b3h2.scene7.com/is/image/BedBathandBeyond/147165763339468p?$imagePLP$&wid=256&hei=256",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Saints",
    img:"https://d1si3tbndbzwz9.cloudfront.net/football/team/30/logo.png",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Buccaneers",
    img:"https://pbs.twimg.com/profile_images/678197372829106176/TsegQdsp_400x400.jpg",
    conference:"NFC",
    division:"South",
    madePlayoffsLastSeason:false,
  }
];


const printToDom = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}

const form = () => {
  let divform = `<div class="jumbotron">
  <h1 class="display-4">GAME TIME</h1>
  <p class="lead"><h2>Are you ready for some FOOTBALL?</h2></p>
  <p>The ROAD TO THE SUPER BOWL START HERE</p>
</div>`;
printToDom(divform,'form1');
};
form();

// const makeBtns = () => {
//   const afcBtn = document.createElement('button');
//   const nfcBtn = document.createElement('button');
//   const madePlays = document.createElement('button');
//   afcBtn.id = "afc";
//   nfcBtn.id = "nfc";
//   madePlays.id = "playoffs";
//   btnPicks.appendChild(afcBtn);
//   btnPicks.appendChild(nfcBtn);
//   btnPicks.appendChild(madePlays);
  
// }



const nflteams  = () => {
    let allTeams = "";
    teams.forEach((team) => {
    allTeams += `<div class="card" style="width: 18rem;">`;
    allTeams += `<img src="${team.img}" class="card-img-top">`;
    allTeams += `<div class="card-body">`;
    allTeams += `<h1 class="card-title text-center">${team.name}</h1>`;
    allTeams += `<p class="card-text text-center">${team.conference}</p>`;
    allTeams += `<p class="div text-center">${team.division} </p>`;
    allTeams += `</div>`;
    allTeams +=   `</div>`;
})
// makeBtns();
printToDom(allTeams,'football');
};
nflteams();


const sortTeams = (e) => {
  const btnClicked = e.target.id;
    if (btnClicked === "afc") {
    let afcString = "";
    // let afcBtnClicked = teams.filter(teams1 => teams1.conference === "AFC");
      for(let i =0;i<teams.length;i++)
      if (teams[i].conference === "AFC"){
      afcString += teamsFilterBuilder(teams[i]);{
$("#football").hide();
  }
};
printToDom(afcString,"afcTeams");
} else if (btnClicked === "nfc"){
  let nfcString = "";
  for(let i =0;i<teams.length;i++)
  if (teams[i].conference === "NFC"){
nfcString += teamsFilterBuilder(teams[i]);{
afcTeams.removeChild(afcTeams.firstChild);
}
  }
 printToDom(nfcString,"nfcTeams"); 
}
else {(btnClicked === "playoff");
  let playoffString ="";
  for(let i =0;i<teams.length;i++)
  if(teams[i].madePlayoffsLastSeason === true){
    playoffString += teamsFilterBuilder(teams[i]);{
      $("#nfcTeams").hide();
    }
  }
  printToDom(playoffString,"playoffTeams");
}
};

const btnEvents = () => {
  $("#afc").on('click', sortTeams);
  $("#nfc").on('click', sortTeams);
  $("#playoffs").on('click',sortTeams);
  };
  btnEvents();

  const teamsFilterBuilder = (team) =>{
    let teamString = "";
    teamString += `<div class="card" style="width: 18rem;">`;
    teamString+= `<img src="${team.img}" class="card-img-top">`;
    teamString+=`<div class="card-body">`;
    teamString+=`<h1 class="card-title text-center">${team.name}</h1>`;
    teamString+=`<p class="card-text text-center">${team.conference}</p>`;
    teamString+=`<p class="div text-center">${team.division} </p>`;
    teamString+=`</div>`;
    teamString+=`</div>`;
    return teamString;
};

const allTeams = () => {
  $("#playoffTeams").hide();
  $("#football").show();
};

const showAll = () => {
  $("#all").on('click',allTeams)
}
showAll();