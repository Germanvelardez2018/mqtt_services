console.log("init program");

const URL = "mqtt://pi-ariascabana:AriasCabana@pi-ariascabana.cloud.shiftr.io";
const ID  = "German";
const USERNAME = "pi-ariascabana";
const PASS = "AriasCabana";


const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: ID,
  username: USERNAME,
  password: PASS,
}

const client  = mqtt.connect(URL, options)





client.on('connect', function () {
  console.log('Connected')
})








  
  
  
  
  




  

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
   // readline.close();
  });

  

  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });
  
let message;
let topic;

while(0){

    
    readline.question('insertar topic', _topic => {
    console.log(`topic ${_topic}!`);
  //  topic = _topic;
    readline.close();
    });
    readline.question('insertar message', msg => {
    console.log(`msg ${message}!`);
   // message = msg;
    readline.close();
    });
   // client.publish(topic, message)

   


}




















