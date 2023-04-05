import FakerUtils from "../../utils/faker.utils";

class AccountFactory {
 
    userName() {
        return FakerUtils.generateRandomFirstName() + " " + FakerUtils.generateRandomLastName();
    }

    password() {
        return FakerUtils.generateRandomNumber(5);
    }
}
export default AccountFactory