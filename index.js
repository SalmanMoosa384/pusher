// index.js

const express = require("express");
const bodyParser = require("body-parser");
const Pusher = require("pusher");
const PusherRead = require("pusher-js");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: "1181646",
  key: "6851417868d8441ebf82",
  secret: "f7d8ad3e0b8c67785a65",
  cluster: "mt1",
  useTLS: true,
});

app.post("/pusher/presence-auth/:id/:name", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  console.log("oooooo")
  const presenceData = {
    user_id: req.params.id,
    user_info: {
      name: req.params.name,
    },
  }
  const auth = pusher.authenticate(socketId, channel,presenceData);
  console.log(auth)
  res.send(auth);
});


app.post("/pusher/auth", (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  console.log(auth)
  res.send(auth);
});


app.get("/",(req,res)=>{

  res.status(200).send("working")
})

// app.post("/message/send", (req, res) => {
//   pusher.trigger(req, "App\\Events\\UserEvent", {
//     from_id: 1,
//     to_id: "46",
//     to_type: "App\\Models\\Conversation",
//     message: "test from trest",
//     status: 0,
//     message_type: 0,
//     file_name: null,
//     created_at: "2024-07-10 13:25:28",
//     updated_at: "2024-07-10 13:25:28",
//     reply_to: null,
//     url_details: null,
//     time_from_now_in_min: 0,
//     is_group: 0,
//     reply_message: null,
//     sender: {
//       id: 1,
//       name: "adam",
//       email: "admin@lathran.com",
//       email_verified_at: null,
//       phone: null,
//       last_seen: null,
//       is_online: 1,
//       is_active: 1,
//       about: null,
//       photo_url:
//         "https://ui-avatars.com/api/?name=Adam Joe&size=100&rounded=true&color=fff&background=fc6369",
//       activation_code: "66069e3dbe0f7",
//       created_at: "2024-03-29 10:55:57",
//       updated_at: "2024-07-10 13:11:27",
//       is_system: 0,
//       player_id: null,
//       is_subscribed: null,
//       privacy: 1,
//       gender: null,
//       deleted_at: null,
//       store_id: ",1,2,5,9",
//       tenat_id: 1,
//       is_external: 0,
//     },
//     type: 2,
//   });

//   res.send("message send");
// });




// const presenceChannel = pusherRead.subscribe('presence-presence-video-channel-1');

// presenceChannel.bind('pusher:subscription_succeeded', (members) => {
//   console.log('Successfully subscribed to the channel:', members);
// });

// presenceChannel.bind('pusher:member_added', (member) => {
//   console.log('Member added:', member);
// });

// presenceChannel.bind('pusher:member_removed', (member) => {
//   console.log('Member removed:', member);
// });

// // Bind to your custom events
// presenceChannel.bind('App\\Events\\StartVideoChat', (data) => {
//   console.log('Received event data:', data);
// });



// console.log("chat",chat)

// const as=chat.members;
// console.log("asss",as)
// chat.channel.listen("App\\Events\\StartVideoChat",(data)=>{
//   console.log("data",data)
// })
// const channel = pusherRead.subscribe("private-user.1");
// channel.bind("App\\Events\\UserEvent", (data) => {
//   console.log("data", data);
// });

// chat.bind("client-start-typing.3 ", (data) => {
//   console.log("data", data);
// });

app.listen(port,()=>{});

 




 
