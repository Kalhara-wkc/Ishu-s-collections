export default function TopBar() {
  return (
    <div className="w-full bg-[#4A0E4E] text-[#E5D3B3] text-[10px] md:text-xs py-2.5 px-4 flex justify-between items-center font-light tracking-widest uppercase z-50 relative">
      <div className="hidden md:flex gap-6 opacity-80">
        <span className="hover:text-white cursor-pointer transition-colors">USD $</span>
        <span className="hover:text-white cursor-pointer transition-colors">EN</span>
      </div>
      <div className="w-full md:w-auto text-center flex-1 opacity-90">
        Complimentary Global Shipping on Orders Over $500
      </div>
      <div className="hidden md:flex gap-6 opacity-80">
        <span className="hover:text-white cursor-pointer transition-colors">Store Locator</span>
        <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
      </div>
    </div>
  );
}
