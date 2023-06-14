import { DeliveryPage, SearchTooltipContent, TermsOfServicePage } from './dictionaries.d';
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
    colorContent: ColorContent;
    sizeContent: SizeContent;
    comingSoonText: string;
    contactForm: ProductContactForm;
    successMessage: ToastMessageContent;
    errorMessage: ToastMessageContent;
    addToCartContent: AddToCartContent;
}

export interface AddToCartContent {
    addToBagText: string;
    selectOptionText: string;
    disabledProductText: string;
}

export interface ColorContent {
    colorText: string;
    chooseColorText: string;
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

export interface ContactUsPage {
    title: string;
    description: string;
    formContent: ContactUsFormContent;
}

export interface EditItemQuantityFormContent {
    successMessage: ToastMessageContent;
    errorMessage: ToastMessageContent;
    increaseMessage: string;
    decreaseMessage: string;
}

export interface DeleteItemFormContent {
    successMessage: ToastMessageContent;
    errorMessage: ToastMessageContent;
    deleteMessage: string;
}

export interface ContactUsFormContent {
    nameInput: ContactUsFormInput;
    emailInput: ContactUsFormInput;
    messageInput: ContactUsFormInput;
    phoneInput: ContactUsFormInput;
    submitMessage: string;
    loadingMessage: string;
    successMessage: ToastMessageContent;
    errorMessage: ToastMessageContent;
}

export interface ToastMessageContent {
    title?: string;
    description: string;
}

export interface ContactUsFormInput {
    name: string;
    label: string;
    placeholder: string;
}

export interface PrivacyPage {
    title: string;
    topics: PrivacyTopic[];
}

export interface PrivacyTopic {
    privacyTopicTitle: string;
    privacyTopicText: string[];
}

export interface TermsOfServicePage {
    title: string;
    topics: string[];
}

export interface DeliveryPage {
    title: string;
    topics: DeliveryPageTopic[];
}

export interface DeliveryPageTopic {
    deliveryTopicTitle: string;
    deliveryTopicText: string[];
}

export interface ReturnsPage {
    returnsTopicTitle: string;
    topics: ReturnsPageTopic[];
}

export interface ReturnsPageTopic {
    returnsTopicTitle: string;
    returnsTopicText: string[];
}

export interface CartModalContent {
    title: string;
    emptyCartText: string;
    checkoutText: string;
}

export interface SearchTooltipContent {
    searchProductsText: string;
}

export interface SearchPageContent {
    multipleResultsText: string;
    singleResultText: string;
    noResultsText: string;
    showingText: string;
    forText: string;
}

export interface CookiesSettingContent {
    title: string;
    description: string;
    acceptAllCookiesText: string;
}

export interface NewsLetterValidation {
    invalidEmail: string;
    emailPlaceholder: string;
    requireCheckboxEmail: string;
    signUpCallout: string;
    signUpButtonText: string;
    successMessage: ToastMessageContent;
    errorMessage: ToastMessageContent;
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
    contactUsPage: ContactUsPage;
    privacyPage: PrivacyPage;
    termsOfServicePage: TermsOfServicePage;
    deliveryPage: DeliveryPage;
    returnsPage: ReturnsPage;
    editItemQuantityForm: EditItemQuantityFormContent;
    deleteItemForm: DeleteItemFormContent;
    cartModalContent: CartModalContent;
    searchTooltipContent: SearchTooltipContent;
    searchPageContent: SearchPageContent;
    cookiesSettingContent: CookiesSettingContent;
    newsletterValidation: NewsLetterValidation;
}
