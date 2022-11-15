import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Ranking extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1
          data-testid="ranking-title"
        >
          Ranking
        </h1>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Inicio
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Ranking);
