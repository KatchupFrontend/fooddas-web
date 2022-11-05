import {data} from '../../../data/data'

export default function handler(req, res){
    const {fid} = req.query
    const food = data.foods.find((food) => food.id === parseInt(fid))
    res.status(200).json({food})

}