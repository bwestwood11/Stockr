import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import { connectToDatabase } from "@/utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    debug: true,
   callbacks: {
    async session({ session, user, token }) {
        console.log("session callback", session, user, token)
        const sessionUser = await User.findOne({ email: session.user.email });

        session.user.id = sessionUser._id;
        console.log("session user id", session.user.id)
        
        return session;
    },
    async signIn({ profile }) {
         console.log(profile)
         try {
            await connectToDatabase();
              // Check if user exists in database
        const userExists = await User.findOne({ email: profile.email });
        
        // if not, create a new user in the database
        if (!userExists) {
            const user = await User.create({
                email: profile.email,
                name: profile.name,
                image: profile.picture,
            });
       }     
     return true
    
         } catch (error) {
                console.log(error);
                return false;
         }
      
   },
//    async jwt({ token, user, profile, account, isNewUser }) {
//     console.log("jwt callback token", token)
//     console.log("jwt callback profile", profile)
//    },
}
});


export { handler as GET, handler as POST };

