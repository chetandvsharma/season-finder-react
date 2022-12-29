const seasonConfig = {
  winter: {
    text: 'Winter is coming',
    iconProperty: 'snowflake icon',
  },

  summer: {
    text: "Oo yeah! It's Summer slam",
    iconProperty: 'sun icon',
  },
};
const test = 'winter';
console.log(seasonConfig[test].text);
