# Sorting an Array (Basic)

* Use existing methods provided 
* Modify to meet the conditions until tests pass
* No extra methods or functions are needed

## Verifying Results
Run `npm run verify:arrays:sort-basics`  

### Scenario 1
**File**: `sort-string-array.ts`  
**Description:**  
Give an array of strings sort the array in alphabetic order.  

```ts
const inputArray: Array<string> = ['Carrot', 'zuchinni', 'Banana', 'Kale', 'cashews'];
// Expected output: ['Banana', 'Carrot', 'cashews', 'Kale', 'zuchinni']
```

### Scenario 2
**File**: `sort-string-array.ts`  
**Description:**  
Give an array of strings sort the array in alphabetic order with uppercase coming first.  

```ts
const inputArray: Array<string> = ['Carrot', 'zuchinni', 'Banana', 'Kale', 'cashews'];
// Expected output: ['Banana', 'Carrot', 'Kale', 'cashews', 'zuchinni']
```

### Scenario 3
**File:** `sort-numbers.ts`  
**Description:**   
Give an array of integers, sort from smallest to largest  

```ts

const inputArray: Array<number> = [19, 4, 41, 53, 2, 1];

// Expected output: [1, 2, 4, 19, 41, 53]
```

### Scenario 4
> This is an advanced scenario that will require further knowledge of the array prototype and methods

**File:** `sort-numbers.ts`  
**Description:**  
Given an array containing nested arrays  
Where the nested arrays contain a list of integers  
Sort the nested arrays from smallest to largest integer, inclusive  
And sort the parent array where the nest array length is it's position to be sorted by  

```ts
const inputArray: Array<Array<number>> = [[20, 5], [6, 1, 10, 9, 5], [800]];
// Expected output: [[800], [5, 20], [1, 5, 6, 9, 10]];
```