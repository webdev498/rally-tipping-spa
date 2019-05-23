import m from "mithril";
import Space from './Space';
import RateComment from "./RateComment";

const RateBox = {
    view: ({attrs: { model, actions} }) => (
        m(".rate-points-container", [
            m('div', {class: 'heading-3'}, 'Rate your driver'),
            m(Space),
            m(".rate", [
                m('.rate__item label-2 rate__item--head', 'How would you rate your bus driver?'),
                m('.rate__item rate__item--stars', [
                    m('.rate__star', { class: model.rate.score > 0 ? 'active' : '', onclick: evt => actions.changeRateScore(1) }),
                    m('.rate__star', { class: model.rate.score > 1 ? 'active' : '', onclick: evt => actions.changeRateScore(2)}),
                    m('.rate__star', { class: model.rate.score > 2 ? 'active' : '', onclick: evt => actions.changeRateScore(3)}),
                    m('.rate__star', { class: model.rate.score > 3 ? 'active' : '', onclick: evt => actions.changeRateScore(4)}),
                    m('.rate__star', { class: model.rate.score > 4 ? 'active' : '', onclick: evt => actions.changeRateScore(5)})
                ]),
            ]),
            m(Space),
            m(Space),
            m(RateComment, { model, actions}),
            m(Space),
        ])
    )
};

export default RateBox;