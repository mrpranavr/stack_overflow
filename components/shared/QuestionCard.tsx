import React from 'react';
import RenderTag from './RenderTag';
import Link from 'next/link';
import Metric from './Metric';
import { formatNumberWithExtension, getTimeStamps } from '@/lib/utils';

interface QuestionCardProps {
  _id: number;
  title: string;
  tags: { _id: number; name: string }[];
  upvotes: number;
  answers: Array<object>;
  views: number;
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  upvotes,
  answers,
  views,
  author,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamps(createdAt)}
          </span>
        </div>
        <Link href={`/question/${_id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1">
            {title}
          </h3>
        </Link>
      </div>

      {/* If signed in add edit delete actions */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="mt-6 flex items-start justify-between max-sm:flex-col sm:gap-6">
        <Metric
          imgUrl="assets/icons/avatar.svg"
          alt="upvotes"
          value={author.name}
          title={` - ${getTimeStamps(createdAt)}`}
          href={`/profile/${author._id}`}
          textStyles="body-medium text-dark400_light800"
          isAuthor
        />
        <div className="flex flex-wrap gap-3 max-sm:mt-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatNumberWithExtension(upvotes)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatNumberWithExtension(answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="views"
            value={formatNumberWithExtension(views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
