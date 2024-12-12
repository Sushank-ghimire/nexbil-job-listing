import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Footer, Loader, Navbar, NotFound } from "../components/Export";
import MainLayout from "../Layouts/MainLayout";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
});

function RootComponent() {
  const [loading, setLoading] = useState(true);

  // Useeffect to show loader while starting the app
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <main className="min-h-screen relative text-darkPrimary overflow-hidden">
      <Navbar />
      <MainLayout>
        <Outlet />
        <Footer />
      </MainLayout>
    </main>
  );
}
