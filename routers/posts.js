// importo express 
const express = require('express');
// istanza router
const router = express.Router();

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

// CRUD operazioni dei miei: post
// IMPORTANTE PER CONVEZIONE METTIAMO SEMPRE COME PERCOSO PRIMA API E DOPO IL NOME DELLA MIA DIRECTORY CHE STO SVILUPPANDO

// index (R)
router.get('/', (req, res) => {
    // console.log(req);
    // res.send('Show a list of Posts');

    res.json(foodPosts);

})

// show (R)
router.get('/:id', (req, res) => {
    // res.send('Show the single post with ID: ' + req.params.id)

    // prendo dalla mia richiesta i dato dell'->id 
    const { id } = req.params
    console.log(id);
    // trovo il post con il mio id corrispondente
    const post = foodPosts.find(item => item.id === parseInt(id));
    console.log(post);
    // condizione nel caso in cui non si trovi nulla undefined
    if (!post) {
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
        })
    }
    res.json(post);
})

// store (C)
router.post('/', (req, res) => {
    res.send('Create e new post')
})

// update (U)
router.put('/:id', (req, res) => {
    res.send('Update the entire single post with ID: ' + req.params.id)
})

// modify (U)
router.patch('/:id', (req, res) => {
    res.send('Partial update for the single post with ID: ' + req.params.id)
})

// destroy (D)
router.delete('/:id', (req, res) => {
    res.send('Delete the single post with ID: ' + req.params.id)
})


// export
module.exports = router;