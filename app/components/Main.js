var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
        <div className='main-container'>
          <div> Hello from Main! </div>
          {this.props.children}
        </div>
    )
  }
});

module.exports = Main;
