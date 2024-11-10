class HeaderPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole('searchbox', { name: 'Search Input' });
    this.objectResults = page.getByLabel('Object Results');
  }

  async searchForObject(objectName) {
    await this.searchInput.click();
    await this.searchInput.fill(objectName);
  }

  async selectObjectResult(objectName) {
    await this.objectResults.getByText(objectName).click();
  }
}

module.exports = { HeaderPage };
