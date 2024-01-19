const express = require('express')
const router = express.Router();
const {getAllTours, createNewTour, getTour, updateTour, deleteTour, checkId, checkBody } = require('../controllers/tourController')


router.param('id', checkId)


router.route('/').get(getAllTours).post(checkBody, createNewTour);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);


  module.exports = router;