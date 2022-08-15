


// Credentials
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


const list_topics = [
    'turn_on',
    'turn_off',
    'function_1'
]


const client  = mqtt.connect(URL, options)

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
        case 'turn_on':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;

        case 'turn_off':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;

        case 'function_1':
            console.log(`llego mensaje en topic ${topic}: ${message.toString()}`);
        break;
    } 
})