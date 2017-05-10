import ReactDOM from 'react-dom'
import React from 'react'

export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
    //TODO: サーバにデータを送信
    React.findDOMNode(this.refs.author).value = '';
    React.findDomNode(this.refs.text).value = '';
  }
  
  render() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
}