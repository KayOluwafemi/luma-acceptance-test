$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountMangement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cFirstname\u003e\" \"\u003cLastname\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account creation is successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 14,
      "id": "account-management;create-an-account-with-a-valid-email;;1"
    },
    {
      "cells": [
        "Mark",
        "Jackson",
        "mjack3@gmail.com",
        "Test-123",
        "Test-123"
      ],
      "line": 15,
      "id": "account-management;create-an-account-with-a-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AccountManagement"
    },
    {
      "line": 4,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Mark\" \"Jackson\" \"mjack3@gmail.com\" \"Test-123\" \"Test-123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Account creation is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.iAmCreateAnAccountPage()"
});
formatter.result({
  "duration": 23360203460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 9
    },
    {
      "val": "Jackson",
      "offset": 16
    },
    {
      "val": "mjack3@gmail.com",
      "offset": 26
    },
    {
      "val": "Test-123",
      "offset": 45
    },
    {
      "val": "Test-123",
      "offset": 56
    }
  ],
  "location": "AccountManagementSteps.iEnter(String,String,String,String,String)"
});
formatter.result({
  "duration": 1876911775,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.iClickOnCreateAccount()"
});
formatter.result({
  "duration": 2180046724,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.accountCreationIsSuccessful()"
});
formatter.result({
  "duration": 115035137,
  "status": "passed"
});
});