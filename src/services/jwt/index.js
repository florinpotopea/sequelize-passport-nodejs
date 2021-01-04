import jwt from 'jsonwebtoken'
import Promise from 'bluebird'

const jwtSign = Promise.promisify(jwt.sign)

export const sign = (id, options, method = jwtSign) => method({id}, 'secretKey', options)
