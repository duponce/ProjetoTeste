# Supabase Setup Instructions

The application is now connected to your Supabase project!

## Security Warning ⚠️
Currently, the `/register` page allows **anyone** to create an account and become an admin. This is useful for the initial setup but dangerous for production.

### Recommended Steps:

1.  **Create your first Admin account**:
    -   Go to `/register` (or click the link on the login page).
    -   Create your account.

2.  **Disable Public Sign-ups**:
    -   In your Supabase Dashboard, go to **Authentication > Providers > Email**.
    -   Uncheck "Enable Confirm Email" (optional, for faster testing) or just keep it.
    -   **Crucial**: To prevent unauthorized admins, you should eventually remove the "Register" link from the Login page or protect the `/register` route so only existing admins can access it.

3.  **Protecting the Register Route**:
    -   Once you have your first admin, you can move the `/register` route inside the `<ProtectedRoute>` block in `App.tsx`.
    -   This way, only a logged-in admin can create new admins.

## Database Tables
This implementation uses Supabase Auth, which handles users automatically in the `auth.users` table. No extra SQL setup is required for basic login/logout.

If you want to store profile data (display name, avatar, etc.), you will need to create a `public.profiles` table and use Triggers.
