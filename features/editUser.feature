Feature: I going edit a user to acess Aura Push

Scenario: Edit a User change his name

Given I will navigate to Aura Push page "https://aurapushui-dev.telefonicabigdata.com/login"
And I will login with a "admin@telefonica.com" user and "@admin" pass
And Navigate to User page
And Search by "usuario teste" user
When I click in Edit User
And I change name field  to "teste editado xx" and click in Save
Then The user must have name edited to "teste editado xx". 