import { Dictionary } from './dictionaries';

export const dictionary: Dictionary = {
    language: 'en',
    navBar: {
        NAVBAR_LINKS: {
            Category: {
                text: 'Products',
                href: '/products',
            },
            AboutUs: {
                text: 'About us',
                href: '/aboutUs',
            },
            ContactUs: {
                text: 'Contact us',
                href: '/contact',
            },
        },
        CategoryDropdown: {
            allProductsText: 'All products',
        },
    },
    aboutUs: {
        title: 'About us',
        desktopContent: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'The man who breaks with a closed image of masculinity and surrenders to character, daring and the release of pre-defined concepts.',
                    'We intend to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that provide softness, movement and sensitivity at the same time, which awakens the sacred in each one through the creation of unique pieces.',
                    'As the textile industry contributes the most to pollution, we consider the urgent need to use resources that are industrial waste in the textile sector and support our ideology of sustainability and reuse.',
                ],
            },
            {
                title: 'The sky and the wind inspire us. Earth, fire and water.',
                paragraphs: [
                    'We create timeless pieces within the definition of Slow Fashion, producing on a small scale and free from the volatility of market trends. We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production, choosing raw materials that guarantee greater durability.',
                    'Inspired in heaven, made by earth, for the spirit men.',
                ],
            },
        ],
        mobileContent: [
            {
                title: 'Orun. Sky. Freedom. Free Spirit.',
                paragraphs: [
                    'The man who breaks with a closed image of masculinity and surrenders to character, daring and the release of pre-defined concepts. We take as urgent the need to use resources that are industrial waste from the textile sector and we support our ideology in sustainability and reuse.',
                    'We work freely: without seasonal collections, defending the quality of materials, design, exclusivity, local, artisanal and small-scale production, choosing raw materials that guarantee greater durability.',
                    'Heaven inspires us. Earth, fire and water.',
                    'Inspired in heaven, made by earth, for the spirit men.',
                ],
            },
        ],
    },
    topPicks: {
        title: 'Top picks',
    },
    productPage: {
        title: 'Product',
        sizeContent: {
            sizeText: 'Size',
            chooseSizeText: 'Choose size',
        },
        colorContent: {
            colorText: 'Color',
            chooseColorText: 'Choose a color',
        },
        comingSoonText: 'Online Shop Coming Soon',
        addToCartContent: {
            addToBagText: 'Add to the bag',
            selectOptionText: 'Select an option',
            disabledProductText: 'Sold out',
        },
        contactForm: {
            mailSubject: 'I\'m interested in buying "${title}"',
            mailBody:
                "Hello,%0D%0A%0D%0A%20%20%20%20I'm interested in purchasing the following product:%0D%0A%20%20%20%20${title} with size (if applicable) [Insert Size].%0D%0A%0D%0A%20%20%20%20Shipping details:%0D%0A------------------%0D%0A%0D%0A%20%20%20%20 Mobile: [Insert phone contact]%0D%0A %20%20%20%20 Address : [Insert Address]%0D%0A%20%20%20%20 NIF (Optional) : [Insert NIF] %0D%0A%0D%0AProduct Details:%0D%0A------------------%0D%0A%20%20%20%20Product: ${title}%0D%0A%20%20%20%20Price: ${price} euros%0D%0A%0D%0A%0D%0A%0D%0AThank you!",
        },
        successMessage: {
            title: 'Added product to the bag !',
            description: 'Access your bag to finish the buy.',
        },
        errorMessage: {
            title: 'Error adding the product to the bag !',
            description: 'Please, try again later.',
        },
    },
    footer: {
        ABOUT_LINKS: [
            {
                title: 'About',
                links: [
                    {
                        href: '/aboutUs',
                        text: 'Our Story',
                        isExternal: false,
                    },
                    /*
                    {href: '/en/#aboutUs',
                        href: '/stores',
                        text: 'Our Stores',
                    },
                    {
                        href: '/careers',
                        text: 'Careers',
                    },
                    {
                        href: '/press',
                        text: 'Press',
                    },*/
                ],
            },
            {
                title: 'Client Service',
                links: [
                    {
                        href: 'service/delivery',
                        text: 'Delivery',
                        isExternal: false,
                    },
                    {
                        href: 'service/returns',
                        text: 'Returns',
                        isExternal: false,
                    },
                ],
            },
            {
                title: 'Social',
                links: [
                    {
                        href: 'https://www.instagram.com/orun.menswear/',
                        text: 'instagram',
                        isExternal: true,
                    },
                    {
                        href: 'https://www.facebook.com/profile.php?id=100083324353901',
                        text: 'facebook',
                        isExternal: true,
                    },
                ],
            },
            {
                title: 'Legal',
                links: [
                    {
                        href: 'legal/privacy',
                        text: 'Privacy Policy',
                        isExternal: false,
                    },
                    {
                        href: 'legal/terms',
                        text: 'Terms',
                        isExternal: false,
                    },
                ],
            },
        ],
    },
    productsPage: {
        productsContent: {
            title: 'Products',
        },
        categoriesContent: {
            title: 'Categories',
        },
    },
    aboutUsPage: {
        title: 'Orun',
        text: [
            "I designed clothes that I wanted to wear that I couldn't find for sale - that was basically it. From then on, I reactivated and pacified my taste for the image, giving opportunity to the vein of creativity to express itself, now in a mature way. I intend to uncomplicate and sensualize the male image by working with fluid fabrics and cuts that provide smoothness, movement and sensitivity.",
            'There is a personal process that accompanies the birth of Orun: it is as if it were the culmination of a phase in which I kept for myself, and only for myself, the creative freedom that in my case takes on multiple forms. The notion of harmony, the taste for beauty, and the will to create typical of a Libra, led him to design a concept brand for a man who breaks with a closed image of masculinity and surrenders to character, daring and liberation of pre-defined concepts.',
            'Awaken male sensuality. With something sacred and something profane. As the textile industry is the one that most contributes to pollution, I took the urgent need to use resources that are industrial waste in the textile sector, supporting myself in an ideology of sustainability and reuse.',
            'I create timeless pieces within the definition of Slow Fashion, with small-scale production and free from the volatility of market trends. Free-form work: without seasonal collections, defending the quality of materials, design, exclusivity, local and artisanal production, choosing raw materials that guarantee greater durability.',
            'The sky and the wind inspire me. Earth, fire and water. Inspire me what is divine. Inspire me who freed himself.',
            'Orun.',
            'Tiago Bastos.',
        ],
    },
    contactUsPage: {
        title: 'Contact Us',
        description: 'You can contact us directly by email or WhatsApp.',
        formContent: {
            nameInput: {
                name: 'name',
                label: 'Name',
                placeholder: 'Your name',
            },
            emailInput: {
                name: 'email',
                label: 'Email',
                placeholder: 'Your email',
            },
            phoneInput: {
                name: 'phone',
                label: 'Phone',
                placeholder: 'Your phone',
            },
            messageInput: {
                name: 'message',
                label: 'Message',
                placeholder: 'Your message',
            },
            submitMessage: 'Send',
            loadingMessage: 'Sending...',
            successMessage: {
                title: 'Message sent successfully!',
                description: 'We will contact you as soon as possible.',
            },
            errorMessage: {
                title: 'Error sending message!',
                description: 'Please try again later.',
            },
        },
    },
    privacyPage: {
        title: 'Privacy Policy',
        topics: [
            {
                privacyTopicTitle: 'Content Information',
                privacyTopicText: [
                    'The Orun Online Store reserves the right to modify at any time the information and commercial offer presented on: products, prices, promotions, commercial conditions and services.',
                    'It is strictly forbidden to insert links on this site for commercial purposes without prior authorization. Likewise, the use of the www.orun.pt domain for abusive purposes, and without prior authorization, may be subject to recourse to the competent legal means by the Orun Online Store.',
                    'If you find links on other sites that allow access, we inform you that we are not responsible for the origin of the page or for the contents registered therein.',
                    'We make every effort to ensure that the information presented is free of typographical errors and whenever they occur, we will correct them as quickly as possible.',
                    'The photos presented on the website are merely illustrative and correspond to the product for sale. We recommend that you consult the detailed product information for information about its features.',
                    'Product prices and specifications are subject to change without notice.',
                    'Despite the best efforts of the Orun online store, some products may be incorrectly priced, so we check prices every time we process orders. If the price of the product is lower than the advertised price, we will refund the difference.',
                    'If the price is higher, we will inform the customer by email and await their decision to accept the new proposal or cancel the order. In the event of product unavailability and/or out of stock, you will be informed of the partial or total cancellation of your order with the right to a refund of the amount paid.',
                ],
            },
            {
                privacyTopicTitle: 'Industrial and Intellectual Property',
                privacyTopicText: [
                    'All texts, comments, works, illustrations, works and images reproduced or represented on the website www.orun.pt are strictly reserved in terms of copyright, as well as intellectual property rights, worldwide.',
                    'Thus, and under the terms of the Intellectual Property Code, use for private purposes is only authorized under provisions to the contrary, including more restrictive provisions contained in that code.',
                    'Any total or partial reproduction or representation of www.orun.pt or of all or part of the elements included therein is strictly prohibited.',
                ],
            },
            {
                privacyTopicTitle: 'Product Availability',
                privacyTopicText: [
                    'The Orun Online Store only processes an order placed by a customer after confirmation of the respective payment, so it cannot guarantee the availability of the articles until the beginning of said processing.',
                    'Estimated shipping date: up to 1/2 business days.',
                    'In addition to the estimated shipping time, there is also the shipping time, which depends on the carrier you choose and the destination of your order.',
                    'For deliveries in mainland national territory, we estimate a delivery time of up to 5 working days, from the moment of confirmation of payment.',
                    "Orun's online store only ships on weekdays. In this way, neither weekends nor holidays are counted for the order delivery estimate.",
                    'Any delay in sending the items, taking into account the estimated dates presented, does not confer the right to compensation.',
                    'In the event of a stock break, the customer will be informed. If the replacement takes longer than 5 business days, the customer will be given the option to cancel, with the respective refund, part or all of the order.',
                ],
            },
            {
                privacyTopicTitle: 'Personal Data Protection',
                privacyTopicText: [
                    'In compliance with Law n.0 67/98, of October 26, on the Protection of Personal Data, we inform you that the processing of personal data collected on the website www.orun.pt is the responsibility of Tiago Filipe Frederico Bastos, a natural person carrying the taxpayer number 240866444.',
                    'Personal data are processed by computer, for shipments corresponding to your orders, respective administrative support, and for statistical purposes.',
                    "The personal data collected may be communicated to third parties of recognized reputation for the purposes of direct marketing. It's guaranteed gives the holder the right to access, rectify, change or delete their personal data, to do so, or contact us indicating their name, surname, address and customer number, via email: info@orun.pt.",
                    'The Customer authorizes Orun to automatically process the personal data provided, namely through the use of cookies.',
                    'Although Orun can collect and process data safely and prevent its loss or manipulation, using the most perfected techniques for this purpose, we inform you that the collection in an open network allows the circulation of personal data without security conditions, under the risk of being seen and used by unauthorized third parties.',
                ],
            },
        ],
    },
    termsOfServicePage: {
        title: 'Terms of Service',
        topics: [
            'Any and all orders placed with Orun through the online store will be governed by these Purchase Conditions:',
            'By ordering, you acknowledge that you have read, understood and accepted these conditions of purchase.',
            'Orun may, at any time, change all or part of the terms and conditions of sale sustained herein.',
            'The general conditions of sale observed for Orun products can be found below on the website www.orun.pt (the "web page"). As such, the use of this website, when applicable, will imply acceptance by the user of these general conditions of sale.',
            'However, if you have any questions about them, please contact our Customer Service via email: info@orun.pt',
        ],
    },
    deliveryPage: {
        title: 'Delivery policy',
        topics: [
            {
                deliveryTopicTitle: 'Shipping and Delivery',
                deliveryTopicText: [
                    'From the moment of delivery, the risk of the product shall be supported by the customer. The shipment of products purchased through www.orun.pt will be carried out through an express courier company, and these will be delivered within the deadlines indicated by them.',
                    'To avoid delivery problems (wrong address, missing recipient, etc.) it is essential to send all the correct information when ordering.',
                    'The delivery price is calculated according to the chosen shipping method and the products purchased. The exact shipping price will be calculated whenever an item is added to the shopping cart, and will be displayed on the checkout page that appears before the customer confirms the order and before entering the payment data.',
                    'Shipping costs may change at any time without prior notice. This amendment will apply from the moment the new cost is included in the Terms and Conditions of Sale. In any case, the applicable costs will be the shipping costs shown at the time of ordering.',
                ],
            },
            {
                deliveryTopicTitle: 'Payment Methods',
                deliveryTopicText: [
                    'After confirming your order, you will find several payment options available in your shopping cart, and you can choose the one that suits you best, from among the following:',
                    'MBWay.',
                    'Revolut.',
                    'Bank transfer.',
                    'Orun does not accept checks or cash as payment for online purchases, only the payment options listed above.',
                ],
            },
        ],
    },
    returnsPage: {
        returnsTopicTitle: 'Return Policy',
        topics: [
            {
                returnsTopicTitle: 'Exchanges and Returns',
                returnsTopicText: [
                    'The User may opt for the free termination of the contract, under the applicable legal terms.',
                    "In order to exercise their right of free termination, the user must notify Orun's Customer Service of their decision to terminate this contract by means of an unequivocal statement (for example, postal mail, or email to info@orun.pt).",
                    'In order for the free resolution period to be respected, it is sufficient that your communication regarding the exercise of the right of free resolution is sent to Orun before the end of the resolution period, 14 calendar days from the date of delivery of the articles.',
                    'In the event of termination of this contract, all payments made will be refunded, excluding costs, without undue delay and, in any case, within a maximum period of 14 (fourteen) days from the date on which Orun is informed of your decision to terminate this contract.',
                    'You must reimburse the item(s) in good condition, in the complete original packaging and accompanied by the order number, the return costs will be the sole responsibility of the customer.',
                    'The customer must always keep proof of shipment of the items. All items will be checked upon arrival at our facilities and only those that comply with the aforementioned conditions will be accepted for return.',
                ],
            },
            {
                returnsTopicTitle: 'Return Conditions',
                returnsTopicText: [
                    'The customer benefits from a period of 15 (fifteen) days for returns from the date of receipt of the items (except for special conditions granted in time).',
                    'The customer must reimburse the item(s) in good condition, with no signs of use, in the complete original packaging, accompanied by the order number.',
                    'The customer must first contact us via email info@orun.pt describing in detail the reason for the return.',
                    'All items will be checked upon arrival at our facilities and only those that respect the return conditions will be accepted for exchange or return.',
                    'Returns of items with signs of wear, misuse and/or any problem that may have caused the defect or misuse of the item (eg: fall, humidity, etc.) are not accepted.',
                    'The customer may choose another method of return, fully bearing the costs of the return and must always keep the proof of shipment of the items, to the address "Rua da Boa Vista nº112 4560-124 Galegos, Penafiel"',
                    'Orun is only responsible for return and re-shipping costs if:',
                    '- There is an internal error and the product sent does not match the order.',
                    '- The product is defective at the origin.',
                    '- If it has been damaged during transport (the damage must be noted on the delivery note at the time of delivery).',
                    'For the purpose of refunding the return cost, the customer will have to present the respective invoice/proof.',
                    'In the case of returning all items, if the order has entitled the Customer to a gift, this must also be returned.',
                    'In the case of a refund request for an item purchased at a reduced price, due to a special offer, Orun will refund the amount actually paid by the Customer and not the total amount.',
                ],
            },
            {
                returnsTopicTitle: 'Exchange Conditions',
                returnsTopicText: [
                    'The exchange of articles is only possible in cases where the customer wants another size and/or color of the same articles that he intends to exchange.',
                    'Exchange items will be automatically shipped to the same address the items were originally shipped to.',
                    'If there is a difference in value, it will be charged by sending an ATM reference. After the payment deadline, the exchange order will be canceled and refunded.',
                    "Regardless of the payment method used for your purchase, refunds resulting from exchanges, and/or exchange rate adjustments, will always be made to IBAN. If the IBAN is omitted from the customer's account, it will be done by check, which will be sent by post to the customer's account address. It is the customer's responsibility to keep this information up to date.",
                ],
            },
            {
                returnsTopicTitle: 'Refunds',
                returnsTopicText: [
                    'Regardless of the payment method used for your purchase, refunds resulting from returns, where there is at least 1 item to be exchanged, and/or adjustments to the exchange value, will always be made to IBAN.',
                ],
            },
        ],
    },
    editItemQuantityForm: {
        successMessage: {
            description: 'Change quantity with success.',
        },
        errorMessage: {
            title: 'Error changing the quantity.',
            description: 'Please try again later.',
        },
        increaseMessage: 'Increase product quantity',
        decreaseMessage: 'Reduce product quantity',
    },
    deleteItemForm: {
        successMessage: {
            description: 'Retired product with success.',
        },
        errorMessage: {
            title: 'Error removing the product.',
            description: 'Please try again later.',
        },
        deleteMessage: 'Delete the product from the bag.',
    },
    cartModalContent: {
        title: 'My cart',
        emptyCartText: 'Your cart is empty.',
        checkoutText: 'Proceed to checkout',
    },
    searchTooltipContent: {
        searchProductsText: 'Search products',
    },
    searchPageContent: {
        multipleResultsText: 'results',
        singleResultText: 'result',
        noResultsText: 'No results found.',
        showingText: 'Showing',
        forText: 'for',
    },
};
