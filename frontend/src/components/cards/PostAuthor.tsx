import React, { ReactElement } from 'react';
import classNames from 'classnames';


export default function PostAuthor({
  post,
  selectedComment,
  className,
}: {
  post: any;
  selectedComment: Comment;
  className?: string;
}): ReactElement {
  if (!post.author) {
    return <></>;
  }

  return (
    <div
      className={classNames(
        'flex items-center font-bold typo-footnote text-theme-status-help',
        selectedComment ? 'invisible' : "",
        className,
      )}
    >
      {/* <FeatherIcon className="mr-1 text-xl" /> */}
      <span className="truncate">{post.author.name}</span>
    </div>
  );
}
