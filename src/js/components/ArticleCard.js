import React from 'react';
import PropTypes from 'prop-types';

class ArticleCard extends React.Component {
  static propTypes = {
    article: PropTypes.object.isRrquired,
  }
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { props: { article } } = this;
    return (
      <div className="article-card flx flx-dir-col">
        <div className="article-title"><a href={article.given_url} target="_blank">{article.given_title || article.given_url}</a></div>
        <div className="article-card-image">{article.has_image !== '0' && <div className="flx-self-center"><img src={article.image.src} width={100} height={100} alt="article-logo" /></div>}</div>
        <div className="article-card-footer" />

      </div>
    );
  }
}

export default ArticleCard;
