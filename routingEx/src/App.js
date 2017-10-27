import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routerx from './components/routerX';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {





  render() {
    return (
        <div>
            <Header />
            <Main />
      </div>
    );
  }
}

const Header = () => <div><ul>
    <li><Link to={{ pathname: '/images' }}>images</Link></li>
    <li><Link to={{ pathname: '/articles' }}>articles</Link></li>
    <li><Link to={{ pathname: '/about' }}>about</Link></li>
</ul></div>
const Main = () => <div><Switch>
    <Route path='/images' component={Images} />
    <Route path='/articles' component={Articles} />
    <Route path='/about' component={About} />
</Switch>

</div>

const Images = () => <h1>This is images, This component is under construction</h1>;
class Articles extends Component {

    constructor() {
        super();
        this.state = {
            articles: [{ id: 1, author: 'i am an author', title: 'book1' },
                { id: 2, author: 'i am another author', title: 'book2' }]
        }
    }

    render() {
        const mapped = this.state.articles.map(function (element) {
            return <tr><td>{element.id}</td><td>{element.author}</td><td><Link to={{ pathname: "/articles/" + element.title}}>{element.title}</Link></td></tr>})
        return (<div><h1>this is articles</h1><table>
            <tr><th>id</th><th>author</th><th>title</th></tr>{mapped}
        </table>
            <div className="articles">
            <Switch>
                <Route path='/articles/book1' component={book1} />
                <Route path='/articles/book2' component={book2} />
            </Switch>
                </div>
        </div>)
    }

}

const book1 = () => <div><p>this is some info on book 1</p><img src='https://image.slidesharecdn.com/book1speaksampleint-130817072426-phpapp01/95/book1-speak-direct-method-english-sample-international-version-1-638.jpg?cb=1376726019'/></div>
const book2 = () => <div><p>this is some info on book 2</p><img src='http://vignette1.wikia.nocookie.net/gravityfalls/images/a/a8/S1e4_book_2.png/revision/latest?cb=20130821064947'/></div>

const About = () => <div><h1>This is about us, We are a large corporation with more than 10000 employees. Contact us if you need a job and feel that you have some skills</h1>
    Full name: <input /><br /><br /><br />
    <span>Message:</span> <textarea />
</div>;

export default App;
