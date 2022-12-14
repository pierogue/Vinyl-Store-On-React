const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController.js')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware.js')

router.post('/', checkRoleMiddleware('ADMIN'), productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router