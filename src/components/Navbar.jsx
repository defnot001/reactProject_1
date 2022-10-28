import reactIcon from '../images/react-icon.png';

const Navbar = () => {
  return (
    <nav className="flex items-center bg-[#21222A] py-7 px-6 h-24">
      <img src={reactIcon} alt="React Icon" className="h-9 mr-2" />
      <h3 className="mr-auto text-[#61DAFB] font-bold text-2xl">ReactFacts</h3>
      <h4 className="font-medium text-gray-100 text-xl">
        React Course - Project 1
      </h4>
    </nav>
  );
};

export default Navbar;
