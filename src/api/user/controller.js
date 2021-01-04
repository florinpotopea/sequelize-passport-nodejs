import User from './model'
import { encrypt } from './utils'

export const index = async (req, res, next) => {
  try {
    const users = await User.findAll()

    return res.status(200).json({ status: true, result: users })
  } catch (err) {
    next(err)
  }
}

export const create = async (req, res, next) => {
  try {
    const {email, name, password, role} = req.body
    const pass = await encrypt(password)

    const user = await User.create({ email, name, password: pass, role })
    if (!user) return res.status(422).json({ status: false, message: 'SOMETHING_WENT_WRONG' })

    return res.status(201).json({ status: true, result: user })
  } catch (err) {
    next(err)
  }
}
