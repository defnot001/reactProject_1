import reactIconLarge from '../images/react-icon-large.png';

const Main = () => {
  return (
    <main className="bg-[#282D35] bg-reactLogo bg-no-repeat bg-30% bg-half-up text-gray-100 min-h-screen py-14 px-7 bg-">
      <h1 className=" text-5xl font-bold tracking-tighter">
        Fun Facts about React
      </h1>
      <ul className="font-light mt-11 ml-8 list-disc marker:text-[#61DAFB] marker:text-2xl [&>li]:py-1 [&>li]:max-w-sm ">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
