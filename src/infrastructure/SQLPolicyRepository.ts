import { PolicyRepository } from '../domain/PolicyRepository';
import { Policy } from '../domain/Policy';

// Implementación "mock" del repositorio de pólizas. 
// En un caso real, aquí iría la lógica para conectarse a Oracle y obtener los datos.
export class SQLPolicyRepository implements PolicyRepository {
  async findUnprocessedPolicies(): Promise<Policy[]> {
    console.log('Fetching policies from the source database (Oracle)...');

    // Datos de ejemplo
    const examplePolicies: Policy[] = [
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

    return Promise.resolve(examplePolicies);
  }
}
