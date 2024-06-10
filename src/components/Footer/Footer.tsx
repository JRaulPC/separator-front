import Contact from "./Contact";

const Footer = (): React.ReactElement => {
  return (
    <footer className="h-fit w-full text-black absolute bottom-1 font-geologica font-normal ">
      <ul className="flex justify-between ">
        <Contact />
      </ul>
    </footer>
  );
};

export default Footer;
