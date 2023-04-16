type FooterLink = {
    href: string;
    text: string;
};

type FooterLinkGroup = {
    title: string;
    links: FooterLink[];
};

type NavBar = {
    NAVBAR_LINKS: NavbarLinkProps[];
};

type Footer = {
    ABOUT_LINKS: FooterLinkGroup[];
};

type Dictionary = {
    language: string;
    navBar: NavBar;
    footer: Footer;
};
