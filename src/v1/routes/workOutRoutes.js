const express = require('express')
const workoutController = require('../../controllers/workOutController')

const router = express.Router()

router.get('/', workoutController.getAllWorkouts)

router.get('/:workOutId', workoutController.getOneWorkout)

router.post('/', workoutController.createNewWorkout)

router.patch('/:workOutId', workoutController.updateOneWorkout)

router.delete('/:workOutId', workoutController.deleteOneWorkout)

module.exports = router