const cats = [
  {
    id: 1,
    name: 'kc',
    imageUrl: 'https://vignette2.wikia.nocookie.net/borderlands/images/1/13/Cute_kitten.jpg/revision/latest?cb=20110328051943'
  },
  {
    id: 2,
    name: 'henry',
    imageUrl: 'https://vignette4.wikia.nocookie.net/uncyclopedia/images/7/7f/Kitten_bin.jpg/revision/latest?cb=20070110195818'
  },
  {
    id: 3,
    name: 'peabody',
    imageUrl: 'https://lh3.googleusercontent.com/lq4-lWwt-RuX6er0c496a79dVWR3moXdCdkgFB2zcYTG_GMLjbtCyWq66o3wzW6Z7-g=h310'
  }
]

export default {
  getCats: () => {
    console.log('API getCats');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(cats);
      }, 500);
    });
  },

  getCat: id => {
    console.log('API getCat');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cat = cats.find(cat => cat.id === Number(id));
        resolve(cat)
      }, 500);
    });
  }
}
