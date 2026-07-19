import { ReactNode } from 'react';
import Link from 'next/link';

// Shared chrome for the public legal pages (/privacy, /terms).
// These are linked from the TikTok / Meta developer consoles, so they must render
// for logged-out visitors without any of the app's auth or provider context.

export const LegalSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-[22px] font-[600] mb-[12px]">{title}</h2>
    <div className="flex flex-col gap-[12px] text-[15px] leading-[1.7] text-textItemBlur">
      {children}
    </div>
  </section>
);

export const LegalList = ({ items }: { items: ReactNode[] }) => (
  <ul className="flex flex-col gap-[8px] ps-[20px] list-disc marker:text-textItemBlur">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export const LegalPage = ({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) => (
  <div className="w-full min-h-screen bg-newBgColor">
    <div className="max-w-[820px] mx-auto px-[20px] py-[60px] flex flex-col gap-[40px]">
      <header className="flex flex-col gap-[16px] pb-[32px] border-b border-newBorder">
        <Link href="/" className="text-[13px] text-textItemBlur hover:underline">
          Voholabs Studio
        </Link>
        {/*
          TikTok app review requires the page title to read "<app name> Privacy Policy"
          / "<app name> Terms of Service" — keep the app name in both the <h1> and the
          <title> metadata whenever this is edited.
        */}
        <h1 className="text-[34px] leading-[1.15] font-[600]">{title}</h1>
        <div className="text-[13px] text-textItemBlur">
          Last updated · {updated}
        </div>
        <p className="text-[15px] leading-[1.7] text-textItemBlur">{intro}</p>
      </header>

      <main className="flex flex-col gap-[36px]">{children}</main>

      <footer className="pt-[32px] border-t border-newBorder flex flex-wrap gap-x-[20px] gap-y-[8px] text-[13px] text-textItemBlur">
        <span>© Voholabs Ltd</span>
        <Link href="/privacy" className="hover:underline">
          Voholabs Studio Privacy Policy
        </Link>
        <Link href="/terms" className="hover:underline">
          Voholabs Studio Terms of Service
        </Link>
        <a href="mailto:hello@voholabs.com" className="hover:underline">
          hello@voholabs.com
        </a>
      </footer>
    </div>
  </div>
);
