// Broker gratuito
// https://www.hivemq.com/public-mqtt-broker/

const URL2	 =  "mqtt://lseserver.ddns.net"
const URL 	 = "mqtt://simointi.cloud.shiftr.io";
const ID 	 = "simo pub";
const USERNAME   = "simointi";
const PASS 	 = "fdZY5b69OhOVsAns";
const URL_HIVEMQ =  "mqtt://broker.hivemq.com"


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



const client  = mqtt.connect(URL_HIVEMQ)

console.log("Conectado a ",URL_HIVEMQ);
const list_topics = [
    'CMD',
    "X1111",
    'SIMO_INIT'
]



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

        case "X1111":
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;

        case 'SIMO_INIT':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;
    } 
})
