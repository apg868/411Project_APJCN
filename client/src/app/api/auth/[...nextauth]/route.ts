import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";
import type { Adapter } from "next-auth/adapters";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database successfully:', res.rows[0]);
    }
});

const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS verification_token (
        identifier TEXT NOT NULL,
        expires TIMESTAMPTZ NOT NULL,
        token TEXT NOT NULL,
        PRIMARY KEY (identifier, token)
    );

    CREATE TABLE IF NOT EXISTS accounts (
        id SERIAL,
        "userId" INTEGER NOT NULL,
        type VARCHAR(255) NOT NULL,
        provider VARCHAR(255) NOT NULL,
        "providerAccountId" VARCHAR(255) NOT NULL,
        refresh_token TEXT,
        access_token TEXT,
        expires_at BIGINT,
        id_token TEXT,
        scope TEXT,
        session_state TEXT,
        token_type TEXT,
        PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS sessions (
        id SERIAL,
        "userId" INTEGER NOT NULL,
        expires TIMESTAMPTZ NOT NULL,
        "sessionToken" VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS users (
        id SERIAL,
        name VARCHAR(255),
        email VARCHAR(255),
        "emailVerified" TIMESTAMPTZ,
        image TEXT,
        PRIMARY KEY (id)
    );
`;
pool.query(createTablesQuery)
    .then(() => {
        console.log('Tables created successfully');
        // Proceed with other application logic
    })
    .catch(error => {
        console.error('Error creating tables:', error);
    });


const adapter = PostgresAdapter(pool);


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
    ],
    adapter: PostgresAdapter(pool) as Adapter,
    events : {
        async signIn(message: Message) {
            // Event handler logic goes here
            const { user } = message;
            console.log("User signed in:", user);

            // Check if the adapter and getUserByEmail function are defined
            if (adapter && adapter.getUserByEmail) {
                // Get the user by email from the database
                const existingUser = await adapter.getUserByEmail(user.email);

                // If the user doesn't exist, create a new user in the database
                if (!existingUser) {
                    try {
                        await adapter.createUser({
                            name: user.name,
                            email: user.email,
                            id: user.id,
                            emailVerified: null
                        });
                        console.log("User created successfully:", user);
                    } catch (error) {
                        console.error("Error creating user:", error);
                    }
                }
            }
        }
    },
});


export { handler as GET, handler as POST };