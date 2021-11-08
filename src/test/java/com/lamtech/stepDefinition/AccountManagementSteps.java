package com.lamtech.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^I am create an account page$")
    public void iAmCreateAnAccountPage() {
        //Define Browser
        WebDriverManager.chromedriver().setup();
        //Open Browser
        driver = new ChromeDriver();
        driver.get("https://magento2-demo.magebit.com/");
        driver.findElement(By.linkText("Create an Account")).click();



    }

    @When("^I enter \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void iEnter(String Firstname, String Lastname, String Email, String Password, String ConfirmPassword) throws Throwable {
       driver.findElement(By.id("firstname")).sendKeys(Firstname);
       driver.findElement(By.id("lastname")).sendKeys(Lastname);
       driver.findElement(By.id("email_address")).sendKeys(Email);
       driver.findElement(By.id("password")).sendKeys(Password);
       driver.findElement(By.id("password-confirmation")).sendKeys(ConfirmPassword);



    }

    @And("^I click on create account$")
    public void iClickOnCreateAccount() {

    }

    @Then("^Account creation is successful$")
    public void accountCreationIsSuccessful() {

    }
}
