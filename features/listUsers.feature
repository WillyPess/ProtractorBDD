Feature: I going list users from Aura Push

Scenario: List users from Aura push

Given I will navigate to Aura Push page "https://aurapushui-dev.telefonicabigdata.com/login"
And I will login with a "admin@telefonica.com" user and "@admin" pass
And Navigate to User page
Then The a list with users must be shown.

