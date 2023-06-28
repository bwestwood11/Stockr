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
   callbacks: {
    async session({ session }) {
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
                image: profile.picture
            });
       }     
     return true
    
         } catch (error) {
                console.log(error);
                return false;
         }
      
   },
}
});


export { handler as GET, handler as POST };

