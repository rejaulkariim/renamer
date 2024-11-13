import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "By using Renamer.me, you agree to our Privacy Policy. Please read carefully.",
};

const PrivacyPage = () => {
  return (
    <section className="max-w-2xl mx-auto py-10 md:py-20">
      <div className="flex justify-between items-center my-4">
        <p className="text-xs uppercase font-bold">Privacy Policy</p>
        <p className="text-xs font-bold">Updated: 2024-11-13</p>
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="font-bold">01. Information We Collect</h3>
        <p className="text-base font-normal text-muted-foreground">
          When you use Renamer.me, we collect certain information, such as your
          IP address, browser type, and other usage data to improve our service.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">02. How We Use Your Information</h3>
        <p className="text-base font-normal text-muted-foreground">
          We use the information collected to enhance your experience with our
          platform, troubleshoot issues, and improve Renamer.me’s functionality.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">03. Data Sharing</h3>
        <p className="text-base font-normal text-muted-foreground">
          We do not sell or share your personal information with third parties
          unless required by law or to provide services directly related to
          Renamer.me.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">04. Data Security</h3>
        <p className="text-base font-normal text-muted-foreground">
          We take appropriate measures to protect your information, but we
          cannot guarantee complete security. Use Renamer.me at your own risk.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">05. Cookies</h3>
        <p className="text-base font-normal text-muted-foreground">
          Renamer.me may use cookies to enhance your browsing experience. You
          can control cookie settings through your browser preferences.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">06. Changes to Privacy Policy</h3>
        <p className="text-base font-normal text-muted-foreground">
          We may update this Privacy Policy from time to time. Please review
          this page periodically for any changes.
        </p>
      </div>

      <div className="mt-6 space-y-2">
        <h3 className="font-bold">07. Contact Us</h3>
        <p className="text-base font-normal text-muted-foreground">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at renamerme@gmail.com.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPage;
