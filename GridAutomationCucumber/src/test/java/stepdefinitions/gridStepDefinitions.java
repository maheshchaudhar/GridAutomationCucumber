package stepdefinitions;

import org.junit.Assert;

import cucumber.annotation.After;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;
import testpages.GridHomePage;

public class gridStepDefinitions {
	GridHomePage gridHomePage;
	
	@Given("^User launch grid application$")
	public void User_launch_grid_application() {
		gridHomePage=new GridHomePage();
	}

	@When("^Select all icons from outer perimeter$")
	public void Select_all_icons_from_outer_perimeter() {
		gridHomePage.selectAllIconsFromOuterGrid();
	}

	@Then("^Validate dialog should get appear at the top of page$")
	public void Validate_dialog_should_get_appear_at_the_top_of_page() {
		Assert.assertTrue(gridHomePage.isDialogDisplayedFroPage());
		
		gridHomePage.quitDriverSession();
	}
	
	@When("^User sets grid size to (\\d+)$")
	public void User_sets_grid_size_to(int gridSize) {
		  gridHomePage.setGridSizeTo(gridSize);
	}

	@Then("^Verify grid size is set to (\\d+) correctly$")
	public void Verify_grid_size_is_set_to_correctly(int gridSize) {
		boolean checkGridSize=gridHomePage.checkGridDisplayedCorrectlyForSize(gridSize);
	    gridHomePage.quitDriverSession();
	    Assert.assertTrue("Grid row and column size not matched.",checkGridSize);
	}

	@When("^User closes grid application$")
	public void User_closes_grid_application() {
		gridHomePage.quitDriverSession();
	}
	@When("^User sets grid size to \"([^\"]*)\"$")
	public void User_sets_grid_size_to(String arg1) {
		  gridHomePage.setGridSizeTo(arg1);
	}

	
	@When("^Verify not a good size error message displayed$")
	public void verifyWrongSizeSelectionError() {
		String errorMsg=gridHomePage.getErrorDialogMsg();
		gridHomePage.quitDriverSession();
		Assert.assertEquals("Not a good size!", errorMsg);
	}
	
	
	@When("^User sets grid size to -(\\d+)$")
	public void User_sets_grid_size_to_(int gridSize) {
		  gridHomePage.setGridSizeTo(gridSize);
	}

}
