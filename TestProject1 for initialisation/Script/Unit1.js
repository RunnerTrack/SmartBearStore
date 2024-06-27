function Test1()
{
  Browsers.Item(btEdge).Run("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
  let browser = Sys.Browser();
  let browserWindow = browser.BrowserWindow(0);
  OCR.Recognize(browserWindow).BlockByText("DPS", spLeftMost).Click();
  browserWindow.Maximize();
  let page = browser.Page("https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/");
  let textbox = page.FindElement("#instasearch");
  textbox.Click();
  textbox.Drag(189, 19, -446, -8);
  textbox.SetText("watch");
  textbox.SetText("sport gadgets");
  textbox.SetText("shoes");
    textbox.SetText("ball");
  aqObject.CheckProperty(page.FindElement("//ul/li/a//span[contains(@class, 'd-block')]/span[contains(@class, 'd-block')]"), "contentText", cmpEqual, "Ball\nChair");
  aqObject.CheckProperty(page.FindElement("//span[contains(text(), 'Available in different colors')]"), "contentText", cmpEqual, "Available in different colors");
  aqObject.CheckProperty(page.FindElement("//span[contains(text(), 'Entry level training ball.')]"), "contentText", cmpEqual, "Entry level training ball.");
}
