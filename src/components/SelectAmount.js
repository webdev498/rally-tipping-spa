import m from "mithril";
import Space from './Space';

const defaultPricings = [1, 2, 3];

const SelectAmount = {
    view:  ({attrs: { model, actions} }) => {
        var pricings = [...defaultPricings];
        if (model.tip > 0 ) {
            pricings.push(model.tip);
            pricings = Array.from(new Set(pricings))
        }

        return m(".selectamount", [
            m('div', {class: 'heading-3'}, 'Tip your driver'),
            m(Space),
            m(Space),
            m('.selectamount__item amount__circle', pricings.map(price => (
                m('.amountCircle', { class: model.tip == price ? 'active' : '', onclick: evt => actions.changeTip(price) }, `$${price}`)
            ))),
            m(Space),
            m(Space),
            m('.selectamount__item', 
                m('.label-2 align-center', 
                    m('a', {
                        class: 'underline',
                        onclick: evt => actions.toggleTipModal(true) 
                    }, 'Choose other amount')
                )
            ),
            m(Space)
        ])
    }
};

export default SelectAmount;