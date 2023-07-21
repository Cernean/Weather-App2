const express = require('express');

let router = express.Router();


router.get('/:locationName', (req, res) => {
    const locationName = req.params.locationName;
    console.log(locationName);
    
    const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/locations/search/?query=" + locationName;
    console.log(url);
    let woeid; 

    fetch(url)
      .then(response => { return response.json(); })
        .then(data => { 
          console.log(data);           
          fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/locations/')
            .then(r => {
              return r.json();
            })
              .then(d => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(d);
            })
              .catch(err => {
                  console.log(err); 
              });          
        })
          .catch(err => { console.log(err); });        
});

module.exports = router;