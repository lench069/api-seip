import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify';
import { ProcessPoliciesForSSN } from '../application/ProcessPoliciesForSSN';
import { SQLPolicyRepository } from '../infrastructure/SQLPolicyRepository';
import { SSNClient } from '../infrastructure/SSNClient';

// Esta función es un plugin de Fastify
export default async function (server: FastifyInstance, options: FastifyPluginOptions) {

  // Instanciamos las dependencias aquí, dentro del contexto del plugin
  const policyRepository = new SQLPolicyRepository();
  const ssnClient = new SSNClient();
  const processPoliciesUseCase = new ProcessPoliciesForSSN(policyRepository, ssnClient);

  // Definimos la ruta
  server.post('/process-policies', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await processPoliciesUseCase.execute();
      reply.code(200).send({ message: 'Policies processed successfully.' });
    } catch (error) {
      server.log.error(error);
      reply.code(500).send({ error: 'Failed to process policies.' });
    }
  });
}
