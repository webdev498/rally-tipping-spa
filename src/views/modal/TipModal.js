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
                            type: 'text',
                            class: 'other-tip-amount', 
                            onkeyup: evt => otherAmount = evt.target.value,
                            onchange: evt => otherAmount = evt.target.value,
                            onkeypress: evt => {
                                if (evt.target.value.length > 2)
                                    return false;

                                var charCode = (evt.which) ? evt.which : event.keyCode
                                if (charCode > 31 && (charCode < 48 || charCode > 57))
                                    return false;

                                return true;
                            }
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