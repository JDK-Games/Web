function start() {
    var kezdoKep = document.getElementById('kezdokep');
    mutasd(kezdokep);
}

function mutasd(element) {
    document.getElementById('kiemelt-kep').style.backgroundImage = "url(" + element.src + ")";
    document.getElementById('kiemelt-nev').innerText = element.alt;
    switch (element.alt) {
        case "Witcher":
            document.getElementById('kiemelt-leiras').innerText =
                'The Witcher is a role-playing game set in a dark fantasy world where moral ambiguity reigns. Shattering the line between good and evil, the game emphasizes story and character development, while incorporating a tactically-deep, real-time combat system.';
            break;
        case "CyberPunk":
            document.getElementById('kiemelt-leiras').innerText =
                'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?';
            break;
        case "Yakuza0":
            document.getElementById('kiemelt-leiras').innerText =
                'Fight like hell through Tokyo and Osaka with protagonist Kazuma Kiryu and series regular Goro Majima. Play as Kazuma Kiryu and discover how he finds himself in a world of trouble when a simple debt collection goes wrong and his mark winds up murdered. Then, step into the silver-toed shoes of Goro Majima and explore his “normal” life as the proprietor of a cabaret club.';
            break;
        case "Rust":
            document.getElementById('kiemelt-leiras').innerText =
                'The only aim in Rust is to survive. Everything wants you to die - the islands wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.';
            break;
        case "League":
            document.getElementById('kiemelt-leiras').innerText =
                'League of Legends is a team-based strategy game where two teams of five powerful heroes try to destroy each others bases. With 140 heroes to choose from, you can launch spectacular actions, defeat opponents and destroy towers on your way to victory.';
            break;
        case "PUBG":
            document.getElementById('kiemelt-leiras').innerText =
                'Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.';
            break;
        default:
            document.getElementById('kiemelt-leiras').innerText = "";
    }
}
