import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './../actions';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.displayArticles = this.displayArticles.bind(this);
  }
  
  componentDidMount() {
    this.props.requestArticles();
  }

  displayArticles() {
    if(this.props.data && this.props.data.length) {
      const results = this.props.data.map((article) => {
        return (<li key={article.id}>
          <h4>{article.title}</h4>
          <p>{article.body}</p>
        </li>)
      })
      console.log(this.props.data);
      console.log(results);
      return results;
    } else {
      return <h2>Loading...</h2>
    }
  }

  render() {
    return (
      <div className='article'>
        <ul>
          {this.displayArticles()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.article.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestArticles: actions.requestArticles
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)