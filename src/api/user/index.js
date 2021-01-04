import { Router } from 'express'
import { index, create } from './controller'

const router = Router()

router.get('/', index)
router.post('/', create)

export default router
