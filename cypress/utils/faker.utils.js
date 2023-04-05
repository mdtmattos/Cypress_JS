import faker from '@faker-js/faker';
class FakerUtils {
    
    static generateRandomString(length) {
        return faker.internet.password(length, false, /[0-9A-Z]/);
    }

    static generateRandomNumber(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += faker.datatype.number({ min: 0, max: 9 });
        }
        return +result;
    }

    static generateRandomPhoneNumber() {
        return faker.phone.phoneNumber();
    }

    static generateRandomWords(length) {
        return faker.lorem.words(length);
    }

    static generateRandomPostalCode() {
        return faker.address.zipCode();
    }

    static generateRandomStateAbbreviation() {
        return faker.address.stateAbbr();
    }

    static generateRandomCityName() {
        return faker.address.cityName();
    }

    static generateRandomFirstName() {
        return faker.name.firstName();
    }

    static generateRandomLastName() {
        return faker.name.lastName();
    }

    static generateRandomStreetName() {
        return faker.address.streetName();
    }

    static generateRandomEmail() {
        return faker.internet.email();
    }

    static generateRandomCountry() {
        return faker.address.country();
    }
}
export default FakerUtils