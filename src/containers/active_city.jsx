import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveCity extends Component {
  render () {
    let card = null;

    if (this.props.activeCity) {
      card = <div className="active-city">
        <h1>{this.props.activeCity.name}</h1>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt="picture of city" />
      </div>
    }

    return (
      <div>
        {card}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
