import m from "mithril";
import Space from "../../components/Space";

const PaymentModal = {
    view: ({ attrs: { model, actions} }) => (
        m(".overlaypopup youdriver forgoturtip", [
            m('.overlaypopup-overlay'),
            m('.overlaypopup-stage', 
                m('.overlaypopup-body', [
                    m('div', {class: 'heading center'}, 'Payment'),
                    m(Space),
                    m('div', {class: 'heading-4'}, 'Your tip will be sent to your driver.'),
                    m(Space),
                    m('.center', m('button', {
                        class: 'button button--full active',
                        onclick: evt => {
                            actions.toggleThankYouModal(true)
                        }
                    }, 'Pay now')),
                ])
            )
        ])
    )
};

export default PaymentModal;