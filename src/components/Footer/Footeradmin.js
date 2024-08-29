import logo from "../../assets/brand/brand-01.png";

export default function Footeradmin() {
  return (
    <footer className="bg-black text-white rounded-md dark:bg-dark dark:text-silver mt-12 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <img className="w-32" src={logo} />
          <div className="space-x-4">
            <a href="/" className="hover:underline">
              About Foodme
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </div>
        </div>
        <p className="mt-4">457856 Andijon street. Namangan, 369495 UZ</p>
        <p className="mt-2">+998 (94) 000-0000, (91) 000-2255</p>
      </div>
    </footer>
  );
}
