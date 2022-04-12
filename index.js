const express = require("express");

const app = express();
const port = 3000;

const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get("/", (req, res) =>{
    res.render("index");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        nama: nama,
        email: email,
        password: password,
    });
    console.log(users);

    res.redirect("/tampilkan-user");
});

app.get("/tampilkan-user", (req, res) =>{
    res.render("users", {
        users,
    });
});

app.listen(port, () => {
    console.log(`Listening On http://localhost:${port}`);
})