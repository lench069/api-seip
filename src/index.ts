import Fastify from 'fastify';
import { SQLPolicyRepository } from './infrastructure/SQLPolicyRepository';
import { SSNClient } from './infrastructure/SSNClient';
import { ProcessPoliciesForSSN } from './application/ProcessPoliciesForSSN';

const server = Fastify({
  logger: true
});

// Instanciación de las dependencias
const policyRepository = new SQLPolicyRepository();
const ssnClient = new SSNClient();
const processPoliciesUseCase = new ProcessPoliciesForSSN(policyRepository, ssnClient);

// Ruta para ejecutar el caso de uso
server.post('/api/process-policies', async (request, reply) => {
  try {
    await processPoliciesUseCase.execute();
    reply.code(200).send({ message: 'Policies processed successfully.' });
  } catch (error) {
    server.log.error(error);
    reply.code(500).send({ error: 'Failed to process policies.' });
  }
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
