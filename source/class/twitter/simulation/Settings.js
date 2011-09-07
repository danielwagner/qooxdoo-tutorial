qx.Class.define("twitter.simulation.Settings", {

  extend : simulator.unit.TestCase,
  
  members :
  {
    testChangeLanguage : function()
    {
      this.getQxSelenium().setSpeed(1000);
      // Open the Preferences window
      this.getQxSelenium().qxClick("qxhv=*/[@label=Preferences]");
      this.assertTrue(this.getQxSelenium().isElementPresent("qxhv=[@classname=twitter.SettingsWindow]"));
      // Click the radio button for Romanian and close the window
      this.getQxSelenium().qxClick("qxhv=[@classname=twitter.SettingsWindow]/*/[@label=Romanian]");
      this.getQxSelenium().qxClick("qxhv=[@classname=twitter.SettingsWindow]/qx.ui.container.Composite/[@icon=close\.gif]");
      this.assertFalse(this.getQxSelenium().isElementPresent("qxhv=[@classname=twitter.SettingsWindow]"));
      // Get the translated string for the Preferences button label 
      var translatedLabel = this.getQxSelenium().getRunInContext("qxhv=[@classname=twitter.MainWindow]/*/[@label=Preferences]",
      "return this.getLabel().translate().toString()");
      this.assertEquals("Preferinte", translatedLabel);
    }
  }
});