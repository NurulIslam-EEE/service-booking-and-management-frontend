import Navbar from "../../ui/Navbar/Navbar";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },

    { key: "2", label: "About Us", href: "/aboutUs" },
    { key: "3", label: "Contact Us", href: "/contact-us" },
    { key: "4", label: "Services", href: "/services" },
  ];
  return (
    <>
      <Navbar items={items} />
    </>
  );
};

export default PublicHeader;
