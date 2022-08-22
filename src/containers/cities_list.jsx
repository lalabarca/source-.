import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Import action setCities
import { setCities } from "../actions";

// Import container
import City from "./city";


class CitiesList extends Component {

  componentWillMount() {
    // Ajouter l'action SET_CITIES TRÈS IMPORTANT
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.slug} />)}
      </div>
    );
  }
}

// relie l'action au container
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setCities: setCities},
    dispatch
  );
}

// relie le state au container
function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
