const app = require("./app")
const PORT = 4000

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`);
})