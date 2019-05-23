import m from "mithril";
import Space from "./Space";

const Heading = {
    view: () => (
        m('.heading-container', [
            m('div', {class: 'heading'}, [
                'Rate',
                m('span', ' your driver')
            ]),
            m(Space),
            m('div', {class: 'heading-1'}, 'Rate and tip your driver for a job well done!')
        ])
    )
};

export default Heading;