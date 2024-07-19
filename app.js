const app = new Vue({
    el: '#app',
    data:{
        entradas: [
            {barCode:'0',nombre: 'Huevos/Blanquillos', precio:'2.5', cantidad:'1', total:'', fecha:'', stock:''},
            {barCode:'011',nombre:'Doritos flaming hot verdes', precio:'18', cantidad:'1', total:'', fecha:'', stock:''},
            {barCode:'022',nombre: 'Papas', precio:'12', cantidad:'1', total:'', fecha:'', stock:''}
        ],
        salidas: [], almacen:[], datosFiltrados: [],
        barCode: '', cambio: '',
        newName: '', newCash: '',
        mil:'', quinientos:'', doscientos:'', cien:'',
        cincuenta:'', veinte:'', diez:'', cinco:'',
        dos:'', uno:'', cincuentaCentavos:'',
        totalEnCorte:'',
        Today: new Date().toLocaleDateString()        
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
                        total: productoEncontrado.precio,  // Inicialmente el total es igual al precio
                        fecha: new Date().toLocaleDateString()
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
                    total: this.newCash,
                    fecha: new Date().toLocaleDateString()
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
            if (this.$refs.barcodeInput) {
                this.$refs.barcodeInput.focus();
            } else {
                console.warn('El elemento de entrada no está definido');
            }
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
        },
        filtrarPorFecha: function() {
            console.log(this.almacen);
            this.datosFiltrados = this.almacen.filter(item => item.fecha === this.Today);
        },
        async share() {
            if (navigator.share) {
                try {
                    const datosParaCompartir = this.datosFiltrados.map(item => 
                        `✔${item.nombre},${item.total},${item.cantidad},${item.fecha}`).join('\n');
                    
                    const numeroDeTelefono = '2283571522'; // Reemplaza con el número de teléfono del contacto
                    const mensaje = `Datos filtrados:\n${datosParaCompartir}`;
                    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}&text=${encodeURIComponent(mensaje)}`;
                    
                    window.open(urlWhatsApp, '_blank'); // Abre el enlace en una nueva pestaña
                    console.log('Contenido compartido exitosamente');
                } catch (error) {
                    console.error('Error al compartir:', error);
                }
            } else {
                console.log('La API Web de Share no está disponible en este navegador');
            }
        },
        calcularTotalEnCorte: function () {
            const totalMil = this.mil * 1000;
            const totalQuinientos = this.quinientos * 500;
            const totalDoscientos = this.doscientos * 200;
            const totalCien = this.cien * 100;
            const totalCincuenta = this.cincuenta * 50;
            const totalVeinte = this.veinte * 20;
            const totalDiez = this.diez * 10;
            const totalCinco = this.cinco * 5;
            const totalDos = this.dos * 2;
            const totalUno = this.uno * 1;
            const totalCincuentaCentavos = this.cincuentaCentavos * 0.5;

            this.totalEnCorte = totalMil + totalQuinientos + totalDoscientos + 
                                totalCien + totalCincuenta + totalVeinte + 
                                totalDiez + totalCinco + totalDos + 
                                totalUno + totalCincuentaCentavos;
        },         
        calcularSobrante: function() {
            const diferencia = this.totalEnCorte - this.sumaTotal;
            return diferencia < 0 ? 0 : diferencia;
        },
        calcularFaltante: function() {
            const diferencia = this.sumaTotal - this.totalEnCorte;
            return diferencia < 0 ? 0 : diferencia;
        }       
    },
    computed: {
        totalGeneral: function() {
            return this.salidas.reduce((total, item) => total + parseFloat(item.total), 0);
        },
        cambioRestante: function() {
            return parseFloat(this.cambio) - this.totalGeneral;
        },
        sumaTotal() {
            return this.datosFiltrados.reduce((sum, item) => sum + parseFloat(item.total), 0);
        },      
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
