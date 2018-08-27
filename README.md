FakeAuth
========

This project exists to act as a fake authentication service for end-to-end testing against third-party authentication providers.

Docker Images of this are available at https://hub.docker.com/r/sazzer/fakeauth/

The authentication services that this service can represent are as follows:

Google
------

Google Authentication is described at https://developers.google.com/identity/protocols/OpenIDConnect.

This service offers endpoints to start authentication and to retrieve the Access Token and ID Token from:

Starting Authentication is typically done by redirecting the user to https://accounts.google.com/o/oauth2/v2/auth. Instead you should use /google/o/oauth2/v2/auth underneath this service. All of the same parameters can be provided, but most will be ignored at present.

Retrieving an Access Token is typically done by making a POST call to https://www.googleapis.com/oauth2/v4/token. Instead you should use /google/oauth2/v4/token underneath this service. All of the same parameters can be provided, but most will be ignored at present.

This service will currently always react as if the user authenticate successfully, as if the Client ID and Secret were valid, and will always return the same details in the ID Token, and uses UUIDs for the Access Token and Authorization Code.

