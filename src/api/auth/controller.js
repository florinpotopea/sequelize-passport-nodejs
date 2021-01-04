import { sign } from '../../services/jwt'

export const login = async ({ user }, res, next) => {
  try {
    const token = await sign(user.id)

    return res.status(200).json({ token, user })
  } catch (err) {
    next(err)
  }
}
