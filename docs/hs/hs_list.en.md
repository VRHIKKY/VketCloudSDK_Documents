# Array (list)

## Dealing with lists

list is a built-in type that represents a variable length array.

## Declaration

To specify the type of data to be placed in the list, you need to specify the type with "< >".

```c#
list<type> object name;
```

The specific initialization code looks like this:

```c#
// define a list that holds int values
list<int> numList;

// initialize a list holding strings with an initial size of 10
list<int> strList = new list<int>(10);
```

## Resize list

It is possible to dynamically change only the size of the list without specifying a specific value (data to be set in the list).
When the size is expanded, the [initial value] (hs_var.md) of that type is set in areas that have not been set yet.

## methods

### new()

`new()`

`new(int capacity)`

Create an instance of list. You can set the initial size of the list when it is created.
If you don't specify an initial size, it will be instantiated with a size of 0.

### Add(T)

`void Add(T value)`

Add the designated value to the end of list.

The type of the value specified in the argument must match the type of the calling list of this method.

Inserts a new element at the position specified by the argument.

### IsEmpty()

`bool IsEmpty()`

Returns true if list is empty, false otherwise.

### Resize(int)

`void Resize(int newSize)`

Change the length of list.

When the list is shrunk, the elements of the previously existing space are deleted.

When the list is extended, the new space is initialized with [initial value of type](hs_var.md).

### Clear()

`void Clear()`

Frees all elements of list and sets the length of list to 0.

### Count()

`int Count()`

Returns the current length of list.

### RemoveLast()

`void RemoveLast()`

Deletes the last element of list.

### RemoveAt(int)

`void RemoveAt(int index)`

Deletes the element at the position specified by the argument.

### Insert(int, T)

`void Insert(int index, T value)`

Insert the specified value at the position specified by the argument.

### CopyFrom(int, list<T\>, int, int)

`void CopyFrom(int index, list<T> sourceList, int start, int length)`

Copies the contents of sourceList from start to length size to the position specified by index.

The type of the list specified in the argument must match the list type of the caller of this method.

### Fill(int, int, T)

`void Fill(int start, int length, T value)`

Repeats value for length size from the position specified by start.

The type of the value to be copied, specified in the argument, must match the list type of the caller of this method.

### Sort()

`voidSort()`

Sorts all elements of list in ascending order.

### Reverse()

`void Reverse()`

Reverses the order of all elements of list.

### IndexOf(int, int, T)

`int IndexOf(int start, int last, T value)`

Searches for a value in the range specified by the argument and returns the position of the first occurrence of that value if found. Returns -1 if the searched value is not found.

### [ ] operator

Gets the value at the specified position in list. It is also possible to assign an element at the specified position.

```c#
list<int> numList = new list<int>(10);
numList[0] = 999;
int value = numList[6];
```
