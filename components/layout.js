import Header from "./header";
import Footer from "./footer";
import classes from "../styles/Layout.module.css";

const Layout = ({children}) => (
    <div className={classes.wrapper}>
        <Header />
        {children}
        <Footer />
    </div>
);

export default Layout;