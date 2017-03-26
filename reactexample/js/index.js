"use strict";

var ServiceChooser = React.createClass({
  displayName: "ServiceChooser",

  getInitialState: function getInitialState() {
    return {
      total: 0
    };
  },

  addTotal: function addTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  },

  render: function render() {

    var self = this;

    var services = this.props.items.map(function (s) {

      return React.createElement(Service, { name: s.name,
        price: s.price,
        active: s.active,
        addTotal: self.addTotal
      });
    });

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " Our services "
      ),
      React.createElement(
        "div",
        { id: "services" },
        " ",
        services,
        React.createElement(
          "p",
          { id: "total" },
          " Total ",
          React.createElement(
            "b",
            null,
            " $ ",
            this.state.total.toFixed(2),
            " "
          )
        )
      )
    );
  }
});

var Service = React.createClass({
  displayName: "Service",

  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },

  clickHandler: function clickHandler() {

    var active = !this.state.active;

    this.setState({
      active: active
    });

    this.props.addTotal(active ? this.props.price : -this.props.price);
  },

  render: function render() {

    return React.createElement(
      "p",
      { className: this.state.active ? 'active' : '',
        onClick: this.clickHandler },
      " ",
      this.props.name,
      " ",
      React.createElement(
        "b",
        null,
        " $ ",
        this.props.price.toFixed(2),
        " "
      ),
      " "
    );
  }

});

var services = [{
  name: 'HealthCheckup',
  price: 40
}, {
  name: 'Treatment',
  price: 10
}, {
  name: 'Medication',
  price: 40
}, {
  name: 'Allergy',
  price: 25
}, {
  name: 'Surgery',
  price: 25
}, {
  name: 'Night Stay',
  price: 25
}, {
  name: 'Other',
  price: 5
}];

ReactDOM.render(React.createElement(ServiceChooser, { items: services
}), document.getElementById('container'));