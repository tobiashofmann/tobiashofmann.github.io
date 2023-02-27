sap.ui.define([], function () {
  var __exports = {
    pickBuzzwords(buzzwordsModel, elements) {
      const selectedWords = [];
      for (let i = 0; i < elements; i++) {
        selectedWords.push(this.pickBuzzword(buzzwordsModel));
      }
      return selectedWords;
    },
    pickBuzzword(buzzwordsModel) {
      const buzzwords = buzzwordsModel.getProperty("/");
      const value = Math.floor(Math.random() * buzzwords.length);
      const buzzword = buzzwords.splice(value, 1)[0];
      buzzwordsModel.setProperty("/", buzzwords);
      return buzzword;
    }
  };
  return __exports;
});