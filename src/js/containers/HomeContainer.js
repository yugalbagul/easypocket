import React from 'react';
import { connect  } from 'react-redux'
import { getArticlesAction, selectArticles, selectArticlesLoading, selectArticlesError } from '../ducks/articlesDuck'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderarticles = () => {
    const { props: { articlesList } } = this
    if(articlesList && articlesList.size){
      return articlesList.map((item) => {
        console.log(item)
        return <div className='App'>{item.given_title}</div>
      })
    } else {
      return <div>No aticles motherfucker</div>
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('props in home containe');
    console.log(nextProps)
  }

  componentDidMount() {
    this.props.getArticlesAction()
  }

  render() {
    const { props: { articlesLoading, articlesError } } = this
    if(articlesLoading){
      return (<div>Loading</div>)
    }
    if (articlesError){
      return <div>ERROR: {articlesError}</div>
    }
    return this.renderarticles()
  }
}

const matchStateToProps = (state) => ({
  articlesList: selectArticles(state),
  articlesLoading: selectArticlesLoading(state),
  articlesError: selectArticlesError(state),
})
const matchDispatchToProps = (dispatch) => ({
  getArticlesAction: () => { dispatch(getArticlesAction())}
})

export default connect(matchStateToProps, matchDispatchToProps)(HomeContainer);
