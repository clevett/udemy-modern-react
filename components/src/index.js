import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:55pm;"
          content="NICE!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 2:00am;"
          content="Happy Thoughts"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Yesterday at 5:00pm"
          content="Looks great"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));