
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const res = await fetch(`http://localhost:8000/account?email=${credentials?.email}&password=${credentials?.password}`)
        const users = await res.json()

        if (users.length > 0) {
          return users[0] // Đăng nhập thành công
        }
        return null // Đăng nhập thất bại
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/assignment8'
  },
  secret: "secret"
})
