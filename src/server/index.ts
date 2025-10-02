import Fastify from 'fastify';
import policyRoutes from '../routes/policyRoutes';

const server = Fastify({
  logger: true
});

// Registra nuestras rutas y les añade un prefijo
server.register(policyRoutes, { prefix: '/api' });

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

// Inicia el servidor
start();
