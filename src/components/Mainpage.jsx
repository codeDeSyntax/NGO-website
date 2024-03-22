import Categories from "./Categories"
import Welcomepage from "./Welcomepage"

const Mainpage = () => {
  return (
    <main className="w-full min-h-screen">
        <Welcomepage/>
        <Categories/>
    </main>
  )
}

export default Mainpage