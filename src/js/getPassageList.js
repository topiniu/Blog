import list from './PASSAGELIST'

export default function getPassageList(type) {
  const pl = list();

  if (type === 'all') {
    return pl;
  } else {
    let plt = [];
    for (let i = 0; i < pl.length; i++) {
      if (pl[i].type === type) {
        plt[plt.length] = pl[i];
      }
    }
    return plt;
  }
}