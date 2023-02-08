var express = require('express');
var router = express.Router();
const Place = require('../models/places')

    router.post('/places', (req,res)=>{
        console.log('reqqqq',req.body);
        if ((!req.body.nickname)||(!req.body.name)||(!req.body.latitude)||(!req.body.longitude)) {
            res.json({ result: false, error: 'il faut tout remplir' });
            return;
          }

          Place.findOne({nickname: req.body.nickname, name:req.body.name})
          .then(data=>{
            if(!data){
                const newPlace = new Place({
                    nickname: req.body.nickname,
                    name:req.body.name,
                    latitude:req.body.latitude,
                    longitude:req.body.longitude,
                })
                newPlace.save().then(newPlace=>{
                    res.json({true:'the place is add'})
                })
            }else{
                res.json({err:'place existe déjà'})
            }
          })

    })

    router.get('/places/:nickname',(req,res)=>{

        Place.find({nickname: req.params.nickname})
        .then(data=>{
            if(data){
                res.json({result: true, places: data})
            }
        })
        
    })
    router.delete('/places',(req, res)=>{
        Place.deleteOne({nickname: req.body.nickname, name: req.body.name}).then(()=>{
            Place.find().then(data=>{
                res.json({true:'is delete'})
            })
        })
    })

module.exports = router;
