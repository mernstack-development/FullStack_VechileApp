var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('autot.db');                  


db.serialize( () => {
    let sql = "CREATE TABLE auto (" +
        "rekisterinumero text NOT NULL, " +
        "hinta text NOT NULL, " +
        "merkki text NOT NULL, " +
        "malli text NOT NULL, " +
        "mittarilukema integer NOT NULL, " +
        "vuosimalli integer NOT NULL, " +
        "polttoainetyyppi text NOT NULL, " +
        "vetotapa text NOT NULL, " +
        "vaihteisto text NOT NULL, " +
        "teho integer NOT NULL, " +
        "katsastettu date NOT NULL, " +
        "kuva text NOT NULL )";
        
        db.run(sql, (err) => {
            if (err) {
            return console.log(err.message);
            }
            console.log("Taulun luonti onnistui");
        });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                    " VALUES ('OVO-161', '42 900', 'LAND ROVER', 'RANGE ROVER EVOQUE', '26000','2017','Diesel','Neliveto','Automaatti',150 ,'19.04.2018', 'OVO-161_LAND_ROVER.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('VAN-1894', '50 800', 'BMW', 'X5 F15 xDrive40e A', '89000','2016','Bensiini, Plug-in-hybridi','Neliveto','Automaatti',211 ,'19.04.2018', 'VAN-1894_BMW_X5.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('GNU-492', '184 900', 'PORSCHE ', 'PANAMERA Turbo S E-Hybrid', '19000 ','2018','Hybridi','Neliveto','Automaatti',680 ,'19.04.2018', 'GNU-492_PORSCHE.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });


        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('KON-0238', '56 800', 'VOLVO ', 'S90 T8 AWD Inscription', '19000 ','2018','Bensiini, Plug-in-hybridi','Neliveto','Automaatti',303  ,'25.05.2018', 'KON-02384_VOLVO.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                    " VALUES ('TAM-3742', '53 900', 'MERCEDES-BENZ ', 'E 350 e A Premium Business AMG', '23000  ','2017','Bensiini, Plug-in-hybridi','Takaveto','Automaatti',211 ,'25.05.2018', 'TAM-3742_MERCEDES-BENZ')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                "VALUES ('POR-7157', 52 500', 'VOLVO ', 'XC90 D5 AWD Inscription', '124000','2016','Diesel','Neliveto','Automaatti',224,'14.01.2018', 'POR-7157.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                "VALUES ('LAH-0247', '49 700', 'MERCEDES-BENZ ', 'GLC 350 e 4Matic A Premium Business ', '56000 ','2018','Bensiini, Plug-in-hybridi','Neliveto','Automaatti',303 ,'15.03.2029','LAH-0247.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });


        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('LEM-1357', '48 800', 'AUDI', 'Q5 Business Sport 2, 0 TDI', '84000 ','2018','Bensiini, Plug-in-hybridi','Neliveto','Automaatti',303,'30.05.2018', 'LEM-1357.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

                    
        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                    " VALUES ('FML-362', '49850 ', 'BMW ', '640', '116 000 ','2018','Diesel','Neliveto','Automaatti',194 ,'12.08.2018', 'FML-362.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('CJS-612', '92 890', 'FERRARI ', '360', '55000 ','2001','Bensiini','Neliveto','Automaatti',400,'23.12.2016', 'CJS-612.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('LA-04817', '339 800', 'Lamborghini ', 'Huracán', '9000 ','2016','Bensiini','Neliveto','Automaatti',579 ,'14.03.2014', 'LA-04817.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });


        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('CJS-555', '47 900 ', 'MASERATI', 'Ghibli', '105 000 ','2014','Diesel','Neliveto','Automaatti',275 ,'16.09.2018', 'CJS-555.PNG'))";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });


        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                "VALUES ('IJS-278', '28 900 ', 'AUDI ', 'A7 Sportback', '98000 ','2011','245 ','Neliveto','Automaatti',245,'30.10.2014', 'IJS-278.PNG') ";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });

        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                "VALUES ('HEI-900362', '52 900', 'AUDI', 'RS5', '141200 ','2013','Bensiini','Neliveto','Automaatti',450 ,'25.05.2018', 'HEI-900362.PNG')";
                db.run(sql, (err) => {
                        if (err) {
                        return console.log(err.message);
                        }
                        console.log("Uuden ajoneuvon lisäys onnistui");
                    });


        sql = "INSERT INTO auto (rekisterinumero, hinta, merkki, malli, mittarilukema, vuosimalli,polttoainetyyppi,vetotapa,vaihteisto,teho,katsastettu,kuva) "+
                " VALUES ('GLC-721', '49 800 ', 'Audi', 'RS5', '138000 ','2013','Bensiini','Neliveto','Automaatti',450 ,'25.05.2018', 'GLC-721.PNG')";
                db.run(sql, (err) => {
                    if (err) {
                        return console.log(err.message);
                    }
                    console.log("Uuden ajoneuvon lisäys onnistui");
                    });



        db.each("SELECT rekisterinumero, merkki,malli FROM auto", function(err, row) {
            if (err) {
            return console.log(err.message);
            }
            console.log(row.id + ", " + row.rekisterinumero + ", " + row.merkki + ", " + row.malli);
        });

        db.close(); 
    });