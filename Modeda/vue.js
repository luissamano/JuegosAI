var app = new Vue({
    el: 'main',
    data: {
        activeColor: 'Green',
        fontSize: 25,
        message1: '',
        src1: '',
        message2: '',
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

            console.log(valor);
            switch (valor) {
                case 'Sellos':
                    if (x === true && y === true) {
                        console.log(x, y);
                        this.message1 = cara;
                        this.src1 = se;
                        this.message2 = cara;
                        this.src2 = se;
                        var toastHTML = '<span>El Usuario gana</span>';
                    } else if (x === false && y === false) {
                        console.log(x, y);
                        this.message1 = cruz;
                        this.src1 = ag;
                        this.message2 = cruz;
                        this.src2 = ag;
                        var toastHTML = '<span>La computadora gana</span>';
                    }
                    else {
                        console.log(x, y);
                        var toastHTML = '<span>Empate, lanza de nuevo</span>';
                        if (x === true) {
                            this.message1 = cara;
                            this.src1 = se;
                        } else {
                            this.message1 = cruz;
                            this.src1 = ag;
                        }
                        if (y === true) {
                            this.message2 = cara;
                            this.src2 = se;
                        } else {
                            this.message2 = cruz;
                            this.src2 = ag;
                        }
                    }
                    break;
                case 'Aguilas':
                    if (x === true && y === true) {
                        console.log(x, y);
                        this.message1 = cara;
                        this.src1 = se;
                        this.message2 = cara;
                        this.src2 = se;                        
                        var toastHTML = '<span>La computadora gana</span>';
                    } else if (x === false && y === false) {
                        console.log(x, y);
                        this.message1 = cruz;
                        this.src1 = ag;
                        this.message2 = cruz;
                        this.src2 = ag;                        
                        var toastHTML = '<span>El usuario gana</span>';
                    }
                    else {
                        console.log(x, y);
                        var toastHTML = '<span>Empate, lanza de nuevo</span>';
                        if (x === true) {
                            this.message1 = cara;
                            this.src1 = se;
                        } else {
                            this.message1 = cruz;
                            this.src1 = ag;
                        }
                        if (y === true) {
                            this.message2 = cara;
                            this.src2 = se;
                        } else {
                            this.message2 = cruz;
                            this.src2 = ag;
                        }
                    }
                    break;

                default:
                    break;
            }

            M.toast({ html: toastHTML, displayLength: 2500 });

        }
    }
})