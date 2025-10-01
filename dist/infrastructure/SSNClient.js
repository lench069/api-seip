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
exports.SSNClient = void 0;
var SSNClient = /** @class */ (function () {
    function SSNClient() {
        this.authToken = null;
        this.tokenExpiration = null;
        this.apiUrl = 'https://testpolonline.ssn.gob.ar/api'; // URL de prueba
    }
    SSNClient.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fakeResponse;
            return __generator(this, function (_a) {
                // Lógica para hacer el POST a /api/login con user, cia y password
                // y almacenar el token y la fecha de expiración.
                console.log('Authenticating with SSN API...');
                fakeResponse = {
                    token: 'fake-jwt-token',
                    fecha_expiracion: '31 Dec 2025 23:59:59 GMT'
                };
                this.authToken = fakeResponse.token;
                this.tokenExpiration = new Date(fakeResponse.fecha_expiracion);
                return [2 /*return*/];
            });
        });
    };
    SSNClient.prototype.ensureAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.authToken || !this.tokenExpiration || this.tokenExpiration < new Date())) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SSNClient.prototype.altaPoliza = function (policy) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ensureAuthenticated()];
                    case 1:
                        _a.sent();
                        endpoint = this.getEndpointForRamo(policy.codigoRamo);
                        url = "".concat(this.apiUrl, "/").concat(endpoint);
                        console.log("Sending policy ".concat(policy.nroPoliza, " to ").concat(url));
                        // Aquí iría la lógica para enviar la póliza usando un cliente HTTP como axios o undici
                        // con el `authToken` en los headers.
                        // Simulación de respuesta exitosa
                        return [2 /*return*/, { nroExpediente: 'SSN-EXP-12345', estado: 'Finalizado' }];
                }
            });
        });
    };
    SSNClient.prototype.getEndpointForRamo = function (ramo) {
        if ([1030, 1040, 1180].includes(ramo)) {
            return 'poliza/auto/alta';
        }
        if ([1100, 1110].includes(ramo)) {
            return 'poliza/caucion/alta';
        }
        // etc. para otros ramos
        return 'poliza/otrosRamosPatrimoniales';
    };
    return SSNClient;
}());
exports.SSNClient = SSNClient;
//# sourceMappingURL=SSNClient.js.map