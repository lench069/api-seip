import { Policy } from '../domain/Policy';

// Esta interfaz podría moverse a un archivo de dominio si se vuelve más compleja
interface SSNAuthResponse {
  token: string;
  fecha_expiracion: string;
}

export class SSNClient {
  private authToken: string | null = null;
  private tokenExpiration: Date | null = null;
  private readonly apiUrl: string = 'https://testpolonline.ssn.gob.ar/api'; // URL de prueba

  constructor() {}

  private async login(): Promise<void> {
    // Lógica para hacer el POST a /api/login con user, cia y password
    // y almacenar el token y la fecha de expiración.
    console.log('Authenticating with SSN API...');

    // Simulación de respuesta
    const fakeResponse: SSNAuthResponse = {
      token: 'fake-jwt-token',
      fecha_expiracion: '31 Dec 2025 23:59:59 GMT'
    };

    this.authToken = fakeResponse.token;
    this.tokenExpiration = new Date(fakeResponse.fecha_expiracion);
  }

  private async ensureAuthenticated(): Promise<void> {
    if (!this.authToken || !this.tokenExpiration || this.tokenExpiration < new Date()) {
      await this.login();
    }
  }

  public async altaPoliza(policy: Policy): Promise<any> {
    await this.ensureAuthenticated();

    // Determinar el endpoint correcto basado en el ramo de la póliza
    const endpoint = this.getEndpointForRamo(policy.codigoRamo);
    const url = `${this.apiUrl}/${endpoint}`;

    console.log(`Sending policy ${policy.nroPoliza} to ${url}`);
    
    // Aquí iría la lógica para enviar la póliza usando un cliente HTTP como axios o undici
    // con el `authToken` en los headers.

    // Simulación de respuesta exitosa
    return { nroExpediente: 'SSN-EXP-12345', estado: 'Finalizado' };
  }

  private getEndpointForRamo(ramo: number): string {
    if ([1030, 1040, 1180].includes(ramo)) {
      return 'poliza/auto/alta';
    }
    if ([1100, 1110].includes(ramo)) {
      return 'poliza/caucion/alta';
    }
    // etc. para otros ramos
    return 'poliza/otrosRamosPatrimoniales';
  }
}
