import api from './api';

const updateState = function(component, nextState) {
  return new Promise((resolve) => {
    component.setState(nextState, () => resolve())
  });
}

export default {
  getCats: async component => {
    const cats = await api.getCats();
    const normalizedCats = cats.reduce((cats, cat) => {
      cats[cat.id] = cat;
      return cats;
    }, {});

    return updateState(component, currentState => ({
      ...currentState,
      entities: {
        cats: normalizedCats
      }
    }));
  },

  getCat: async (component, id) => {
    const cat = await api.getCat(id);

    return updateState(component, currentState => ({
      ...currentState,
      selectedCatId: cat.id,
      entities: {
        cats: {
          [cat.id]: cat
        }
      }
    }));
  }
}
