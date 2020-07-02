Feature: Validate grid dialog functionality
	@P1
  Scenario: Validate dialog should appear, when clicks all icons in the outer perimeter
    Given User launch grid application
    When Select all icons from outer perimeter
    Then Validate dialog should get appear at the top of page
 @P1
  Scenario: Validate user should be able to define size of the grid in dialog input box.
	    Scenario Outline: Validate user able to set grid size successfully for valid input
		  Given User launch grid application
	    When Select all icons from outer perimeter
	    When User sets grid size to <size>
	    Then Verify grid size is set to <size> correctly

	    Examples: 
	      | size |
	      |3 |
	      |9 |
	      |4 |
	      |8 |
  @P2
  Scenario: Validate user should be able to define size of the grid in dialog input box.
	    Scenario Outline: Validate user should get error message for invalid grid size
		  Given User launch grid application
	    When Select all icons from outer perimeter
	    When User sets grid size to <size>
	    Then Verify erros messge displayed from invalid size input
	
	    Examples: 
	      | size |
	      | 10|
	      | 2 |
	      | -1|
	      | "abc"|
	      
    