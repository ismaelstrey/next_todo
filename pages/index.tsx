import { Inter } from '@next/font/google'
import { GetServerSideProps } from 'next'
import { getAllTodos, TodoDTO } from '../lib/db'

const inter = Inter({ subsets: ['latin'] })
export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await getAllTodos();
  return {
    props: {
      todos,
    }
  }
}
interface PostProps {
  todos: TodoDTO[]
}
const Home = ({ todos }: PostProps) => {
  return (
    <div>
      {JSON.stringify(todos, null, 4)}
    </div>
  )
}
