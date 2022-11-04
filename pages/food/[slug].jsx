import { useRouter } from "next/router";
import data from '../../data/data'

const Food = () => {
    const {query} = useRouter()
    const {slug} = query;
    const food = data.foods.find((x) => x.slug === slug );
    if(!food){
        return <div>Food out of stock</div>
    }
  return (
    <div>

    </div>
  )
}

export default Food