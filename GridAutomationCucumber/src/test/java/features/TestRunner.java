package features;

import org.junit.runner.RunWith;
import cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = { "pretty", "html:reports/test-report" }, glue = "stepdefinitions")
// tags = { "@P1"},
public class TestRunner {

}
