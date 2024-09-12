import { ReactNode } from "react";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1>user layout</h1>
      {children}
    </>
  );
};

export default UserLayout;
