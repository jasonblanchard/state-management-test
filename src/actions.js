import api from './api';

export default {
  getCats: async component => {
    const cats = await api.getCats();
    const normalizedCats = cats.reduce((cats, cat) => {
      cats[cat.id] = cat;
      return cats;
    }, {});

    component.setState(currentState => ({
      ...currentState,
      entities: {
        cats: normalizedCats
      }
    }));
  },

  getCat: async (component, id) => {
    const cat = await api.getCat(id);

    component.setState(currentState => ({
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
