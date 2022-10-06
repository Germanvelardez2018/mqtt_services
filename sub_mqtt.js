


// Credentials
const URL = "mqtt://simointi.cloud.shiftr.io";
const URL2 =  "mqtt://lseserver.ddns.net"

const ID  = "simointi";
const USERNAME = "simointi";
const PASS = "fdZY5b69OhOVsAns";


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


const list_topics = [
    'CMD',
    'SIMO_CONFIG2',
    'X1111'
]
console.log("iniciando sub mqtt")

const client  = mqtt.connect(URL2,{qos:2})

client.on('connect', function () {
    console.log('Connected to the list');

    for(let i=0 ; i< list_topics.length ; i++){

        client.subscribe(list_topics[i], function (err) {
            if (!err) {
              console.log('subs in ',list_topics[i]);
            }
          }) ;

    }

});





client.on('message', function (topic, message) {
    switch(topic){
        case 'CMD':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;

        case 'SIMO_CONFIG2':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;

        case 'X1111':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;
    } 
})