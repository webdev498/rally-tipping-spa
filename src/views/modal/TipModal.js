import m from "mithril";
import Space from "../../components/Space";

let otherAmount = 0;

const TipModal = {
    view: ({ attrs: { model, actions} }) => {
        return m(".overlaypopup chooseamount", [
            m('.overlaypopup-overlay'),
            m('.overlaypopup-stage', 
                m('.overlaypopup-body', [
                    m('.chooseamount__header', `Choose other amount for ${model.driver ? model.driver.firstName : 'driver'}`),
                    m('.chooseamount__detail', [
                        '$',
                        m('input', {
                            type: 'number', 
                            min: '1', 
                            max: '99', 
                            class: 'other-tip-amount', 
                            onkeyup: evt => otherAmount = evt.target.value,
                            onchange: evt => otherAmount = evt.target.value 
                        })
                    ]),
                    m(Space),
                    m('.chooseamount__footer center', 
                        m('button', { 
                            class: "button  label-5 button--third", 
                            onclick: evt => {
                                if(otherAmount > 0)
                                    actions.changeTip(parseInt(otherAmount));
                                actions.toggleTipModal(false)
                            }
                        }, 'Add tip')
                    )
                ])
            )
        ])
    }
};

export default TipModal;