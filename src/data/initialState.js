import { format } from 'date-fns';

const initialState = {
  initialTodos: [
    {
      id: 1,
      title: '오늘의 할일',
      content: '코딩 공부하기',
      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 2,
      title: 'todolist 구현하기',
      content: ' react redux로 구현하기',
      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 3,
      title: '매일 운동하기',
      content: '아침 7시반 기상 후 운동하기',

      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 4,
      title: '코딩 테스트',
      content: 'javascript로 코딩테스트 공부하기',
      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 4,
      title: '강의 듣기',
      content: 'react 유데미 강의듣기',
      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    {
      id: 5,
      title: '집안일 하기',
      content: '빨래,청소,설거지 하기',
      isDone: false,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
  ],
  
};

export const { initialTodos, tags } = initialState;