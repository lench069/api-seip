
export interface Domicilio {
  calleRuta: string;
  numeroKm?: string;
  interseccion1?: string;
  interseccion2?: string;
  piso?: string;
  depto?: string;
  barrio?: string;
  departamentoPartido?: string;
  localidad?: string;
  codigoPostal: string;
  provincia: string;
  geolocalizacion?: string;
  telefono?: string;
  correoElect?: string;
}

export interface Asegurado {
  nroCertificado: string;
  razonSocialNomApellAseg: string;
  tipoDocumentoAseg: string;
  nroDocumentoAseg: number;
  fechaNacAseg?: string;
  sumaAseguradaAseg: number;
  primaTarifaAseg: number;
  premioAseg: number;
  provinciaAseg: number;
  estadoAseg: string;
  poseeAdherentes: 'SI' | 'NO';
  cantidadAdherentes: number;
}

export interface Policy {
  codigoCompania: number;
  codigoRamo: number;
  codigoSubramo: number;
  codigoProducto?: number;
  nroOrdenEndoso: number;
  nroPoliza: string;
  tipoEndoso: number;
  nroEndoso: number;
  coaseguro: 'SI' | 'NO';
  piloto?: 'SI' | 'NO';
  companiaPiloto?: number;
  nroPolizaPiloto?: string;
  participación?: number;
  nroPolizaRenovacion?: string;
  fechaEmision: string;
  fechaDesde: string;
  fechaHasta: string;
  tipoDocumento: string;
  nroDocumento: number;
  razonSocialNomApell: string;
  grandesRiesgos?: 'SI' | 'NO';
  tipoActoAdministrativo: string;
  nroActoAdministrativo: string;
  esColectivo: 'SI' | 'NO';
  cantidadRegistros: number;
  tipoMoneda: number;
  tipoCambio: number;
  seguroDirecto: 'SI' | 'NO';
  matriculaProdAgentInt?: number;
  organizador?: number;
  primaPura: number;
  gastosProduccion: number;
  gastosExplotacion: number;
  primaTarifa: number;
  recargoFinanciero: number;
  iva: number;
  ingresosBrutos: number;
  sellados: number;
  tasaSSN: number;
  tasaANSV: number;
  tasaReservadaSSN1: number;
  tasaReservadaSSN2: number;
  tasaSSOC: number;
  tasaOTRAS: number;
  cuotaSocial: number;
  otrosImpuestos: number;
  bonificación: number;
  premio: number;
  formaPago: string;
  periodoFc: number;
  asegurados: Asegurado[];
  domicilio: Domicilio;
}
