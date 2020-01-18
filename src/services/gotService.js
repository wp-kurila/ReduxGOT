export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource(`/characters/`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    async getAllBooks() {
        return this.getResource(`/books/`);
    }

    async getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    async getAllHouses() {
        return this.getResource(`/houses/`);
    }

    async getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    checkContent(content) {
        if (content) {
            return content
        } else {
            return 'Данных нет('
        }
    }

    _transformCharacter(char) {
        return {
            name: this.checkContent(char.name),
            gender: this.checkContent(char.gender),
            born: this.checkContent(char.born),
            died: this.checkContent(char.died),
            culture: this.checkContent(char.culture)
        }
    }

    _transformHouse(house) {
        return {
            name: this.checkContent(house.name),
            region: this.checkContent(house.region),
            words: this.checkContent(house.words),
            titles: this.checkContent(house.titles),
            overlord: this.checkContent(house.overlord),
            ancestralWeapons: this.checkContent(house.ancestralWeapons)
        }
    }

    _transformBook(book) {
        return {
            name: this.checkContent(book.name),
            numberOfPages: this.checkContent(book.numberOfPages),
            publiser: this.checkContent(book.publiser),
            released: this.checkContent(book.released)
        }
    }
}