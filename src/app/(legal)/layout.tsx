import BackButton from "@/components/shared/BackButton";
import SocialLinks from "@/components/shared/SocialLinks";
import { ReactNode } from "react";

const LegalLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="border-b h-12 flex items-center justify-center">
        <nav className="max-w-2xl w-full px-4 md:px-0 mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <BackButton />
          </div>
          <div className="flex items-center">
            <SocialLinks />
          </div>
        </nav>
      </header>

      <main className="max-w-2xl w-full px-4 md:px-0 mx-auto">{children}</main>
    </div>
  );
};

export default LegalLayoutPage;
