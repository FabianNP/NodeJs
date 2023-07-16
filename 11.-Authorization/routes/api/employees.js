const express = require("express")
const router = express.Router()
const employeesController = require("../../controllers/employeesController")
// const verifyJWT = require("../../middleware/verifyJWT")

// Just example of another way to make the route 
router.route("/")
  // .get(verifyJWT, employeesController.getAllEmployees)
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updtaeEmployee)
  .delete(employeesController.deleteEmployee)

router.route("/:id")
  .get(employeesController.getEmployee)

module.exports = router