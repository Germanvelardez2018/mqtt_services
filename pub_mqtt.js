console.log("init program");
// Credentials
const URL2 =  "mqtt://lseserver.ddns.net"
const URL = "mqtt://simointi.cloud.shiftr.io";
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



const client  = mqtt.connect(URL2)





client.on('connect', function () {
  console.log('Connected')
})


interval = 5 ;
max = 100;
counter = 0;
setInterval(()=>{

 // msg= ` ,${interval},${max}, `
  msg= ` ,${1},${max}, `
  //msg = "nada"

    client.publish("CMD", msg,{qos:0,retein:false})
    console.log(msg)
    max ++;

},2500);

















