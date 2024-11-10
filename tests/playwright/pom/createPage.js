class CreatePage {
    constructor(page) {
      this.page = page;
      this.createButton = page.locator('//html/body/div[1]/div/div[2]/div[1]/button/span');
      this.sineWaveGenerator = page.locator('//html/body/div[2]/ul/li[19]');
      this.titleInput = page.getByLabel('Title', { exact: true });
      this.saveButton = page.getByLabel('Save');
    }
  
    async clickCreateButton() {
      await this.createButton.click();
    }
  
    async selectSineWaveGenerator() {
      await this.sineWaveGenerator.click();
    }
  
    async fillTitle(title) {
      await this.titleInput.click();
      await this.titleInput.fill(title);
    }
  
    async clickSaveButton() {
      await this.saveButton.click();
    }
  }
  
  module.exports = { CreatePage };