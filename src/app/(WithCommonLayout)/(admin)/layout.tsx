import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>admin layout</h1>
      {children}
    </>
  );
};

export default AdminLayout;
