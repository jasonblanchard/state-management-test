import api from './api';

const updateState = function(component, nextState) {
  return new Promise((resolve) => {
    component.setState(nextState, () => resolve())
  });
}

export default {
  setSelectedCatId: async (component, selectedCatId) => {
    return updateState(component, prevState => ({
      ...prevState,
      selectedCatId
    }));
  },

  getCats: async component => {
    const cats = await api.getCats();
    const normalizedCats = cats.reduce((cats, cat) => {
      cats[cat.id] = cat;
      return cats;
    }, {});

    const entities = component.state.entities || {};
    const catEntities = { ...entities.cats, ...normalizedCats };

    return updateState(component, prevState => ({
      ...prevState,
      entities: {
        cats: catEntities
      }
    }));
  },

  getCat: async (component, id) => {
    const cat = await api.getCat(id);

    const entities = component.state.entities || {};
    const catEntities = { ...entities.cats, ...{[cat.id]: cat } };

    return updateState(component, prevState => ({
      ...prevState,
      entities: {
        cats: catEntities
      }
    }));
  }
}
