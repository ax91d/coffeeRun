(function (window) {
    'use strict';
    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const App = window.App;
    const Truck = App.Truck;
    const DataStore = App.DataStore;
    const FormHandler = App.FormHandler;
    let myTruck = new Truck('ncc-1701', new DataStore());
    let formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    window.myTruck = myTruck;
})(window);