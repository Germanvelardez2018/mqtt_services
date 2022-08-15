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
  client.subscribe('test', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})




client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})




