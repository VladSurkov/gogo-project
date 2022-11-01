import { Link } from "@mui/material";
import classes from "../styles/Header.module.css";

const navigation = [
    { id: 1, title: 'Home', path: '/'},
    { id: 2, title: 'Posts', path: '/posts'},
    { id: 3, title: 'Contacts', path: '/contacts'},
];

if (typeof window !== 'undefined') {
    const burger = document.getElementById('burger')
    const menu = document.getElementById('menu')
    const mobileMenu = document.getElementById('mobile-menu');
    const background = document.getElementById('background');
    burger.addEventListener('click', () => {
        mobileMenu.style.left = 0;
        background.style.display = 'block';
    })
    background.addEventListener('click', () => {
        mobileMenu.style.left = '-100%';
        background.style.display = 'none';
    })
} else {
    console.log('server')
}

const Header = () => {
    return (
        <>
            <div className={classes['black-background']} id="background"></div> {/* for menu on mobile */}
            <header className={classes.header}>
                <div className={classes.burger} id="burger"><span></span></div>

                <div className={classes['laptop-menu']}>
                    <div className={classes.logo}></div>
                    <div className={classes['header__laptop-links']} id="menu">
                        {navigation.map(({ id, title, path }) => (
                            <Link key={id} href={path} className={classes.link}>{title}</Link>
                        ))}
                    </div>
                </div>

                <div className={classes['mobile-menu']} id="mobile-menu">
                    <div className={classes.logo}></div>
                    <div className={classes['header__mobile-links']} id="menu">
                        {navigation.map(({ id, title, path }) => (
                            <Link key={id} href={path} className={classes.link}>{title}</Link>
                        ))}
                    </div>
                </div>

                <div className={classes.header__search}>
                    <input type="text" placeholder="Search..." className={classes['search-input']}/>
                </div>

                <Link href={"/posts"} className={classes.header__link}>Posts</Link>
            </header>
        </>
    )
};

export default Header;