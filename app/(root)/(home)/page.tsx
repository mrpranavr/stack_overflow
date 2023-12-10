import HomeFilters from '@/components/Home/HomeFilters';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';
import QuestionCard from '@/components/shared/QuestionCard';
import LocalSearchBar from '@/components/shared/search/LocalSearchBar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filters';
import Link from 'next/link';

export default function Home() {
  const questions = [
    {
      _id: 1,
      title: 'How to create a new project in React?',
      tags: [
        { _id: 1, name: 'Javascript' },
        { _id: 2, name: 'React' },
      ],
      upvotes: 45400023,
      answers: [],
      views: 15000,
      author: {
        _id: 'user_1',
        name: 'John Doe',
        picture: 'url_to_user_picture',
      },
      createdAt: new Date('2021-09-01T12:00:00.000Z'),
    },
    {
      _id: 2,
      title: 'How to use hooks in React?',
      tags: [
        { _id: 3, name: 'React' },
        { _id: 4, name: 'Hooks' },
      ],
      upvotes: 15,
      answers: [],
      views: 120,
      author: {
        _id: 'user_2',
        name: 'Jane Smith',
        picture: 'url_to_user_picture',
      },
      createdAt: new Date('2021-09-02T13:30:00.000Z'),
    },
    {
      _id: 3,
      title: 'What is the difference between let and const in JavaScript?',
      tags: [
        { _id: 5, name: 'Javascript' },
        { _id: 6, name: 'Programming' },
      ],
      upvotes: 8,
      answers: [],
      views: 80,
      author: {
        _id: 'user_3',
        name: 'Bob Johnson',
        picture: 'url_to_user_picture',
      },
      createdAt: new Date('2021-09-03T15:45:00.000Z'),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button
            className="primary-gradient min-h-[48px] px-4 py-3 
          !text-light-900"
          >
            Ask a question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for Questions here ..."
          otherClasses="flex-1"
        />{' '}
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[270px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upvotes={question.upvotes}
              answers={question.answers}
              views={question.views}
              author={question.author}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a question and kisckstart the
            discussion. Your query could be the next big thing others learn from.
            Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
