import fs from 'fs';
import path from 'path';

export default class ProductManager {
    constructor (path) {
        this.path = path;
        if (!fs.existsSync (this.path)) {
            fs.writeFileSync (this.path, JSON.stringify({}));
        }
    }
    async getProd () {
        const prod = await fs.promises.readFile (this.path, 'utf-8');
        return JSON.parse (prod);
    }

    async getProd () {
        const prod = await this.getProd ();
        const prods = prod.filter ((prodItem) => prodItem.id === id);
    }

    async addProd (prods) {
        prods.date = new Date ();
        prods.id = prods.length + 1;

        if (prods.type === 'ERROR') {
            prods.fixed = false;
        } 

        prods.push (prods);
        await this.save (prods);

        return prods;
    }

    async #save (data) {
        const dataString = JSON.stringify (data);
        await fs.promises.writeFile (this.path, dataString);
    }
}

