import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

/*React.render(
  <CommentBox />,
  document.getElementById('container')
);*/

ReactDOM.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('container')
);