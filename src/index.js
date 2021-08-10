import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApproveCard from './ApproveCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" status="Nice Blog!" avatar={faker.image.avatar()} />
      </ApproveCard>
      <ApproveCard>
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" status="That was great!" avatar={faker.image.avatar()} />
      </ApproveCard>
      <ApproveCard>
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" status="I was wonderful!" avatar={faker.image.avatar()} />
      </ApproveCard>
    </div>
  );
};

ReactDOM.render(
  <App />, document.getElementById('root')
);