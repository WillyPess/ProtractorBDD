var helpernovo = function(){
    this.gerarNome = async(length) => {
        var string = '';
        var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
                for (i = 0; i < length; i++) {
                    string += letters.charAt(Math.floor(Math.random() * letters.length));
                }
                return string;
    }
}



module.exports = new helpernovo;