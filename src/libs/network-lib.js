
//////////////////////////
//
// class : Network
// version : 2021-9-8 18:00
//
class Network {
    constructor() {
      console.clear();
  
      this.players = {};
  
      if (!localStorage.pioupiouName) this.name = Network.defaultUser;
      else {
        this.name = localStorage.pioupiouName;
      }
  
      //this.name = "Piou-" + (Math.random() * 100).toFixed(0);
      console.log("> my name is ", this.name);
  
      document.title = this.name;
  
      if (GLITCH)
        var socket = io.connect("https://pioupiou.glitch.me"); // Glitch hosted server
      else
        var socket = io.connect("ws://localhost:3000"); // Local hosted server
  
      Network.socket = socket;
  
      socket.emit("initialize", { name: this.name });
  
      var self = this;
  
      socket.onAny((event, data) => {
        //socket.broadcast.emit(event,data);
        //console.log('# onAny received at ' + Date());
        //console.log(' > event : ' + event);
        //console.log(' > data : ', + data);
      });
  
      socket.on("playerData", data => {
        self.onPlayerData(data);
      });
      socket.on("playerJoined", data => {
        self.onPlayerJoined(data);
      });
      socket.on("message", data => {
        self.onMessage(data);
      });
      socket.on("killPlayer", id => {
        self.onKillPlayer(id);
      });
    }
  
    onPlayerData(data) {
      this.players = data.players; // all players data
      Network.id = data.id; // unique id given by the server
  
      //jbjbconsole.log('> my unique ID is ' + Network.id);
      /*let newId = "id" + rnd(1, 10000).toString();
      addBox(newId);
      //setText(newId, "this is a new text in " + newId + " box !<br>");
      setText(newId, "toi : " + this.name + "<br>");
      setTitle(newId, "qui est en ligne ?");
  
      for (var id in this.players) {
        if (id != Network.id) {
          console.log("> ", this.players[id].name, " (id:", id, ") is present");
          appendText(newId, this.players[id].name + "<br>");
        }
      }*/
  
      this.initialized = true;
      console.log("> server connection established !");
    }
  
    onPlayerJoined(data) {
      this.players[data.id] = data;
      // console.log('> ',data.name,' (id:',data.id,') joined');
    }
  
    onPlayerMoved(data) {
      if (this.initialized) {
        console.log(
          "> ",
          data.name,
          " (id:",
          data.id,
          ") moved to x=",
          data.pos.x
        );
      }
    }
  
    onMessage(data) {
      if (this.initialized) {
        console.log(data.name, data.message);
        document.title = data.message;
        self = this;
        setTimeout(function() {
          document.title = self.name;
        }, 1000);
        // if (localStorage.pioupiouName!='message') return
        // tempo : display received message only if in Message Space
        let newId = "id" + rnd(1, 10000).toString();
        addBox(newId);
        setText(newId, data.message);
        setTitle(newId, data.name);
      }
    }
  
    onKillPlayer(id) {
      //console.log('> ',this.players[id].name,' (id:',id,') left the game');
      delete this.players[id];
    }
  
    sendMessage(msg) {
      if (this.initialized) {
        // console.log("> I send : <",msg,">");
        let data = {
          id: Network.id,
          name: this.name,
          message: msg
        };
        Network.socket.emit("message", data);
      }
    }
  
    save(code) {
      if (this.initialized) {
        // console.log("> I send : <",msg,">");
        let data = {
          id: Network.id,
          name: this.name,
          code: code
        };
        Network.socket.emit("save", data);
      }
    }
  
    setDirectory(msg) {
      if (this.initialized) {
        // console.log("> I send : <",msg,">");
        let data = {
          id: Network.id,
          name: this.name,
          message: msg
        };
        Network.socket.emit("directory", data);
      }
    }
  
    send(event, data) {
      if (this.initialized) {
        Network.socket.emit(event, data);
      }
    }
  }
  
  Network.id = null;
  Network.socket = null;
  Network.defaultUser = 'Louis';

  export default Network;
  // Network class
  ////////////////////////////////////////////////////////////////////