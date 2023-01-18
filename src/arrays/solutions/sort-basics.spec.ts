import { HEALTH_FOODS_CASESENSITIVE, HEALTH_FOODS_LOWERCASE, INTEGER_ARRAY, NESTED_INTEGER_ARRAY } from "../sort-basic/example-data";
import { sortStrings }  from '../sort-basic/sort-string-array';
import { sortOneDimensionalNumberArray, sortNestedIntegerArrays } from '../sort-basic/sort-numbers';

describe('Array basics', () => {
  describe('Scenario 1', () => {

    test('should sort a string array in alphabetical order', () => {
      // Arrange
      const expectedResult: Array<string> = HEALTH_FOODS_LOWERCASE.sort();

      // Act
      const result = sortStrings(HEALTH_FOODS_LOWERCASE)

      // Assert
      expect(result).toStrictEqual(expectedResult)
    });
  });

  describe('Scenario 2', () => {
    test('should sort a string array in alphabetical order case sensitive', () => {

      const expectedResult: Array<string> = HEALTH_FOODS_CASESENSITIVE.sort();

      // Act
      const result = sortStrings(HEALTH_FOODS_CASESENSITIVE)

      // Assert
      expect(result).toStrictEqual(expectedResult);
    })
  });

  describe('Scenario 3', () => {
    test('should sort an integer array from smallest to largest', () => {
      
      const expectedResult: Array<number> = INTEGER_ARRAY.sort();

      // Act
      const result = sortOneDimensionalNumberArray(INTEGER_ARRAY);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    })
  })

  describe('Scenario 4', () => {
    test('should sort the nested arrays from smallest to largest, and parent array from nested array size smallest to largest', () => {
      // Arrange
      const expectedResult: Array<Array<number>> = NESTED_INTEGER_ARRAY.map(array => array.sort((a, b) => a - b)).sort((c, d) => c.length - d.length);

      // Act
      const result = sortNestedIntegerArrays(NESTED_INTEGER_ARRAY)

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });
  })
});
