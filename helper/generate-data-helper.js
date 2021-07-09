'use strict';

// Object.defineProperty(exports, "__esModule", { value: true });
// exports.usersPage = void 0;
// const protractor_1 = require("protractor");

export class GenerateData {

    gerarDataAtual() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;

        return today;
    }

    gerarNumero() {
        return Math.floor(Math.random() * 1000) + 1
    }

    gerarNumero4decimais() {
        return Math.floor(Math.random() * 1000000) + 1
    }

    gerarNome(length) {
         var string = '';
         var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
                 for (i = 0; i < length; i++) {
                     string += letters.charAt(Math.floor(Math.random() * letters.length));
                 }
                 return string;
             }

}