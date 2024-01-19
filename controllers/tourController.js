const fs = require('fs');
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
  );
  

const checkId = (req, res, next, val ) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
          status: 'fail',
          message: 'Invalid ID',
        });
      }
    next()
}

const checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price!',
          });
    }
    next();
}

// Router Controllers
const getAllTours = (req, res, next) => {
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours },
    });
  };
  
  const getTour = (req, res, next) => {
    const id = req.params.id;
  
    const tour = tours.find((item) => {
      if (item.id === parseInt(id)) {
        return item;
      }
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  };
  
  const createNewTour = (req, res, next) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: 'Error writing to file',
        });
      }
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    });
  };
  
  const updateTour = (req, res, next) => {
    const id = req.params.id;
  
    const tour = tours.find((item) => {
      if (item.id === parseInt(id)) {
        return item;
      }
    });
  
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  };
  
  const deleteTour = (req, res, next) => {

  
    res.status(204).json({
      status: 'success',
      data: null,
    });
  };
  

  module.exports = { getAllTours, getTour, createNewTour, updateTour, deleteTour, checkId, checkBody }