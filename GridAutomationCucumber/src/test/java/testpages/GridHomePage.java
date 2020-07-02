package testpages;

import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import common.BaseTestPage;

public class GridHomePage extends BaseTestPage{

	@FindBy(css="div [class=\"mainGrid\"] div[class=\"row\"]")
	List<WebElement> rowsFromMainGrid;
	
	public GridHomePage() {
		super();	
		PageFactory.initElements(driver, this);
	}

	/**
	Select All Icons From Outer Grid
	 */
	public void selectAllIconsFromOuterGrid() {
		int rowCount=rowsFromMainGrid.size();
		if(rowCount>=3) {
			String dynamicLocGridIcons="//div[@class='mainGrid']//div[@class='row'][%s]//div[@class='icon']";
			for(int i=1;i<=rowCount;i++) {
				String dynamicLocGridIconsLoc=String.format(dynamicLocGridIcons, i);
				List<WebElement> gridIconList=driver.findElements(By.xpath(dynamicLocGridIconsLoc));

				if(i==1 || i==rowCount) {
					//Select all icons
					for(int j=0;j<gridIconList.size();j++) {
						gridIconList.get(j).click();
					}
				}else{
					//select only first and last
					gridIconList.get(0).click();
					gridIconList.get(gridIconList.size()-1).click();
				}
			}
			
		}else {
			System.out.println("Grid Object not loaded successfully.");
		}
	}
	
	/**
	Check wheather dialog is displayed
	 */
	public boolean isDialogDisplayedFroPage() {
		try {
			driver.switchTo().alert().accept();;
			return true;
		} catch (NoAlertPresentException ex) {
			return false;
		}
	}
	
	/**
	Set Grid size
	@param gridSize
	 */
	public void setGridSizeTo(Object gridSize) {
	System.out.println();
		try {
			driver.switchTo().alert().sendKeys(gridSize.toString());
			driver.switchTo().alert().accept();

		} catch (NoAlertPresentException ex) {
			throw ex;
		}
	}
	
	/**
	Check Grid displayed Correctly
	@param gridSize
	 */
	public boolean checkGridDisplayedCorrectlyForSize(int gridSize) {
		int rowCount=rowsFromMainGrid.size();
		if(rowCount==gridSize){
			String dynamicLocGridIcons="//div[@class='mainGrid']//div[@class='row'][%s]//div[@class='icon']";
			for(int i=1;i<=rowCount;i++) {
				String dynamicLocGridIconsLoc=String.format(dynamicLocGridIcons, i);
				List<WebElement> cloumnList=driver.findElements(By.xpath(dynamicLocGridIconsLoc));

				if(cloumnList.size()!=gridSize)
					return false;
			}
			return true;
		}else {
			return false;
		}
		
	}
	
	/**
	Set Grid size
	@param gridSize
	 */
	public String getErrorDialogMsg() {
	System.out.println();
		try {
			String alertText= driver.switchTo().alert().getText();
			driver.switchTo().alert().accept();
			return alertText;
		} catch (NoAlertPresentException ex) {
			return "No Alert";
		}
	}
}
