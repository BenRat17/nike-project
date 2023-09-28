import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, patron1, patron2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "TITANFORGED Wind-Walker Jordanicus-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "TITANFORGED Wind-Walker Jordanicus-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "TITANFORGED Wind-Walker Jordanicus-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "TITANFORGED Wind-Walker Jordanicus-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: patron1,
        customerName: 'Moricha Elodias',
        rating: 4.5,
        feedback: "My pair of Sky-Strider 1s are a godsend! They take care of my feet as if they were only sweet little babes."
    },
    {
        imgURL: patron2,
        customerName: 'Bradicus Pithian',
        rating: 4.5,
        feedback: "The quality is impeccable and the customer service so helpful! They even made a custom pair with extra iron plating in the heels!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Wind-Walker 1", link: "/" },
            { name: "Sky-Strider 1", link: "/" },
            { name: "Air Jordanicus 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "TitanForged Cliff-Racer", link: "/" },
            { name: "TitanForged Trailblazers", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@titanforged.com", link: "mailto:customer@titanforged.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];