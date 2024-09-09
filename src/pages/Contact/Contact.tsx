
import ContactForm from "../../forms/Contact/ContactForm";
import { useApp } from "../../hooks/useApp";
import "./Contact.css";

const Contact = () => {
  const { setShowMobileMenu, isLoggedIn } = useApp();
  return (
   <ContactForm />
  );
};
export default Contact;
