const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.locals.title = 'MemedeaBox API';
app.locals.memes = [
    { 
      title: "I have been waiting for this!",
      url: "https://i.redd.it/8jihe14tb19a1.jpg",
      id: 1
    },
    { 
      title: "Is it because they're pirates??",
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
  ];

app.set('port', 3001);

app.get('/api/v1/memes', (request, response) => {
  response.status(200).json(app.locals.memes);
});

app.get('/api/v1/memes/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.memes.find(meme => meme.id == id);

  if (!match) return response.status(404).json({message: `No meme found with an id of ${id}`});

  return response.status(200).json(match);
});

app.post('/api/v1/memes', (request, response) => {
  const newMeme = request.body;

  for (let requiredParameter of ['id', 'title', 'description']) {
    if (!newMeme[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
  }

  app.locals.memes = [...app.locals.memes, newMeme];

  return response.status(201).json(newMeme);
});

app.delete('/api/v1/memes/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.memes.find(meme => meme.id == id);

  if (!match) return response.status(404).json({message: `No meme found with an id of ${id}`});

  const filteredMemes = app.locals.memes.filter(meme => meme.id != id);

  app.locals.memes = filteredMemes;

  return response.sendStatus(204);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`);
});
