import firebase from 'firebase';

const uuid = '123-123-123-123-123-123';

export const mockMessages = [
  {
      incoming: true,
      message: 'Hi Vladimir'
  },
  {
      incoming: false,
      message: 'Hi, John'
  },
  {
      incoming: true,
      message: 'When we will learn real data fetching?'
  },
  {
      incoming: false,
      message: `Let's get the basic first. We need to understand styling and handling inputs right? After all you want not only to receive but send messages too right?`
  }
]


export const mockContacts = [{
  id: '12312-12312-123123',
  name: '+1512122423',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '4898456984756-234234',
  name: 'John Smith',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '34534542342-4234234',
  name: 'Katie Brown',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '34534542342-4234234',
  name: 'Jack Ingham',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '34534542342-4234234',
  name: 'Lu Chen',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '34534542342-4234234',
  name: 'Luke Skywalker',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},{
  id: '34534542342-4234234',
  name: 'Adam edmonds',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
},
{
  id: '34534542342-4234234',
  name: 'Malcolm McConachie',
  preview: `hey what's up`,
  avatarImageUri: 'https://i.imgur.com/IzVgDM9.png'
}]

export const initApi = () => firebase.initializeApp({
  apiKey: "AIzaSyDaFZTtN5c2rWEAwomk0sz3JhpchVxDNYQ",
  authDomain: "chatapp-ce598.firebaseapp.com",
  databaseURL: "https://chatapp-ce598.firebaseio.com",
  projectId: "chatapp-ce598",
  storageBucket: "chatapp-ce598.appspot.com",
  messagingSenderId: "681765993253"
})



export const getMessages = (updaterFn) => {
  firebase.database().ref('messages').on('value', updaterFn);
  return () => firebase.database().ref('messages').off();
}


export const postMessage = (message) => {
  if (Boolean(message)) {
    return firebase.database().ref('messages').push({
      message,
      incoming: true
    });
  }
}

export const getChats = () => (
  new Promise(resolve => setTimeout(() => resolve(mockContacts),
  1000
))
)

console.log(JSON.stringify(mockContacts))