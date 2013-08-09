/**
 * Created with JetBrains WebStorm.
 * User: santthosh.selvadurai
 * Date: 8/8/13
 * Time: 3:19 PM
 * To change this template use File | Settings | File Templates.
 */
describe('filter',function() {

  beforeEach(module('myApp'));

    describe ('reverse', function() {
      it('should reverse a string',inject(function(reverseFilter) {
          expect(reverseFilter('ABCD')).toEqual('DCBA');
      }))
    })

})