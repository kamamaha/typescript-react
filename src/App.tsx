import Counter from "./components/Counter2"


function App() {


  return (
    <>
      <Counter>{(num: number) => <>Current Count {num}</>}</Counter>
    </>
  )
}

export default App
