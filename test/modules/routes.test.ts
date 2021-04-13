import ROUTES from '../../src/modules/routes';

test('Route Data', () => {
    expect(ROUTES.Kanto).toBeDefined();
    expect(ROUTES.Johto).toBeDefined();
});
