Feature: I going add a new user to acess Aura Push

Scenario: Add a new Admin User

    Given I will navigate to Aura Push page "https://aurapushui-dev.telefonicabigdata.com/login"
    And I will login with a "admin@telefonica.com" user and "@admin" pass
    And Navigate to User page
    When I click in Add User
    And I fill all fields correctly, select Admin profile and click in Save
    Then A new Admin user must be added.