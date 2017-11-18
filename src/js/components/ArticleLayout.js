import React from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

class ArticlesLayout extends React.Component {
  static propTypes = {
    articles: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderArticles = () => {
    const { props: { articles } } = this;
    return articles.map(item => <ArticleCard article={item} key={item.item_id} />);
  }

  render() {
    const { props: { articles } } = this;
    if (articles.size) {
      return (
        <div className="flx articles-layout">
          {this.renderArticles()}
        </div>
      );
    }
    return <div>No articles found</div>;
  }
}

export default ArticlesLayout;
