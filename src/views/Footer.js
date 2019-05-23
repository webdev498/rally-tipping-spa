import m from "mithril";

const logoUrl = 'images/logo-small.png';
const footerMenus = ['Terms & Conditions', 'Refund Policy', 'Policy Privacy', 'Press'];
const footerSocialIcons = ['facebook.svg', 'twitter.svg', 'instagram.svg', 'youtube.svg'];
const footerMobiles = ['Appstore.svg', 'Playstore.svg'];

const Footer = {
    view: () => (
        m("footer", {class: "footer"}, [
            m(".footer__item footer__copy", [
                "© 2018 powered by  ",
                m("img", {src: logoUrl})
            ]),
            m(".footer__item footer__link", footerMenus.map(menu => (
                m("a", {class: 'footerlink__item', href: "#"}, menu)
            ))),
            m(".footer__item footer__social", footerSocialIcons.map(icon => (
                m('.footersocial__item', m("img", {src: `images/${icon}`}))
            ))),
            m(".footer__item footer__app", footerMobiles.map(mobile => (
                m('.footerapp__item', m("img", {src: `images/${mobile}`}))
            )))

        ])
    )
};

export default Footer;