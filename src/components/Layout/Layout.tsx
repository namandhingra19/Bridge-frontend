import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="ml-16 md:ml-64 pt-20">{props.children}</div>
    </div>
  );
}
