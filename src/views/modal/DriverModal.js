import m from "mithril";

const drivers = [
    {
        id: 1,
        firstName: 'Clint',
        lastName: 'Edmond',
        profilePath: 'images/profile.png',
        companyName: 'Company1',
        driverCard: 'ABC - 123'
    },
    {
        id: 2,
        firstName: 'Denis',
        lastName: 'Gao',
        profilePath: 'images/profile.png',
        companyName: 'Company2',
        driverCard: 'ABC - 123'
    },
    {
        id: 3,
        firstName: 'Dean',
        lastName: 'Chambers',
        profilePath: 'images/profile.png',
        companyName: 'Company3',
        driverCard: 'ABC - 123'
    }
];

const jsUcfirst = (string) => ( string.charAt(0).toUpperCase() );
const getNameInitials = (firstName, lastName) => ( `${firstName} ${jsUcfirst(lastName)}.` );

const DriverModal = {
    selectedDriverId: -1,
    view: ({attrs: { actions}, state: { selectedDriverId } }) => (
        m(".overlaypopup youdriver", [
            m('.overlaypopup-overlay'),
            m('.overlaypopup-stage', 
                m('.overlaypopup-body', [
                    m('.youdriver__item youdriver__list', drivers.map(d => (
                        m('.youdriver__item', [
                            m('.youdriver__detail', 
                                m('label', {class: "form__checkbox"}, [
                                    m('input', { 
                                        type: 'radio', 
                                        name: 'drivers',
                                        value: d.id, 
                                        onchange: evt => selectedDriverId = evt.target.value
                                    }),
                                    m('span')
                                ])
                            ),
                            m('.youdriver__detail', [
                                m('img', { src: d.profilePath }),
                                m('div', [
                                    m('.label-3', getNameInitials(d.firstName, d.lastName)),
                                    m('.label-4', d.companyName),
                                ])
                            ]),
                            m('.youdriver__detail', m('.youdriverdl label-5', d.driverCard))
                        ])
                    ))),
                    m('.youdriver__item youdriver__footer center', 
                        m('button', {
                            class: 'button button--third label-5', 
                            onclick: evt => {
                                if (selectedDriverId > -1) {
                                    const driverInfo = drivers.find(x => x.id == selectedDriverId)
                                    actions.changeDriver(driverInfo);
                                }
                                
                                actions.toggleDriverModal(false) 
                            }
                        }, 'Change Driver')
                    )
                ])
            )
        ])
    )
};

export default DriverModal;