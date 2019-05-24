import m from "mithril";
import Stream from 'mithril/stream';
import Main from './views/Main';
import Header from './views/Header';
import Footer from './views/Footer';

import DriverModal from './views/modal/DriverModal';
import TipModal from './views/modal/TipModal';
import ForgotTipModal from "./views/modal/ForgotTipModal";
import PaymentModal from "./views/modal/PaymentModal";
import ThankYouModal from "./views/modal/ThankYouModal";

import Driver from './models/Driver';
import Rate from './models/Rate';
import Tip from './models/Tip';
import Modal from "./models/Modal";

function main() {
    m.stream = Stream;

    var model = createModel(),
        update = m.stream(),
        models = m.stream.scan(
            (mdl, mdlUpdate) => mdlUpdate(mdl), model, update
        ),
        actions = createActions(update)

    models.map(model => m.render(document.body, view(model, actions)))
}

function createModel() {
    return Object.assign(
        { busNum: 'Bus 558' },
        Modal.Initial(),
        Driver.Initial(),
        Rate.Initial(),
        Tip.Initial(),
    )
}

function createActions(update) {
    return Object.assign(
        Modal.Actions(update),
        Driver.Actions(update),
        Rate.Actions(update),
        Tip.Actions(update),
    );
}

var view = (function () {

    function view(model, actions) {
        return vwApp(model, actions)
    }

    function vwApp(model, actions) {
        return m(".app", 
            vwHeader(),
            vwBody(model, actions), 
            vwFooter(), 
            model.showDriverModal && vwDriverModal(model, actions),
            model.showTipModal && vwTipModal(model, actions),
            model.showForgotTipModal && vwForgotTipModal(model, actions),
            model.showPaymentModal && vwPaymentModal(model, actions),
            model.showThankYouModal && vwThankYouModal(model, actions),
        )
    }

    function vwHeader() {
        return m(Header);
    }

    function vwBody(model, actions) {
        return m(Main, { model, actions });
    }

    function vwFooter() {
        return m(Footer);
    }

    function vwDriverModal(model, actions) {
        return m(DriverModal, { model, actions });
    }

    function vwTipModal(model, actions) {
        return m(TipModal, { model, actions });
    }

    function vwForgotTipModal(model, actions) {
        return m(ForgotTipModal, { model, actions });
    }

    function vwPaymentModal(model, actions) {
        return m(PaymentModal, { model, actions });
    }

    function vwThankYouModal(model, actions) {
        return m(ThankYouModal, { model, actions });
    }

    return view
})()

main();