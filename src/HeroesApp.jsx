import { AuthProvider } from "./modules";
import { AppRoutes } from "./routes/AppRoutes";


export const HeroesApp = () => {
  return (
    <AuthProvider >
      <AppRoutes/>
    </AuthProvider>
  )
}
