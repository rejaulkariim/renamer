import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "By using Renamer.me, you agree to follow these Terms of Service. Please read carefully.",
};

const TermsPage = () => {
  return (
    <section className="max-w-2xl mx-auto py-10 md:py-20">
      <div className="flex justify-between items-center my-4">
        <p className="text-xs uppercase font-bold">Terms of Service</p>
        <p className="text-xs font-bold">Updated: 2024-11-13</p>
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="font-bold">01. Acceptance</h3>
        <p className="text-base font-normal text-muted-foreground">
          By using Renamer.me, you confirm that you have read, understood, and
          agree to these Terms of Service.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">02. Open-Source Usage</h3>
        <p className="text-base font-normal text-muted-foreground">
          Renamer.me is open-source software, meaning you can freely use,
          modify, and distribute it according to its open-source license.
          Redistribution or commercial resale is prohibited without prior
          permission.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">03. Intellectual Property</h3>
        <p className="text-base font-normal text-muted-foreground">
          All content and code on Renamer.me are protected by intellectual
          property laws. You can modify the software for personal or commercial
          use, but you cannot claim ownership of Renamer.me or its components.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">03. Governing Law</h3>
        <p className="text-base font-normal text-muted-foreground">
          These terms are governed by the laws where Renamer.me operates. Any
          disputes will be handled in our local courts.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">04. Changes to Terms</h3>
        <p className="text-base font-normal text-muted-foreground">
          We may update these terms occasionally. It’s a good idea to check back
          here from time to time.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">05. Contact</h3>
        <p className="text-base font-normal text-muted-foreground">
          If you have questions, please reach out to us at renamerme@gmail.com
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
