import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"

function App() {
  const [count, setCount] = useState<number>(1)    
  return (
    <>
      <Heading title={"Hello"}/>
      <Section title={"Diffrent title"}>This is my section-children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffie", "pizza", "dogs"]} render={(item: string) => <span className="gold">{item}</span>}/>
   </>
  )
}

export default App
