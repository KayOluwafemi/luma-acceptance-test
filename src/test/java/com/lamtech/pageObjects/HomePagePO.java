package com.lamtech.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePO {

    //Element locators
    @FindBy(linkText = "Create an Account")
    public static WebElement CreateAccountLink;


    //Initialise elements using selenium web driver
    public HomePagePO(WebDriver driver){
        PageFactory.initElements(driver, this);
    }


    //Page Method
    public void clickCreateAccountLink(){
        CreateAccountLink.click();
    }







}
