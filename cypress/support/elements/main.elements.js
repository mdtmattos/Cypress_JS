class MainElements {
    
    signUpMenu() {
        return cy.get('a[id="signin2"]');
    }

    logInMenu() {
        return cy.get('a[id="login2"]');
    }

    cartMenu() {
        return cy.get('a[id="cartur"]');
    }

    aboutUsMenu() {
        return cy.contains('a', "About us");
    }

    contactMenu() {
        return cy.contains('a', "Contact");
    }

    logoutMenu() {
        return cy.get('a[onclick="logOut()"]');
    }

    homeMenu() {
        return cy.get('ul[class="class="navbar-nav ml-auto"]').find('li').first();
    }

    nameOfUser() {
        return cy.get('a[id="nameofuser"]');
    }

    phonesCategory() {
        return cy.contains('a', 'Phones');
    }

    laptopsCategory() {
        return cy.contains('a', 'Laptops');
    }

    monitorsCategory() {
        return cy.contains('a', 'Monitors');
    }
}
export default MainElements