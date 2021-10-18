import React from "react";

import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import PersonView from "./person-view";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({ person, loading: false });
  };

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from the list</span>;
    }

    const { person, error, loading } = this.state;

    const hasData = !(loading || error);

    const errorIndicator = error ? <Error /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView person={person} /> : null;

    return (
      <div className="person-details card">
        {errorIndicator}
        {loading}
        {content}
      </div>
    );
  }
}
