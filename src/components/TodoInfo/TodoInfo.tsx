import React, { useState } from 'react';
import usersFromServer from '../../api/users';
import classNames from 'classnames';
import { Todo, User } from '../../types/types';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = props => {
  const { todo } = props;
  const [users] = useState<User[]>(usersFromServer);
  const userInfo = users.find((user: User) => user.id === todo.userId);

  return (
    <article
      key={todo.id}
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={userInfo} />
    </article>
  );
};
