import { IMG_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    //console.log(resData.info)

    return (
        <div className="res-card">
            <img alt="Biryani1" src={IMG_CDN+resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(', ')}</h4>
            <p>{resData.avgRating} Stars</p>
            <p>30 Minutes</p>
        </div>
    )
}
export default RestaurantCard; 