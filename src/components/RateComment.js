import m from "mithril";

const RateComment = {
    view: ({attrs: { model, actions} }) => (
        m(".rate-comment", [
            m('.rate__item label-2 rate__item--head', 'Please provide any additional feedback you may have:'),
            m('textarea', {class: 'textarea', placeholder: 'Additional comments...', onkeyup: evt => actions.changeRateComment(evt.target.value) })
        ])
    )
};

export default RateComment;