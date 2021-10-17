const scriptName = "골라골라봇";
var arr = [];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if (msg.startsWith(".골라 ")) {
    arr = msg.substr(4).split(" ");
    replier.reply(arr[Math.floor(Math.random()*arr.length)]);
    
  }
  
}
