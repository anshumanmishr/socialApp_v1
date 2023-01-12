const express = require('express');
const app = express()
const port = process.env.port || 4000;
var format = require('date-format');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>')
  })

  app.get("/api/v1/:token", (req, res) =>{
    console.log(req.params.token);
    res.status(200).json({param: req.params.token});
  });
  
  app.get("/api/v1/instagram/", (req,res) => {
    const instaSocial = {
        username: "anshumanmishra_",
        followers: 265,
        following: 170,
        date: format.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())
        
    };
    res.status(200).json(instaSocial)
  }
  )
  app.get("/api/v1/facebook/", (req,res) => {
    const instaSocial = {
        username: "anshumanmishralive",
        followers: 100,
        following: 500,
        date: format.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())
        
    };
    res.status(200).json(instaSocial)
  }
  )
  app.get("/api/v1/linkedin/", (req,res) => {
    const instaSocial = {
        username: "anshumanmisha-me",
        followers: 100,
        following: 310,
        date: format.asString('dd-MM-yyyy hh:mm:ss.SSS', new Date())

    };
    res.status(200).json(instaSocial)
  }
  )
  
  app.listen(port, () => {
    console.log(`Server is running at ${port}`)
  })
