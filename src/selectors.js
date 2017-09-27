export default {
  getSelectedCat: state => {
    if (!state.entities || !state.selectedCatId || !state.entities.cats) return undefined;
    return state.entities.cats[state.selectedCatId]
  },

  getCats: state => {
    if (!state.entities || !state.entities.cats) return undefined;
    return Object.keys(state.entities.cats)
      .map(catId => state.entities.cats[catId]);
  }
}
