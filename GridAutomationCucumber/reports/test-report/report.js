$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('features\GridTest.feature');
formatter.feature({
  "line": 1,
  "name": "Validate grid dialog functionality",
  "description": "",
  "id": "validate-grid-dialog-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate dialog should appear, when clicks all icons in the outer perimeter",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-dialog-should-appear,-when-clicks-all-icons-in-the-outer-perimeter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@P1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Validate dialog should get appear at the top of page",
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 10362002200,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 436867900,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Validate_dialog_should_get_appear_at_the_top_of_page()"
});
formatter.result({
  "duration": 749062800,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate user should be able to define size of the grid in dialog input box.",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-be-able-to-define-size-of-the-grid-in-dialog-input-box.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@P1"
    }
  ]
});
formatter.scenario({
  "line": 17,
  "name": "Validate user able to set grid size successfully for valid input",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-able-to-set-grid-size-successfully-for-valid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User sets grid size to 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify grid size is set to 3 correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9389617600,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 457131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 13916900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "gridStepDefinitions.Verify_grid_size_is_set_to_correctly(int)"
});
formatter.result({
  "duration": 781075900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate user able to set grid size successfully for valid input",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-able-to-set-grid-size-successfully-for-valid-input;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User sets grid size to 9",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify grid size is set to 9 correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9403993300,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 461632000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 17338400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 27
    }
  ],
  "location": "gridStepDefinitions.Verify_grid_size_is_set_to_correctly(int)"
});
formatter.result({
  "duration": 877803400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate user able to set grid size successfully for valid input",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-able-to-set-grid-size-successfully-for-valid-input;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User sets grid size to 4",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify grid size is set to 4 correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9432589000,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 447312300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 23295100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "gridStepDefinitions.Verify_grid_size_is_set_to_correctly(int)"
});
formatter.result({
  "duration": 816314300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate user able to set grid size successfully for valid input",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-able-to-set-grid-size-successfully-for-valid-input;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User sets grid size to 8",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Verify grid size is set to 8 correctly",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9397521300,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 444161800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 15557800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "gridStepDefinitions.Verify_grid_size_is_set_to_correctly(int)"
});
formatter.result({
  "duration": 866716100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate user should be able to define size of the grid in dialog input box.",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-be-able-to-define-size-of-the-grid-in-dialog-input-box.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@P2"
    }
  ]
});
formatter.scenario({
  "line": 31,
  "name": "Validate user should get error message for invalid grid size",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-get-error-message-for-invalid-grid-size;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User sets grid size to 10",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verify erros messge displayed from invalid size input",
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9436905900,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 445515400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 11230600,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.verifyWrongSizeSelectionError()"
});
formatter.result({
  "duration": 734902600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate user should get error message for invalid grid size",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-get-error-message-for-invalid-grid-size;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User sets grid size to 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verify erros messge displayed from invalid size input",
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9440696500,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 439629100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(int)"
});
formatter.result({
  "duration": 12126500,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.verifyWrongSizeSelectionError()"
});
formatter.result({
  "duration": 738182200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate user should get error message for invalid grid size",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-get-error-message-for-invalid-grid-size;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User sets grid size to -1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verify erros messge displayed from invalid size input",
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9390851200,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 445005800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to_(int)"
});
formatter.result({
  "duration": 12827400,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.verifyWrongSizeSelectionError()"
});
formatter.result({
  "duration": 738537400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Validate user should get error message for invalid grid size",
  "description": "",
  "id": "validate-grid-dialog-functionality;validate-user-should-get-error-message-for-invalid-grid-size;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User launch grid application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Select all icons from outer perimeter",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User sets grid size to \"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Verify erros messge displayed from invalid size input",
  "keyword": "Then "
});
formatter.match({
  "location": "gridStepDefinitions.User_launch_grid_application()"
});
formatter.result({
  "duration": 9401894900,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 512899400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 24
    }
  ],
  "location": "gridStepDefinitions.User_sets_grid_size_to(String)"
});
formatter.result({
  "duration": 18578900,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.verifyWrongSizeSelectionError()"
});
formatter.result({
  "duration": 825697800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cNo[t a good size!]\u003e but was:\u003cNo[ Alert]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefinitions.gridStepDefinitions.verifyWrongSizeSelectionError(gridStepDefinitions.java:58)\r\n\tat ✽.Then Verify erros messge displayed from invalid size input(features\\GridTest.feature:27)\r\n",
  "status": "failed"
});
});