# jsutil
# GroupBy Array Utility Function

This utility function, `groupBy`, is designed to easily group an array of objects based on a specified key. By providing an array and a key, the function will return an object with keys that correspond to the different values of the specified key in the array. Each key in the returned object will have an array of objects that share that particular value.

## Usage

```javascript
const grouped = groupBy(array, key);
```

Where `array` is the array of objects to group, and `key` is the string that specifies the property to group by.

## Example

Given the following array of objects:

```javascript
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 30 },
  { name: 'Eve', age: 25 }
];

// Group by 'age'
const groupedByAge = groupBy(people, 'age');
```

The output will be:

```
{
  '30': [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 30 }
  ],
  '25': [
    { name: 'Eve', age: 25 }
  ]
}
```

This function is particularly useful for organizing data for easier accessibility and manipulation.