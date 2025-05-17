
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AuthForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
