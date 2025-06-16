import { cookies } from 'next/headers'
import { verifyJwt } from './jwt/jwt'

export async function getUserFromCookie() {
  const token = (await cookies()).get('auth-token')?.value
  return token ? verifyJwt(token) : null
}
