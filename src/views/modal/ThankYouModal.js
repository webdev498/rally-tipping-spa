import m from "mithril";
import Space from "../../components/Space";

const ThankYouModal = {
    view: ({ attrs: { model, actions} }) => (
        m(".overlaypopup youdriver forgoturtip", [
            m('.overlaypopup-overlay'),
            m('.overlaypopup-stage', 
                m('.overlaypopup-body', [
                    m('div', {class: 'heading'}, [
                        'Thank ',
                        m('span', 'you!')
                    ]),
                    m(Space),
                    m('div', 
                        {class: 'heading-4'}, 
                        model.tip > 0 ? 'Your tip has been sent to your driver.' : 'We appreciate your feedback.'
                    ),
                    m('.selectamount', [
                        m(Space),
                        m(Space),
                        m('.center', m('img', {src: 'images/busicon.svg'})),
                        m('.selectamount__item', m('.label-2 align-center', model.rate.comment)),
                        m(Space),
                        m(Space),
                        m(".rate center", 
                            m('.rate__item rate__item--stars', [
                                m('.rate__star', { class: model.rate.score > 0 ? 'active' : '' }),
                                m('.rate__star', { class: model.rate.score > 1 ? 'active' : '' }),
                                m('.rate__star', { class: model.rate.score > 2 ? 'active' : '' }),
                                m('.rate__star', { class: model.rate.score > 3 ? 'active' : '' }),
                                m('.rate__star', { class: model.rate.score > 4 ? 'active' : '' })
                            ]),
                        ),
                    ])
                ])
            )
        ])
    )
};

export default ThankYouModal;