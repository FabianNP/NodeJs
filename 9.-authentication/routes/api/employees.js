const express = require("express")
const router = express.Router()
const employeesController = require("../../controllers/employeesController")

// Just example of another way to make the route 
router.route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updtaeEmployee)
  .delete(employeesController.deleteEmployee)

router.route("/:id")
  .get(employeesController.getEmployee)

module.exports = router