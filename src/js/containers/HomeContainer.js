import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticlesLayout from '../components/ArticleLayout';
import SearchContainer from './SearchContainer';
import { getArticlesAction, selectArticles, selectArticlesLoading, selectArticlesError } from '../ducks/articlesDuck';

class HomeContainer extends React.Component {
  static propTypes = {
    articlesLoading: PropTypes.bool,
    articlesError: PropTypes.string,
    articlesList: PropTypes.object,
    getArticlesAction: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getArticlesAction();
  }

  render() {
    const { props: { articlesLoading, articlesError, articlesList } } = this;
    if (articlesLoading) {
      return (<div>Loading</div>);
    }
    if (articlesError) {
      return <div>ERROR: {articlesError}</div>;
    }
    return (
      <div>
        <SearchContainer />
        <ArticlesLayout articles={articlesList} />
      </div>
    );
  }
}

const matchStateToProps = state => ({
  articlesList: selectArticles(state),
  articlesLoading: selectArticlesLoading(state),
  articlesError: selectArticlesError(state),
});
const matchDispatchToProps = dispatch => ({
  getArticlesAction: () => { dispatch(getArticlesAction()); },
});

export default connect(matchStateToProps, matchDispatchToProps)(HomeContainer);
