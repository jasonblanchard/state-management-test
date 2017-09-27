import api from './api';

const updateState = function(component, nextState) {
  return new Promise((resolve) => {
    component.setState(nextState, () => resolve())
  });
}

export default {
  setSelectedCatId: function (selectedCatId) {
    return updateState(this, prevState => ({
      ...prevState,
      selectedCatId
    }));
  },

  getCats: async function() {
    const cats = await api.getCats();
    const normalizedCats = cats.reduce((cats, cat) => {
      cats[cat.id] = cat;
      return cats;
    }, {});

    const entities = this.state.entities || {};
    const catEntities = { ...entities.cats, ...normalizedCats };

    return updateState(this, prevState => ({
      ...prevState,
      entities: { ...this.state.entities, ...{ cats: catEntities } }
    }));
  },

  getCat: async function(id) {
    const cat = await api.getCat(id);

    const entities = this.state.entities || {};
    const catEntities = { ...entities.cats, ...{[cat.id]: cat } };

    return updateState(this, prevState => ({
      ...prevState,
      entities: { ...this.state.entities, ...{ cats: catEntities } }
    }));
  }
}
