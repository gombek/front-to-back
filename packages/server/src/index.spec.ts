import {printUser} from './index';

describe('server', () => {
    it('should print pomidor', () => {
        expect(printUser()).toEqual({name: 'pomidor', age: 4})
    })
})
