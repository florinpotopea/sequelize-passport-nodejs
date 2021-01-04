import { Router } from 'express'
import router from './user'
import user from './user'
import auth from './auth'

router.use('/users', user)
router.use('/auth', auth)

export default router
