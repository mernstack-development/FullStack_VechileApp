const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet())

app.use(express.json());
express.urlencoded({limit: '5mb', extended: true});

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('autot.db');

app.listen(8080, () => {
    console.log('Node toimii palvelimella localhost:8080');
});

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Palvelin toimii hinosti' })
});

app.get('/auto/all', (req, res, next) => {
	db.all('select * from auto', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})

app.get('/auto/yksi/:id', (req, res, next) => {
	let id = req.params.id;

    db.get('select * from auto where id = ?', [id], (error, result) => {
		if (error) throw error;

		// Oliko vastaus tyhjä
		if (typeof(result) == 'undefined') {
			return res.status(200).json({});
		}

		return res.status(200).json(result);
	});
})

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './images')
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/auto/add',  upload.single('kuva'), (req, res, next) => {
	let auto = req.body;

  let kuva = null;
  if (req.file) {
    kuva = req.file.originalname;
  }
  db.run('insert into auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
	      [auto.rekisterinumero, auto.hinta, auto.merkki, auto.malli, auto.mittarilukema,auto.vuosimalli,auto.polttoainetyyppi,auto.vetotapa,auto.vaihteisto,auto.teho,auto.katsastettu, kuva], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	});
})

app.get('/download/:nimi', (req, res, next) => {
    var file = './images/' + req.params.nimi;
    res.download(file);
});

app.get('/auto/delete/:id', (req, res, next) => {
	let id = req.params.id;

  db.run('delete from auto where id = ?', [id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})
