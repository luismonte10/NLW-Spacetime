import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface IUser {
  name: string
  avatarUrl: string
  sub: string
}

export function getUser(): IUser {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: IUser = decode(token)

  return user
}
