export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async (page) => {
        const res = await this.getResource(`/characters?page=${page}`);
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllBooks = async (page) => {
        const res = await this.getResource(`/books?page=${page}`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    getAllHouses = async (page) => {
        const res = await this.getResource(`/houses?page=${page}`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    checkContent(content) {
        if (content) {
            return content
        } else {
            return 'Данных нет:('
        }
    }

    getId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            name: this.checkContent(char.name),
            gender: this.checkContent(char.gender),
            born: this.checkContent(char.born),
            died: this.checkContent(char.died),
            culture: this.checkContent(char.culture),
            id: this.getId(char)
        }
    }

    _transformHouse = (house) => {
        return {
            name: this.checkContent(house.name),
            region: this.checkContent(house.region),
            words: this.checkContent(house.words),
            titles: this.checkContent(house.titles),
            overlord: this.checkContent(house.overlord),
            ancestralWeapons: this.checkContent(house.ancestralWeapons),
            id: this.getId(house)
        }
    }

    _transformBook = (book) => {
        return {
            name: this.checkContent(book.name),
            numberOfPages: this.checkContent(book.numberOfPages),
            publiser: this.checkContent(book.publiser),
            released: this.checkContent(book.released),
            id: this.getId(book)
        }
    }
}