import { ReactElement } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen font-Montserrat">
      <Header />
      <main className="mb-auto px-2 md:px-5 lg:px-32 pt-4 pb-8 lg:pb-8 md:pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};
