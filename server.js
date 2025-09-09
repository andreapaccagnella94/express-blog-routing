/*
Esercizio
Creare  le rotte necessario per l'entità post all'interno di server.js e creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio: 

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…



Nota:

Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json
*/

const express = require('express')
const app = express()
const PORT = 3000

// recupero il array di post aggiungendo -> id
const foodPosts = [
    {
        id: 1,
        title: 'mattino',
        content: 'faccio la ricetta del ciambellone',
        img: 'imgs/ciambellone.jpeg',
        tags: ['ciambellone', 'breackfast', 'homemade']
    },
    {
        id: 2,
        title: 'pranzo',
        content: 'faccio la ricetta del cracker barbabietola',
        img: 'imgs/cracker_barbabietola.jpeg',
        tags: ['cracker', 'lunch', 'homemade', 'barbabietola']
    },
    {
        id: 3,
        title: 'merenda',
        content: 'faccio la ricetta del pane fritto dolce',
        img: 'imgs/pane_fritto_dolce.jpeg',
        tags: ['pane fritto', 'snack', 'homemade', 'fried']
    },
    {
        id: 4,
        title: 'cena',
        content: 'faccio la ricetta della pasta alla barbabietola',
        img: 'imgs/pasta_barbabietola.jpeg',
        tags: ['pasta', 'dinner', 'homemade', 'barbabietola']
    },
    {
        id: 5,
        title: 'spuntino',
        content: 'faccio la ricetta della torta paesana',
        img: 'imgs/torta_paesana.jpeg',
        tags: ['torta', 'snack', 'homemade', 'sweet']
    }
];

// procedure iniziali express 
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is runnig on http://localhost:${PORT}`)
})


// inizio il routing delle operazioni CRUD secondo le convezioni REST
// Post API server Routes
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// CRUD operazioni dei miei: post
// IMPORTANTE PER CONVEZIONE METTIAMO SEMPRE COME PERCOSO PRIMA API E DOPO IL NOME DELLA MIA DIRECTORY CHE STO SVILUPPANDO

// index (R)
app.get('/api/post', (req, res) => {
    // console.log(req);
    // res.send('Show a list of Posts');

    res.json(foodPosts);

})

// show (R)
app.get('/api/post/:id', (req, res) => {
    // res.send('Show the single post with ID: ' + req.params.id)

    // prendo dalla mia richiesta i dato dell'->id 
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    res.json("prova");
})

// store (C)
app.post('/api/post', (req, res) => {
    res.send('Create e new post')
})

// update (U)
app.put('/api/post/:id', (req, res) => {
    res.send('Update the entire single post with ID: ' + req.params.id)
})

// modify (U)
app.patch('/api/post/:id', (req, res) => {
    res.send('Partial update for the single post with ID: ' + req.params.id)
})

// destroy (D)
app.delete('/api/post/:id', (req, res) => {
    res.send('Delete the single post with ID: ' + req.params.id)
})