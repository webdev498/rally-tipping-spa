import m from "mithril";
import Heading from './../components/Heading'
import RateBox from "../components/RateBox";
import SelectAmount from "../components/SelectAmount";
import DriverBox from "../components/DriverBox";

const Main = {
    view: ({attrs: {model, actions} }) => (
         m(".content", [
            m(Heading),
            m(DriverBox, { model, actions }),
            m(RateBox, { model, actions }),
            m(SelectAmount, { model, actions }),
            m('.center', m('button', {
                class: 'button button--full' + (model.driver && model.rate.score > 0 ? ' button--third' : ''),
                disabled: (model.driver && model.rate.score > 0 ? false : true),
                onclick: evt => {
                    if (model.tip > 0)
                        actions.togglePaymentModal(true)
                    else
                        actions.toggleForgotTipModal(true)
                }
            }, 'Send')),
            m("pre", JSON.stringify(model, null, 4))
        ])
    )
};

export default Main;