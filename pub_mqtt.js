console.log("init program");
// Credentials
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
//const client  = mqtt.connect(URL_HIVEMQ);
console.log("Conectado a ",URL_HIVEMQ);






client.on('connect', function () {
  console.log('Connected')
})




interval = 1 ;
max = 10;
counter = 0;
setInterval(()=>{

 // msg= ` ,${interval},${max}, `
  msg= `${2}`
  //msg = "nada"

    client.publish("CMD", msg,{qos:0,retein:false})
    console.log(msg)
    max ++;

},4000);
















