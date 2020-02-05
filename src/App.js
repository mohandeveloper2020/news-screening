import React, { Component } from 'react';
import './App.css';
import NewsList from '../src/NewsList';

class App extends Component {
  state = {
    news: []
  }

  // componentDidMount() {
  //   fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c13a32e23b643989e19a722674ca873`)
  //     .then((response) => {
  //       // console.log(response)
  //       return response.json();
  //     })
  //     .then((json) => {
  //       // console.log(json.articles);
  //       this.setState({ news: json.articles });
  //     })
  // }

  componentDidMount() {
    const google = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6c13a32e23b643989e19a722674ca873`;
    const techcrunch = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c13a32e23b643989e19a722674ca873`;
    
    Promise.all( [fetch(`${techcrunch}`), fetch(`${google}`)] )
      .then(
        ([response1, response2]) => {
          return Promise.all( [response1.json(), response2.json()] );
        }
      )
      .then(
        (json) => {
          console.log(json[0].articles);
          console.log(json[1].articles);
          const newsAll = json[0].articles.concat(json[1].articles);

          console.log(newsAll);
          this.setState({ news: newsAll});
        }
      )
  
  }

  render() {
    return (
        <NewsList list={this.state.news} />
    );
  }
}

export default App;
