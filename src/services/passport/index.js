import passport from "passport";
import bcrypt from 'bcryptjs'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../../api/user/model'

passport.use('password', new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  console.log({email, password})
  try {
    const user = await User.findOne({ where: { email } })
    if (!user) return done(null, false)

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return done(null, false)

    done(null, user)
  } catch (err) {
    done(err, false)
  }
}))

export const password = () => (req, res, next) =>
  passport.authenticate('password', {session: false}, (err, user, info) => {
    if (err && err.param) return res.status(400).json(err)
    else if (err || !user) return res.status(401).end()

    req.logIn(user, { session: false }, (err) => {
      if (err) return res.status(401).end()
      next()
    })
  })(req, res, next)
