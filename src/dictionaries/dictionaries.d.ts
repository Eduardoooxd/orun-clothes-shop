export interface NavBar {
    NAVBAR_LINKS: {
        Category: {
            text: string;
            href: string;
        };
        AboutUs: {
            text: string;
            href: string;
        };
        ContactUs: {
            text: string;
            href: string;
        };
    };
    CategoryDropdown: {
        allProductsText: string;
    };
}

export interface AboutUs {
    title: string;
    desktopContent: AboutUsContent[];
    mobileContent: AboutUsContent[];
}

export interface AboutUsContent {
    title: string;
    paragraphs: string[];
}

export interface ProductPage {
    title: string;
    colorsText: string;
    sizeContent: SizeContent;
    comingSoonText: string;
    orderText: string;
    contactForm: ProductContactForm;
}

export interface ProductContactForm {
    mailSubject: string;
    mailBody: string;
}

export interface SizeContent {
    sizeText: string;
    chooseSizeText: string;
}

export interface TopPicks {
    title: string;
}

export interface Footer {
    ABOUT_LINKS: FooterLinkGroup[];
}

export interface FooterLink {
    href: string;
    text: string;
    isExternal: boolean;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

export interface ProductsPage {
    productsContent: ProductsContent;
    categoriesContent: CategoriesContent;
}

export interface ProductsContent {
    title: string;
}

export interface CategoriesContent {
    title: string;
}

export interface AboutUsPage {
    title: string;
    text: string[];
}

export interface Dictionary {
    language: string;
    navBar: NavBar;
    aboutUs: AboutUs;
    topPicks: TopPicks;
    productPage: ProductPage;
    footer: Footer;
    productsPage: ProductsPage;
    aboutUsPage: AboutUsPage;
}
