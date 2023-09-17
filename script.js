let status = document.getElementById("status");
let players = document.getElementById("players");
let version = document.getElementById("version");
const serverLogo = document.getElementById("img");
let title = document.getElementById("title");

function FetchData(){
    const ip = document.getElementById("IP").value;
    fetch(`https://api.mcsrvstat.us/3/${ip}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.online === true){
                status.innerText = "Status: Online"
            } else {
                status.innerText = "Status: Offline"
            }

            if (data.players.online){
                players.innerText = `Players Online: ${data.players.online}
                Max Players: ${data.players.max}`;
            }
            if (data.protocol.name){
                version.innerText = `Version: ${data.protocol.name}`;
            }
            if (data.icon){
                serverLogo.src = data.icon;
            }
            if (data.motd.clean[0]){
                title.innerText = data.motd.clean[0];
                title.innerHTML = data.motd.html[0];
            }
        })
}