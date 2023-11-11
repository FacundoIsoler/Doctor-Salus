const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");


app.use(express.json());
app.use(cors());

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
    access_token: "TEST-5567319797816690-111018-7532c46a06e2bc61515309351f563b30-216110596",
}); // instalar version de mercadopago 1.5.17

app.get("/", function (req, res) {
    res.send("el servidor de mercado pago funciona! :)");
});

app.post("/create_preference", (req, res) => {

    let preference = {
        items: [
            {
                title: req.body.description,
                unit_price: Number(req.body.price),
                quantity: Number(req.body.quantity),
            }
        ],
        back_urls: {
            "success": "http://localhost:3000", //coloca el dominio que quieras
            "failure": "http://localhost:3000",
            "pending": ""
        },
        auto_return: "approved",
    };
    mercadopago.preferences.create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
})
