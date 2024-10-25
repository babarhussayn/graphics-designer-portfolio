import ContactPage from "./pages/contact/page";
import HomePage from "./pages/home/page";
import PortPage from "./pages/port2/page";
import Portfolio from "./pages/portfolio/page";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      <PortPage />
      <Portfolio />
      <ContactPage />
    </div>
  );
}
