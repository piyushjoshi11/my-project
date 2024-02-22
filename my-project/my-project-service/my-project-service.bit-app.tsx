import { NodeServer } from '@bitdev/node.node-server';

export default NodeServer.from({
  name: 'my-project-service',
  mainPath: './my-project-service.app-root.js',
});
