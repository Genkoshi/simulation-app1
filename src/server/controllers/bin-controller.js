module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const{name, price} = req.body;

        db.create_bin([name, price])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
        
    },
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_bins()
        .then( (bins) => res.status(200).send(bins) )
        .catch( () => res.status(500).send() )
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;

        db.read_bin([params.id])
        .then( (bin) => res.status(200).send(bin) )
        .catch( () => res.status(500).send() )
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        const {name, price} = req.body;

        db.update_bin([params.id, name, price])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;

        db.delete_bin([params.id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() )
    }
}