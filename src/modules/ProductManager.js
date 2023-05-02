import fs from 'fs';
import path from 'path';

export default class ProductManager {
    constructor (path) {
        this.path = path;
        if (!fs.existsSync (this.path)) {
            fs.writeFileSync (this.path, JSON.stringify({}));
        }
    }
}