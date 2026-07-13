import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI || "mongodb://localhost:27017/technova"
);

const db = client.db("technova");

export const auth = betterAuth({
  trustedOrigins: [
    "http://localhost:3000",
    "https://technova-pied-kappa.vercel.app", 
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});