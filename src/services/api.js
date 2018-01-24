
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


export const getMessages = () => (
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)

export const postMessage = (message) => mockMessages.push({
  incoming: false,
  message
});

export const getChats = () => (
  new Promise(resolve => setTimeout(() => resolve(mockContacts),
  1000
))
)