export type BeerType = {
    image:string,
    name: string,
    abv: string,
    volume: string,
    price: number,
    available: boolean
}

const BeerCard = (props:BeerType) => {

  
  return (
    <div className='beerCard'>

      <img src={props.image} alt=""/>
      <strong>{props.name} {props.abv} {props.volume}</strong>
      <p>{props.price} Ft</p>
      <p className={props.available ? "available" : "notAvailable"}>{props.available ? "Raktáron" : "Nincs Raktáron"}</p>
    </div>
  )
}

export default BeerCard