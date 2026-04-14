import HeroSection from "./components/HeroSection";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Simple (Optional) */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto border-b border-slate-50">
        <div className="text-2xl font-black text-amber-500 tracking-tight">
          Smart<span className="text-slate-900">Cents</span>
        </div>
      </nav>

      {/* Main Content */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* TODO:  add protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      <HeroSection />

      {/* Footer Simple */}
      <footer className="py-10 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Finance Tracker - Developed by Hayat
      </footer>
    </main>
  );
}

export default App;
