import { PolicyRepository } from '../domain/PolicyRepository';
import { SSNClient } from '../infrastructure/SSNClient';

export class ProcessPoliciesForSSN {
  constructor(
    private policyRepository: PolicyRepository,
    private ssnClient: SSNClient
  ) {}

  async execute(): Promise<void> {
    const policies = await this.policyRepository.findUnprocessedPolicies();
    console.log(`Found ${policies.length} policies to process.`);

    for (const policy of policies) {
      try {
        const response = await this.ssnClient.altaPoliza(policy);
        console.log(`Policy ${policy.nroPoliza} sent successfully. Expediente: ${response.nroExpediente}`);
        // Aquí se podría registrar el éxito en la base de datos de logs (MongoDB)
      } catch (error) {
        console.error(`Error processing policy ${policy.nroPoliza}:`, error);
        // Aquí se podría registrar el error y los reintentos
      }
    }
  }
}
