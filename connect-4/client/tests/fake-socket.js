import sinon from 'sinon';
// Stands in for the socket.io connection: records what the app sends and lets tests play server events.
// Events fire outside act() like real socket events, so React applies each update straight away.
export default function createFakeSocket() {
  const handlers = {};
  return {
    on: (event, handler) => { handlers[event] = handler; },
    emit: sinon.spy(),
    disconnect: () => {},
    fire: (event, data) => handlers[event](data)
  };
}
