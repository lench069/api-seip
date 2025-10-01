"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLPolicyRepository = void 0;
// Implementación "mock" del repositorio de pólizas. 
// En un caso real, aquí iría la lógica para conectarse a Oracle y obtener los datos.
var SQLPolicyRepository = /** @class */ (function () {
    function SQLPolicyRepository() {
    }
    SQLPolicyRepository.prototype.findUnprocessedPolicies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var examplePolicies;
            return __generator(this, function (_a) {
                console.log('Fetching policies from the source database (Oracle)...');
                examplePolicies = [
                    {
                        codigoCompania: 9999,
                        codigoRamo: 1030, // Automotores
                        codigoSubramo: 999901,
                        nroOrdenEndoso: 1,
                        nroPoliza: 'POL-001',
                        tipoEndoso: 99,
                        nroEndoso: 0,
                        coaseguro: 'NO',
                        fechaEmision: '01012024',
                        fechaDesde: '01012024',
                        fechaHasta: '01012025',
                        tipoDocumento: 'DNI',
                        nroDocumento: 12345678,
                        razonSocialNomApell: 'Juan Perez',
                        tipoActoAdministrativo: 'RES-2025-1234',
                        nroActoAdministrativo: '1234567890',
                        esColectivo: 'NO',
                        cantidadRegistros: 1,
                        tipoMoneda: 1,
                        tipoCambio: 1.0,
                        seguroDirecto: 'SI',
                        primaPura: 1000.5,
                        gastosProduccion: 100.0,
                        gastosExplotacion: 200.0,
                        primaTarifa: 1300.5,
                        recargoFinanciero: 50.0,
                        iva: 273.11,
                        ingresosBrutos: 30.0,
                        sellados: 10.0,
                        tasaSSN: 15.0,
                        tasaANSV: 0.0,
                        tasaReservadaSSN1: 0.0,
                        tasaReservadaSSN2: 0.0,
                        tasaSSOC: 5.0,
                        tasaOTRAS: 0.0,
                        cuotaSocial: 12.0,
                        otrosImpuestos: 8.0,
                        bonificación: -50.0,
                        premio: 1638.61,
                        formaPago: '01',
                        periodoFc: 365,
                        asegurados: [],
                        domicilio: {
                            calleRuta: 'Av. Corrientes',
                            numeroKm: '123',
                            codigoPostal: 'C1043AAS',
                            provincia: '02', // CABA
                        }
                    }
                ];
                return [2 /*return*/, Promise.resolve(examplePolicies)];
            });
        });
    };
    return SQLPolicyRepository;
}());
exports.SQLPolicyRepository = SQLPolicyRepository;
//# sourceMappingURL=SQLPolicyRepository.js.map