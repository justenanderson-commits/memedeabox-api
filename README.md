# MemeBox API

To be used with the Memedeabox App.

## Set Up

Clone down this repo. (Do **NOT** nest it inside your Memedeabox repo!)

CD into this repo.

Run `npm install`.

Run `node server.js` to start the server.

## Endpoints

### GET all memes

URL: `http://localhost:3001/api/v1/memes`

Sample response (200):

```js
[
  { 
      title: "I have been waiting for this!",
      url: "https://i.redd.it/8jihe14tb19a1.jpg",
      id: 1
    },
    { 
      title: "And I'm saying this as a Gen Z kid",
      url: "https://i.redd.it/561lxn7pj29a1.gif",
      id: 2
    },
    { 
      title: "Can't beat me",
      url: "https://i.redd.it/afwvkxccg09a1.gif",
      id: 3
    },
    {
      title: "So true",
      url: "https://www.t5eiitm.org/wp-content/uploads/2020/02/meme-1.jpeg",
      id: 4
    }
  ]
```

### GET an meme by its id

URL: `http://localhost:3001/api/v1/memes/:id`

Sample URL: `http://localhost:3001/api/v1/memes/3`

Sample response (200):

```js
{id: 3, title: 'A game show called Ether/Or', description: 'When you lose you get chloroformed'}
```

Sample response (404):

```js
{message: 'No meme found with an id of 3'}
```

### POST a new meme

URL: `http://localhost:3001/api/v1/memes`

Sample request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    title: 'Title',
    description: 'Description'
  })
}
```

Sample response (201): This is the meme that was submitted in the POST request

```js
  { id: 98623913021, title: 'Title', description: 'Description' }
```

Sample BAD request:

```js
{
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 98623913021,
    title: 'Title'
  })
}
```

Sample BAD response (422):

```js
  { message: 'You are missing a required parameter of description' }
```

### DELETE an meme

URL: `http://localhost:3001/api/v1/memes/:id`

Sample URL: `http://localhost:3001/api/v1/memes/2`

Sample response (204): no content in the body, nothing to parse

Sample BAD response (404):

```js
{message: 'No meme found with an id of 2'}
```
