export default {
  // Could these be memoized?
  getSelectedCat() {
    console.log('selectors.getSelectedCat called');
    if (!this.state.entities || !this.state.selectedCatId || !this.state.entities.cats) return undefined;
    return this.state.entities.cats[this.state.selectedCatId]
  },

  getCats() {
    console.log('selectors.getCats called');
    if (!this.state.entities || !this.state.entities.cats) return undefined;
    return Object.keys(this.state.entities.cats)
      .map(catId => this.state.entities.cats[catId]);
  }
}
