import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navbar, NotFound } from "../components/Export";
import MainLayout from "../Layouts/MainLayout";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <main className="min-h-screen relative text-darkPrimary overflow-hidden">
      <Navbar />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </main>
  );
}
