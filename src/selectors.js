export default {
  getSelectedCat() {
    if (!this.state.entities || !this.state.selectedCatId || !this.state.entities.cats) return undefined;
    return this.state.entities.cats[this.state.selectedCatId]
  },

  getCats() {
    if (!this.state.entities || !this.state.entities.cats) return undefined;
    return Object.keys(this.state.entities.cats)
      .map(catId => this.state.entities.cats[catId]);
  }
}
