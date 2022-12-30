import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };
    //need to replace this process.env.REACT_APP_BACKEND_URL with "http://localhost:5000" to run on local machine
    // return io(process.env.REACT_APP_BACKEND_URL, options);
    return io("http://localhost:5000", options);
};
