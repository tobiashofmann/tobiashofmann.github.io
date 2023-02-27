import JSONModel from "sap/ui/model/json/JSONModel";

export default {

    pickBuzzwords(buzzwordsModel:JSONModel, elements: int): string[] {
        const selectedWords:string[] = [];

        for (let i = 0; i < elements; i++) {
            selectedWords.push(this.pickBuzzword(buzzwordsModel));
        }

		return selectedWords;
    },

	pickBuzzword(buzzwordsModel:JSONModel): string {
		const buzzwords:string[] = buzzwordsModel.getProperty("/") as string[];		
		const value = Math.floor(Math.random() * buzzwords.length);
		const buzzword: string = buzzwords.splice(value, 1)[0];

		buzzwordsModel.setProperty("/", buzzwords);
		return buzzword;
	}

};