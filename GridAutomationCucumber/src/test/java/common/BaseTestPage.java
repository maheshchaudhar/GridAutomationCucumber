package common;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import commonutilities.CommonUtilities;

public class BaseTestPage {

	public Properties prop;
	public static WebDriver driver;

	/**
	 * BaseTestPage Constructer, it will load properties and create diver object
	 */
	public BaseTestPage() {
		prop = CommonUtilities.loadPropertyFile();
		createDriver();
	}

	/**
	 * Create Driver Object
	 */
	public void createDriver() {
		String currentDirectory = System.getProperty("user.dir");
		switch (prop.getProperty("browser")) {
		case "chrome":
			ChromeOptions chromeOptions = new ChromeOptions();
			// Set Driver Executable
			System.setProperty("webdriver.chrome.driver", currentDirectory + "/webdriver/chromedriver.exe");
			driver = new ChromeDriver(chromeOptions);

			// Add Implicit Timeout
			driver.manage().timeouts().implicitlyWait(Integer.parseInt(prop.getProperty("timeout")), TimeUnit.SECONDS);
			driver.manage().window().maximize();
			driver.get(prop.getProperty("baseUrl"));
			break;

		case "firefox":
			FirefoxOptions firefoxOptions = new FirefoxOptions();
			System.setProperty("webdriver.gecko.driver", currentDirectory + "/webdriver/geckodriver.exe");
			driver = new FirefoxDriver(firefoxOptions);
			break;

		default:
			System.out.println("Wrong browser name provided");
			break;
		}
	}

	/**
	 * Create Driver Object
	 */
	public void quitDriverSession() {
		driver.quit();
	}

}
