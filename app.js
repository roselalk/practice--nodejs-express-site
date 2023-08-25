const express = require("express")
const app = express()
const port = 3000

app.get("/", (request, result) => {
    result.send("Hello World! I love cheese.")
})
app.get("/about", (request, result) => {
    result.send("This is the about page")
})
app.get("/contact", (request, result) => {
    result.send("Contact page")
})

app.use((request, result, next) => {
    result.status(404).send("Oops! Something went wrong")
})

app.listen(port, () => {
    console.log(`Exercise app listening on port ${port}`);
})