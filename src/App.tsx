import BeerCard, { type BeerType } from "./components/BeerCard"
import { useEffect, useState } from "react"


const App = () => {

    const [beers, setBeers] = useState<BeerType[]>([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setBeers(data))
  }, [])


  return (
    <div className="beerCardWrapper">
      {beers.map(beers => <BeerCard {...beers} />)}
    </div>
  )
}

export default App