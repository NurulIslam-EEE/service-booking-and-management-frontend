import Navbar from "../../ui/Navbar/Navbar";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },

    { key: "4", label: "About Us", href: "/aboutUs" },
    { key: "5", label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <>
      <Navbar items={items} />
    </>
  );
};

export default PublicHeader;
