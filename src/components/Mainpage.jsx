import Categories from "./Categories"
import Trust from "./Trust"
import Welcomepage from "./Welcomepage"

const Mainpage = () => {
  return (
    <main className="w-full min-h-screen">
        <Welcomepage/>
        <Trust/>
        <Categories/>
    </main>
  )
}

export default Mainpage