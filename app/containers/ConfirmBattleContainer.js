var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log("getInitialState");
    return {
        isLoading: true,
        playerInfo: []
    }
  },
  componentWillMount: function(){
    console.log("componentWillMount");

  },
  componentDidMount: function () {
    console.log("componentDidMount");
    var query = this.props.location.query;
    // Fetch info from github then update state
  },
  componentWillReceiveProps: function(){
    console.log("componentWillReceiveProps");
  },
  componentWillUnMount: function(){
    console.log("componentWillUnMount");

  },
  render: function () {
    return (
        <ConfirmBattle
            isLoading={this.state.isLoading}
            playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;