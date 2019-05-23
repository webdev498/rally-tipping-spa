import m from "mithril";

const Header = {
    view: () => (
        m("header", {class: "header sticky"}, [
            m("img", {src: "images/tag.png"}),
            "company",
            m("br"),
            "name"
        ])
    )
};

export default Header;