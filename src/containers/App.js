import React, { Component } from 'react';
import Particles from 'react-particles-js';
import SearchBox from '../components/SearchBox.js'
import Scroll from '../components/Scroll.js'
import PostList from '../components/PostList.js'
import './App.css';
import 'tachyons';

const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      posts: [],
      searchfield: '',
      order: 'ascending'
    }
  }

  componentDidMount() {
    //handling APIs here
    //getting users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => {
        const filteredUserAPI = user.map(person => {
          return person.name;
        })
        this.setState({users: filteredUserAPI})
      })
      .catch(error => console.log(error));


    //getting posts API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post => this.setState({posts: post}))
      .catch(error => console.log(error));

    
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  onOrderChange = (event) => {
    const { posts } = this.state;
    let sortOrder = event.target.value;

    switch(sortOrder) {
      case 'ascending':
        posts.sort((a,b) => {
          return a.id - b.id;
        })
        break;
      case 'descending':
        posts.sort((a,b) => {
          return b.id - a.id;
        })
        break;
      default:

    }

    this.setState({order: event.target.value});
  }

  render() {
    const { users, posts, searchfield } = this.state;
    const filterUser = posts.filter( post => {
      let searchName = !users[post.userId - 1] ? '' : users[post.userId - 1].toLowerCase();

      return (
          !searchfield ? true : 
            (
              //triggered when search input user ID
              post.userId === Number(searchfield) ||
              //triggered when search input user name
              searchName.includes(searchfield.toLowerCase())

            )
          );
    });

    return !posts.length && !users.length ?
      (
        <div className="App tc">

          <Particles className='particles'
                params={particleOptions}
          />
          <div >
            <h1>Coding Challenge</h1>
            <h2>Simple API Processing</h2>
            <SearchBox 
              onSearchChange={this.onSearchChange} 
              onOrderChange={this.onOrderChange}
              result={filterUser.length}
            />
            <hr />
          </div>
          <Scroll >
            <h1>LOADING. . .</h1>
          </Scroll>


          
        </div>

      ) :

      (

        <div className="App tc">

          <Particles className='particles'
                params={particleOptions}
          />
          <div>
          <h1>Coding Challenge</h1>
          <h2 className='app-banner'>Simple API Processing</h2>
          <SearchBox 
            onSearchChange={this.onSearchChange} 
            onOrderChange={this.onOrderChange}
            result={filterUser.length}
          />
          <hr />
          </div>
          <Scroll >
            <PostList post={filterUser} users={users}/>
          </Scroll>


          
        </div>
      );
  }
}

export default App;

