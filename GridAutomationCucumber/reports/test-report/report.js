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
  "duration": 10380133100,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Select_all_icons_from_outer_perimeter()"
});
formatter.result({
  "duration": 476873200,
  "status": "passed"
});
formatter.match({
  "location": "gridStepDefinitions.Validate_dialog_should_get_appear_at_the_top_of_page()"
});
formatter.result({
  "duration": 760535600,
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
});