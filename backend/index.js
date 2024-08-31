const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/krish",(req, res)=>{
    res.send("hello krishna");
})

app.get("/api/jokes",(req, res)=>{
  const jokes = [{
    id: 1,
    title: "Why did the chicken cross the road?",
    punchline: "To get "
  },
{
    id: 2,
    title: "Why did theroad?",
    punchline: "To get to the other side!"
},
{
    id: 3,
    title: "Why did the chicken cross the road?",
    punchline: "To get to the other side!"
}]
 res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})