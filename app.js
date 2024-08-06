const app = new Vue({
    el: '#app',
    data:{
        entradas: [
            {barCode:'0',nombre: 'Huevos / Blanquillos', precio:2.5, cantidad:1, total:'', fecha:'', stock:10, utilidad:0.5, ganancia:'', p: 0.1, Tp: ''},
            {barCode:'011',nombre:'Doritos flaming hot verdes', precio:18, cantidad:1, total:'', fecha:'', stock:10, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'022',nombre: 'Papas', precio:12, cantidad:1, total:'', fecha:'', stock:10, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'033',nombre: 'Papel higienico REGIO', precio:28, cantidad:1, total:'', fecha:'', stock:10, utilidad:5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125144851',nombre: 'Electrolit Uva', precio:21, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125104688',nombre: 'Electrolit Naranja Mandarina', precio:21, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125149221',nombre: 'Electrolit Fresa Kiwi', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125118562',nombre: 'Electrolit Lima Limon', precio:21, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125104411',nombre: 'Electrolit Coco', precio:21, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125174797',nombre: 'Electrolit Mora Azul', precio:21, cantidad:1, total:'', fecha:'', stock:3, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501125104268',nombre: 'Electrolit Fresa', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'650240032301',nombre: 'Suerox naranja - mandarina', precio:20, cantidad:1, total:'', fecha:'', stock:1, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'650240035395',nombre: 'Suerox coco', precio:20, cantidad:1, total:'', fecha:'', stock:4, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'650240032271',nombre: 'Suerox uva', precio:20, cantidad:1, total:'', fecha:'', stock:1, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'650240032295',nombre: 'Suerox mora azul - hierbabuena', precio:20, cantidad:1, total:'', fecha:'', stock:4, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008738822',nombre: 'Arizona kiwi - fresa', precio:20, cantidad:1, total:'', fecha:'', stock:4, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008738846',nombre: 'Arizona sandía', precio:20, cantidad:1, total:'', fecha:'', stock:5, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008738808',nombre: 'Arizona mango', precio:20, cantidad:1, total:'', fecha:'', stock:4, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008765255',nombre: 'Arizona té verde', precio:17, cantidad:1, total:'', fecha:'', stock:4, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008765224',nombre: 'Arizona mango', precio:17, cantidad:1, total:'', fecha:'', stock:3, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008765286',nombre: 'Arizona kiwi con fresa', precio:17, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'613008765194',nombre: 'Arizona sandía', precio:17, cantidad:1, total:'', fecha:'', stock:1, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501000911783',nombre: 'Nescafé clásico 14g', precio:10, cantidad:1, total:'', fecha:'', stock:40, utilidad:2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501058629142',nombre: 'Nescafé cappuccino vainilla 22g', precio:11, cantidad:1, total:'', fecha:'', stock:6, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501058629128',nombre: 'Nescafé cappuccino original 20g', precio:11, cantidad:1, total:'', fecha:'', stock:8, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501058629166',nombre: 'Nescafé cappuccino moka 22g', precio:11, cantidad:1, total:'', fecha:'', stock:4, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501000911790',nombre: 'Nescafé decaf 14g', precio:13, cantidad:1, total:'', fecha:'', stock:8, utilidad:3.25, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501073411173',nombre: 'Nestlé chocolate abuelita', precio:12, cantidad:1, total:'', fecha:'', stock:17, utilidad:1.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501020565935',nombre: 'LALA entera', precio:24, cantidad:1, total:'', fecha:'', stock:4, utilidad:3.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501020565959',nombre: 'LALA semidescremada', precio:24, cantidad:1, total:'', fecha:'', stock:4, utilidad:3.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501020565911',nombre: 'LALA deslactosada', precio:24, cantidad:1, total:'', fecha:'', stock:12, utilidad:3.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501020544398',nombre: 'NUTRI deslactosada', precio:21, cantidad:1, total:'', fecha:'', stock:12, utilidad:2.75, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501020540666',nombre: 'NUTRI clásica', precio:20, cantidad:1, total:'', fecha:'', stock:12, utilidad:2.60, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503015181021',nombre: 'Leche DELITE 1lt', precio:15.5, cantidad:1, total:'', fecha:'', stock:6, utilidad:2.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7502261256712',nombre: 'Lacti BU 1lt', precio:17, cantidad:1, total:'', fecha:'', stock:6, utilidad:2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7506205815867',nombre: 'Choco milk chocolate 18g', precio:7, cantidad:1, total:'', fecha:'', stock:20, utilidad:2.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7506205807589',nombre: 'Choco milk chocolate 160g', precio:29, cantidad:1, total:'', fecha:'', stock:3, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501200483127',nombre: 'Harina PRONTO 350g', precio:33, cantidad:1, total:'', fecha:'', stock:3, utilidad:4, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501058631961',nombre: 'La lechera bolsa 209g', precio:18, cantidad:1, total:'', fecha:'', stock:3, utilidad:3.2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7506475104722',nombre: 'La lechera lata 375g', precio:26, cantidad:1, total:'', fecha:'', stock:3, utilidad:2.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501003336125',nombre: 'Mermelada de fresa 270g', precio:28, cantidad:1, total:'', fecha:'', stock:3, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501058611062',nombre: 'Leche evaporada Carnation 360g', precio:21, cantidad:1, total:'', fecha:'', stock:3, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503015181076',nombre: 'Media crema DELITE', precio:12, cantidad:1, total:'', fecha:'', stock:6, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501158414310',nombre: 'Media crema SAN MARCOS', precio:16, cantidad:1, total:'', fecha:'', stock:6, utilidad:2.2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501158415157',nombre: 'Media crema NUTRE', precio:10, cantidad:1, total:'', fecha:'', stock:6, utilidad:2.58, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501000912803',nombre: 'Nescafé clásico frasco 42g', precio:31, cantidad:1, total:'', fecha:'', stock:6, utilidad:3.8, ganancia:'', p: 1, Tp: ''},
            {barCode:'7500478005512',nombre: 'Crackets 135g', precio:15, cantidad:1, total:'', fecha:'', stock:20, utilidad:3.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501000658923',nombre: 'Marias gamesa 170g', precio:14, cantidad:1, total:'', fecha:'', stock:20, utilidad:1.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'038629002716',nombre: 'Marianitas VAINILLA 185g', precio:12, cantidad:1, total:'', fecha:'', stock:20, utilidad:1.4, ganancia:'', p: 1, Tp: ''},
            {barCode:'038629001702',nombre: 'Marianitas NUEZ 185g', precio:12, cantidad:1, total:'', fecha:'', stock:20, utilidad:1.4, ganancia:'', p: 1, Tp: ''},
            {barCode:'038629002068',nombre: 'Marianitas COCO 185g', precio:12, cantidad:1, total:'', fecha:'', stock:20, utilidad:1.4, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501008726402',nombre: 'Matraquilla VAINILLA', precio:11, cantidad:1, total:'', fecha:'', stock:6, utilidad:2.2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501008725405',nombre: 'Matraquilla NUEZ', precio:11, cantidad:1, total:'', fecha:'', stock:6, utilidad:2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7500478003006',nombre: 'Gamesa DORADAS 224g', precio:28, cantidad:1, total:'', fecha:'', stock:3, utilidad:3.3, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501008765012',nombre: 'Chavalin 100g', precio:14.5, cantidad:1, total:'', fecha:'', stock:6, utilidad:2, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501005106979',nombre: 'MAIZENA Vainilla', precio:12, cantidad:1, total:'', fecha:'', stock:0, utilidad:2.9, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501005106801',nombre: 'MAIZENA Fresa', precio:12, cantidad:1, total:'', fecha:'', stock:0, utilidad:2.5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501005107013',nombre: 'MAIZENA Chocolate', precio:12, cantidad:1, total:'', fecha:'', stock:0, utilidad:2.9, ganancia:'', p: 1, Tp: ''},



            {barCode:'041789001864',nombre: 'Maruchan HABANERO', precio:16, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'041789001987',nombre: 'Maruchan PIQUIN', precio:16, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'041789002960',nombre: 'RAMEN Habanero', precio:10, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501086107087',nombre: 'Encendedor TOKAI', precio:7, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},

            
            {barCode:'7501102610003',nombre: 'Kola Loka Gotero', precio:23, cantidad:1, total:'', fecha:'', stock:0, utilidad:4.5, ganancia:'', p: 1, Tp: ''},


            {barCode:'7591005574014',nombre: 'Raid-olitos', precio:3, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'034587030013',nombre: 'Sal LA FINA', precio:19, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503032460062',nombre: 'ZUKO jamaica', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503032460130',nombre: 'ZUKO mango', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503032460055',nombre: 'ZUKO naranja', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503032460086',nombre: 'ZUKO uva', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7622210572219',nombre: 'TANG fresa', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7622210572974',nombre: 'TANG piña', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'077910000031',nombre: 'MAYA cerillos', precio:2, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},

            {barCode:'7501907602654',nombre: 'MALIQ foco led', precio:20, cantidad:1, total:'', fecha:'', stock:0, utilidad:5, ganancia:'', p: 1, Tp: ''},
            {barCode:'7504502380606',nombre: 'ALEFCO halogeno', precio:10.5, cantidad:1, total:'', fecha:'', stock:0, utilidad:2, ganancia:'', p: 1, Tp: ''},


            {barCode:'000005601264',nombre: 'COTONETE bambú', precio:5, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501017372751',nombre: 'ABSORSEC G E4', precio:6, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501017372737',nombre: 'ABSORSEC M E3', precio:5.5, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7501943433359',nombre: 'ABSORSEC CH E2', precio:5, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'75014544',nombre: 'Café MIRNA', precio:4.5, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'7503027748007',nombre: 'Café CARMELITA', precio:5, cantidad:1, total:'', fecha:'', stock:0, utilidad:0, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
            {barCode:'',nombre: '', precio:21, cantidad:1, total:'', fecha:'', stock:2, utilidad:3, ganancia:'', p: 1, Tp: ''},
        ],
        salidas: [], almacen: [], datosFiltrados: [],
        POINTS: [], barCode: '', cambio: '', numPoint: '',
        newName: '', newCash: '', newGanancia: 0,
        mil:'', quinientos:'', doscientos:'', cien:'',
        cincuenta:'', veinte:'', diez:'', cinco:'',
        dos:'', uno:'', cincuentaCentavos:'',
        totalEnCorte:'', puntosNombre: '', puntosNumero: '',
        Today: new Date().toLocaleDateString(),
        
        
        precioCompra: '', porcentaje: 0.2, totalPorcen: '', totalSum: '',
        CajaBulto: '', PiezasKilo: '',
    },   
    methods: {
        addProducto: function(){
            // Filtra el producto basado en el barCode
            const productoEncontrado = this.entradas.find(product => product.barCode === this.barCode);
            
            // Si se encontró el producto, verifica si ya existe en salidas
            if (productoEncontrado) {
                const indiceExistente = this.salidas.findIndex(item => item.barCode === productoEncontrado.barCode);                
                if (indiceExistente !== -1) {
                    // Si ya existe, actualiza cantidad, total y ganancia
                    this.salidas[indiceExistente].cantidad++;
                    this.salidas[indiceExistente].total = this.salidas[indiceExistente].cantidad * parseFloat(this.salidas[indiceExistente].precio);
                    this.salidas[indiceExistente].ganancia = this.salidas[indiceExistente].cantidad * parseFloat(this.salidas[indiceExistente].utilidad);
                    this.salidas[indiceExistente].Tp = this.salidas[indiceExistente].cantidad * parseFloat(this.salidas[indiceExistente].p)
                } else {
                    // Si no existe, añade el producto a salidas
                    this.salidas.push({
                        barCode: productoEncontrado.barCode,
                        nombre: productoEncontrado.nombre,
                        precio: productoEncontrado.precio,
                        cantidad: productoEncontrado.cantidad,
                        total: productoEncontrado.precio,
                        fecha: new Date().toLocaleDateString(),
                        utilidad: productoEncontrado.utilidad,
                        ganancia: productoEncontrado.utilidad,
                        p: productoEncontrado.p,
                        Tp: productoEncontrado.p
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
            localStorage.setItem('LukiPoints', JSON.stringify(this.POINTS));
        },
        NewProduct: function(nextInputId) {
            if (this.newName.trim() !== '' && this.newCash.trim() !== '') {
                this.salidas.push({
                    nombre: this.newName,
                    total: this.newCash,
                    fecha: new Date().toLocaleDateString(),
                    ganancia: this.newGanancia
                });
                localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
                this.newName = '';
                this.newCash = '';
                document.getElementById(nextInputId).focus();
            } else {
                alert('Por favor, complete todos los campos antes de agregar un nuevo producto.');
            }
        },
        AddPoints: function() {
            if (this.puntosNombre.trim() !== '' && this.puntosNumero.trim() !== '') {
                this.POINTS.push({
                    nombre: this.puntosNombre,
                    numero: this.puntosNumero,
                    points: 0
                });
                localStorage.setItem('LukiPoints', JSON.stringify(this.POINTS));
                this.puntosNombre = '';
                this.puntosNumero = '';
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


            let storedPoints = localStorage.getItem('LukiPoints');
            let pointsArray = storedPoints ? JSON.parse(storedPoints) : [];

            // Buscar si el número existe en el array de puntos
            let numeroEncontrado = pointsArray.find(item => item.numero === this.numPoint);

                if (numeroEncontrado) {
                    numeroEncontrado.points += this.totalPoints;
                    localStorage.setItem('LukiPoints', JSON.stringify(pointsArray));
                }
        },
        updateTotal: function (item) {
            item.total = item.cantidad * item.precio;
            item.ganancia = item.cantidad * item.utilidad;
            item.Tp = item.cantidad * item.p;
            localStorage.setItem('lukiControl', JSON.stringify(this.salidas));
        },
        filtrarPorFecha: function() {
            console.log(this.almacen);
            this.datosFiltrados = this.almacen.filter(item => item.fecha === this.Today);
        },
        async share() {
            if (navigator.share) {
                try {
                    this.calcularTotalEnCorte();
                    const sobrante = this.calcularSobrante();
                    const faltante = this.calcularFaltante();

                    const datosParaCompartir = this.datosFiltrados.map(item => 
                        `▪${item.nombre},$${item.total},${item.cantidad}`).join('\n');
                    
                    const numeroDeTelefono = '2283571522'; // Reemplaza con el número de teléfono del contacto
                    const mensaje = `Datos filtrados: ${this.Today}\n\n${datosParaCompartir}\n\nTotal De Venta: $${this.sumaTotal}\nTotal en Corte: $${this.totalEnCorte}\nUtilidad: $${this.sumaUtilidad}\nSobrante: $${sobrante}\nFaltante: $${faltante}`;
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
        calcularTotalPorcentaje: function () {
            this.totalPorcen = parseFloat(this.precioCompra) * parseFloat(this.porcentaje);        
        },    
        calcularPrecioCompra: function () {
            this.precioCompra = parseFloat(this.CajaBulto) / parseFloat(this.PiezasKilo);
            this.totalPorcen = parseFloat(this.precioCompra) * parseFloat(this.porcentaje);  
        },      
        calcularSobrante: function() {
            const diferencia = this.totalEnCorte - this.sumaTotal;
            return diferencia < 0 ? 0 : diferencia;
        },
        calcularFaltante: function() {
            const diferencia = this.sumaTotal - this.totalEnCorte;
            return diferencia < 0 ? 0 : diferencia;
        },
        deleteLocalDos: function() {
            // Eliminar los datos de lukiControl
            localStorage.removeItem('lukiControl2');
            alert('LocalStorage VACÍA');
        },
    },
    computed: {
        totalGeneral: function() {
            return this.salidas.reduce((total, item) => total + parseFloat(item.total), 0);
        },
        totalPoints: function() {
            return this.salidas.reduce((Tp, item) => Tp + parseFloat(item.Tp), 0);
        },
        cambioRestante: function() {
            return parseFloat(this.cambio) - this.totalGeneral;
        },
        sumaPorcens: function() {
            return parseFloat(this.totalPorcen) + parseFloat(this.precioCompra);
        },
        sumaTotal() {
            return this.datosFiltrados.reduce((sum, item) => sum + parseFloat(item.total), 0);
        },
        sumaUtilidad() {
            return this.datosFiltrados.reduce((suma, item) => suma + parseFloat(item.ganancia), 0);
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

        let datosDB3 = JSON.parse(localStorage.getItem('LukiPoints'));
        if (datosDB3 === null) {
            this.POINTS = [];
        } else {
            this.POINTS = datosDB3;
        }
    }
    
});
