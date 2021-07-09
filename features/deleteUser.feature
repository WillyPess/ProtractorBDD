Feature: I going delete a user from Aura Push

Scenario: Delete a User

Given I will navigate to Aura Push page "https://aurapushui-dev.telefonicabigdata.com/login"
And I will login with a "admin@telefonica.com" user and "@admin" pass
And Navigate to User page
And Search by "teste editado" user
When I click in delete User
Then The user must be deleted.

