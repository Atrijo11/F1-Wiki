import React from 'react';
import TeamName from './TeamName';

function TeamNames() {
  var teamnames = [
    { title: "Red Bull Racing", rw: "120", cc: "6", dc: "7", image: "https://pngimg.com/d/red_bull_PNG24.png", hoverGradient: "from-blue-800 to-zinc-900" },
    { title: "Mercedes AMG", rw: "128", cc: "8", dc: "9", image:"https://logos-world.net/wp-content/uploads/2020/05/Mercedes-Benz-Logo.png", hoverGradient: "from-teal-500 to-zinc-900" },
    { title: "Scuderia Ferrari", rw: "245", cc: "16", dc: "15", image:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Ferrari_Scuderia-Logo-PNG9.png", hoverGradient: "from-red-600 to-zinc-900" },
    { title: "McLaren", rw: "188", cc: "8", dc: "12", image:"https://cdn3.emoji.gg/emojis/9807_McLaren_Logo.png", hoverGradient: "from-orange-500 to-zinc-900" },
    { title: "Aston Martin", rw: "0", cc: "0", dc: "0", image:"https://companieslogo.com/img/orig/AML.L_BIG.D-c5e7566b.png?t=1720244490", hoverGradient: "from-green-700 to-zinc-900" },
    { title: "RB Honda RBPT", rw: "0", cc: "0", dc: "0", image:"https://www.planetf1.com/content/themes/planet2/img/png/teams/2024/team-rb.png?v=24092601", hoverGradient: "from-purple-700 to-zinc-900" },
    { title: "Haas", rw: "0", cc: "0", dc: "0", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_Haas_F1.png/679px-Logo_Haas_F1.png", hoverGradient: "from-gray-700 to-zinc-900" },
    { title: "Williams Racing", rw: "114", cc: "9", dc: "7", image:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Logo_Williams_F1.png", hoverGradient: "from-blue-500 to-zinc-900" },
    { title: "Alpine", rw: "1", cc: "0", dc: "0", image:"https://upload.wikimedia.org/wikipedia/commons/3/32/Alpine_logo.png", hoverGradient: "from-pink-600 to-zinc-900" },
    { title: "KicK Sauber", rw: "1", cc: "0", dc: "0", image:"https://cdn.sanity.io/images/tdrhge4k/production/4b649a329935a1370f21939e1042039c97bea0f7-1080x583.png", hoverGradient: "from-green-500 to-zinc-900" }
  ];

  return (
    <div>
      {teamnames.map((val, index) => (
        <TeamName key={index} val={val} />
      ))}
    </div>
  );
}

export default TeamNames;
