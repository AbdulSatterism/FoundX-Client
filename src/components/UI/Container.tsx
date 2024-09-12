/* eslint-disable prettier/prettier */
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
