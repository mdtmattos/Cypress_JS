import FakerUtils from "../../utils/faker.utils";

class PlaceOrderFactory {
 
    country() {
        return FakerUtils.generateRandomCountry();
    }

    city() {
        return FakerUtils.generateRandomCityName();
    }

    card() {
        return FakerUtils.generateRandomNumber(16);
    }
}
export default PlaceOrderFactory