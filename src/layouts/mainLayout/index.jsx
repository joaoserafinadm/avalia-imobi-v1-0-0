import Head from "next/head";
//import styles from '../styles/Home.module.css'
import Logo from "./components/Logo";
import Header from "./Header";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="app layout">
      <div className="pages" id="pages">
        {children}
      </div>

      <Navbar />
      <Header />
    </div>
  );
}
