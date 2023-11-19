const holamundo = require('./index');

test('Comprobacion del mensaje de saludo', () => {
    expect(holamundo()).toBe('Hola, Mundo!');
});