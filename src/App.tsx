import Header from './components/header/header'
import MemoList from './components/memo-list/memo-list'
import AddMemoButton from './components/add-memo-button/add-memo-button'
import './App.css'

export default function App() {
  return (
    <>
      <Header headerTitle="すべてのメモ"></Header>
      <MemoList></MemoList>
      <AddMemoButton></AddMemoButton>
    </>
  )
}