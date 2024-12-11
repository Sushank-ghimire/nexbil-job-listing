
interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="md:container w-[90vw] mx-auto mt-1 md:p-6 p-4">
      {children}
    </div>
  );
};

export default MainLayout;
