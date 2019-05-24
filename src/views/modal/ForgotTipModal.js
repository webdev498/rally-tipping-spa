import m from "mithril";
import Space from "../../components/Space";

const defaultPricings = [1, 2, 3];
                   
const ForgotTipModal = {
    view: ({ attrs: { model, actions} }) => {
        var pricings = [...defaultPricings];
        if (model.tip > 0 ) {
            pricings.push(model.tip);
            pricings = Array.from(new Set(pricings))
        }

        return m(".overlaypopup youdriver forgoturtip", [
                m('.overlaypopup-overlay'),
                m('.overlaypopup-stage', 
                    m('.overlaypopup-body', [
                        m('.heading heading-30', [
                            'Forgot ',
                            m('span', 'your tip?')
                        ]),

                        m(".selectamount", [
                            m(Space),
                            m(Space),
                            m('.selectamount__item amount__circle', pricings.map(price => (
                                m('.amountCircle', { class: model.tip == price ? 'active' : '', onclick: evt => actions.changeTip(price) }, `$${price}`)
                            ))),
                            m(Space),
                            m('.selectamount__item', 
                                m('.label-2 align-center', [
                                    m('a', {
                                        class: 'underline',
                                        onclick: evt => { 
                                            model.tip = 0;
                                            actions.toggleForgotTipModal(false);
                                            actions.toggleThankYouModal(true); 
                                        }
                                    }, 'No Tip'),
                                    ' | ',
                                    m('a', {
                                        class: 'underline',
                                        onclick: evt => actions.toggleTipModal(true) 
                                    }, 'Choose other amount')
                                ])
                            ),
                            m(Space),
                            m(Space),
                            m('.center', m('button', {
                                class: 'button button--full' + (model.tip > 0 ? ' active' : ''),
                                disabled: (model.tip > 0 ? false : true),
                                onclick: evt => {
                                    if (model.tip > 0) {
                                        actions.toggleForgotTipModal(false)
                                    }
                                    actions.togglePaymentModal(true)
                                }
                            }, 'Send')),
                        ])
                    ])
                )
            ]
        )
    }
};

export default ForgotTipModal;