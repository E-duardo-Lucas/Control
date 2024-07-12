const app = new Vue({
    el: '#app',
    data:{
        entradas: [
            {barCode:'0',nombre: 'Huevos/Blanquillos', precio:'2.5', cantidad:'1', total:''},
            {barCode:'011',nombre:'Doritos flaming hot verdes', precio:'18', cantidad:'1', total:''},
            {barCode:'022',nombre: 'Papas', precio:'12', cantidad:'1', total:''}
        ],
        salidas: [],
        almacen:[],
        barCode: '',
        cambio: '',
        newName: '',
        newCash: '',
    },   
    methods: {
        addProducto: function(){
            // Filtra el producto basado en el barCode
            const productoEncontrado = this.entradas.find(product => product.barCode === this.barCode);
            
            // Si se encontró el producto, verifica si ya existe en salidas
            if (productoEncontrado) {
                const indiceExistente = this.salidas.findIndex(item => item.barCode === productoEncontrado.barCode);                
                if (indiceExistente !== -1) {
                    // Si ya existe, actualiza cantidad y precio
                    this.salidas[indiceExistente].cantidad++;
                    this.salidas[indiceExistente].total = this.salidas[indiceExistente].cantidad * this.salidas[indiceExistente].precio;
                } else {
                    // Si no existe, añade el producto a salidas
                    this.salidas.push({
                        barCode: productoEncontrado.barCode,
                        nombre: productoEncontrado.nombre,
                        precio: productoEncontrado.precio,
                        cantidad: productoEncontrado.cantidad,  // Inicialmente se agrega con cantidad 1
                        total: productoEncontrado.precio  // Inicialmente el total es igual al precio
                    });
                }
            } else {
                console.log('Producto no encontrado');
            }
            
            // Limpia el campo de entrada
            this.barCode = '';
            this.focusBarcodeInput();
            localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
        },        
        editarLess: function(index){
            if (this.salidas[index].cantidad > 1) {
                this.salidas[index].cantidad--;
                this.salidas[index].total = this.salidas[index].cantidad * this.salidas[index].precio;
                localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
            }
        },
        editarMore: function(index){
            if (this.salidas[index].cantidad >= 1) {
                this.salidas[index].cantidad++;
                this.salidas[index].total = this.salidas[index].cantidad * this.salidas[index].precio;
                localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
            }
        },
        eliminar: function(index){
            this.salidas.splice(index,1);
            localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
        },
        NewProduct: function(nextInputId) {
            if (this.newName.trim() !== '' && this.newCash.trim() !== '') {
                this.salidas.push({
                    nombre: this.newName,
                    total: this.newCash
                });
                localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
                this.newName = '';
                this.newCash = '';
                document.getElementById(nextInputId).focus();
            } else {
                alert('Por favor, complete todos los campos antes de agregar un nuevo producto.');
            }
        },    
        focusNextInput: function(nextInputId) {
            document.getElementById(nextInputId).focus();
        },
        focusBarcodeInput() {
            this.$refs.barcodeInput.focus();
        },
        transferData: function() {
            let datosDB1 = JSON.parse(localStorage.getItem('lukiControl'));
            
            if (datosDB1 !== null) {
                let datosDB2 = JSON.parse(localStorage.getItem('lukiControl2'));
                
                if (datosDB2 === null) {
                    datosDB2 = [];
                }

                let nuevosDatos = datosDB2.concat(datosDB1);

                localStorage.setItem('lukiControl2', JSON.stringify(nuevosDatos));

                // Eliminar los datos de lukiControl
                localStorage.removeItem('lukiControl');

                console.log('Datos transferidos exitosamente de lukiControl a lukiControl2');

                // Recargar la página para actualizar los datos
                window.location.reload();
            } else {
                console.log('No hay datos en lukiControl para transferir');
            }
        },
        updateTotal: function (item) {
            item.total = item.cantidad * item.precio;
            localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
        }
    },
    computed: {
        totalGeneral: function() {
            return this.salidas.reduce((total, item) => total + parseFloat(item.total), 0);
        },
        cambioRestante: function() {
            return parseFloat(this.cambio) - this.totalGeneral;
        }
    },    
    mounted() {
        this.focusBarcodeInput();
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('lukiControl'));
        if (datosDB === null) {
            this.salidas = [];
        } else {
            this.salidas = datosDB;
        }
    
        let datosDB2 = JSON.parse(localStorage.getItem('lukiControl2'));
        if (datosDB2 === null) {
            this.almacen = [];
        } else {
            this.almacen = datosDB2;
        }
    }
    
});
