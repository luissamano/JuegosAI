var app = new Vue({
    el: 'main',
    data: {
        activeColor: 'Green',
        fontSize: 30,
        message: '',
        src1: '',
        src2: ''
    },
    methods: {
        moneda1: function () {
            var selectValor = document.getElementById('selectValor');
            var valor = selectValor.options[selectValor.selectedIndex].text;

            var x = Math.random() >= 0.5;
            var y = Math.random() >= 0.5;

            var cara = 'Sellos';
            var cruz = 'Aguilas';
            var se = 'resources/sellos.png';
            var ag = 'resources/aguilas.png';

            if (x === true && y === true) {
                console.log(x,y);
                this.message = cara+ ' - ' +cara;
                this.src1 = se;        
                this.src2 = se; 
                var toastHTML = '<span>Gana 1</span>';
            } else if (x === false  && y === false) {
                console.log(x,y);
                this.message = cruz+ ' - ' +cruz;
                this.src1 = ag;
                this.src2 = ag;
                var toastHTML = '<span>Gana 2</span>';
            }
            else {
                console.log(x,y);
                var toastHTML = '<span>Empate</span>';   
                if (x === true) {
                    this.message = cara;
                    this.src1 = se;
                } else {
                    this.message = cruz;
                    this.src1 = ag;
                }
                if (y === true) {
                    this.message = cara;
                    this.src2 = se;
                } else {
                    this.message = cruz;
                    this.src2 = ag;
                }
            }
            M.toast({html: toastHTML});
            console.log(valor);
        }
    }
})