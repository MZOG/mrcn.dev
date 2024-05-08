import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-5 py-5 max-w-7xl mx-auto flex justify-between items-center">
      <Link href={"/"} className="text-xl font-bold">
        marcin zogrodnik
      </Link>

      <Link href={"/kontakt"}>kontakt / zapytanie</Link>
      <p className="hidden">katowice</p>
      <a
        href="tel:739907919"
        className="hidden hover:underline underline-offset-2"
      >
        739 907 919
      </a>
      <a
        href="mailto:kontakt@marcinzogrodnik.pl"
        className="hidden hover:underline underline-offset-2"
      >
        kontakt@marcinzogrodnik.pl
      </a>
    </header>
  );
};
