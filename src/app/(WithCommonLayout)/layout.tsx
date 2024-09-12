/* eslint-disable prettier/prettier */
import { Navbar } from "@/src/components/UI/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex flex-col h-screen mx-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
