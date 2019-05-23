import m from "mithril";
import Space from './../components/Space';

const jsUcfirst = (string) => ( string.charAt(0).toUpperCase() );
const getNameInitials = (firstName, lastName) => ( `${firstName} ${jsUcfirst(lastName)}.` );

const DriverBox = {
	
	view: ({attrs: { model, actions} }) =>
		m(".driver-box-container", [
			m(Space),
			m(".box__yellow", [
				m(".boxyellow__item label-1",
					model.driver ? 
						m(".boxy", [m("span", getNameInitials(model.driver.firstName, model.driver.lastName)), m("br"), model.busNum]) : 
						model.busNum
				),
				m(".boxyellow__item", [
					m("img", {
						src: "images/tag.png"
					}),
					" company",
					m("br"),
					"name"
				])
			]),
			m(Space),
            m('.label-2 align-center label-6', [
                'Know your driver? ',
                m('a', { class: 'underline', onclick: evt => actions.toggleDriverModal(true) }, 'Select here.')
			]),
			m(Space)
		])
};

export default DriverBox;