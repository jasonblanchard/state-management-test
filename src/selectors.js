import { createSelector } from 'reselect';

export default {
  getSelectedCat() {
    // if (!this.state.entities || !this.state.selectedCatId || !this.state.entities.cats) return undefined;
    // return this.state.entities.cats[this.state.selectedCatId]
    return createSelector(
      state => state.entities,
      state => state.selectedCatId,
      (entities, selectedCatId) => {
        if (!entities || !selectedCatId || !entities.cats) return undefined;
        return entities.cats[selectedCatId]
      }
    )(this.state);
  },

  getCats() {
    // if (!this.state.entities || !this.state.entities.cats) return undefined;
    // return Object.keys(this.state.entities.cats)
    //   .map(catId => this.state.entities.cats[catId]);
    return createSelector(
      state => state.entities,
      (entities) => {
        if (!entities || !entities.cats) return undefined;
        return Object.keys(entities.cats)
          .map(catId => entities.cats[catId]);
      }
    )(this.state)
  }
}
