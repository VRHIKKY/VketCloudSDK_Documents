# string

## Handling strings

string is a built-in type that represents a sequence of characters.

Text enclosed in double quotation marks, such as `"Vket Cloud"`, are treated as string type.

string internally stores string data as UTF-8 bytes. Use the Length() method to get the length as a string, or LengthByte() to get the number of bytes itself.

## Mutable strings

HeliScript strings are mutable. You can rewrite the contents of the string by specifying the index with "[]" or by methods such as Append().

!!! note caution
    In the current version, if a string includes an apostrophe / single quote (' ' , U+0027), the process will stop due to error.<br>
    Therefore, please avoid using the quotation within strings.

## string methods

### ToInt()

`public int ToInt()`

Convert a string to an integer value. Returns 0 if the conversion fails.

### ToFloat()

`public float ToFloat()`

Convert a string to a float value. Returns 0 if the conversion fails.

### Length()

`public int Length()`

Returns the length of the string.

### LengthByte()

`public int LengthByte()`

Returns the number of bytes in a UTF-8 array representing a string.

### IsEmpty()

`public bool IsEmpty()`

Returns true if the string is empty, false otherwise.

### IndexOf(string)

`public int IndexOf(string value)`

Searches for the string specified by the argument and returns the position of the first occurrence of the string if found. Returns -1 if the searched character is not found.

### SubString(int, int)

`public string SubString(int startIndex, int length)`

Generates a substring given a starting position and length in a string.

### Append(int)

`public void Append(int value)`

Appends the characters specified by the arguments to the end of the current string.

### RemoveLast()

`public void RemoveLast()`

Removes the last character of a string.

### RemoveAt(int)

`public void RemoveAt(int index)`

Deletes one character from the position specified by the argument.

### Split()

`public list<string> Split()`

Splits a string by "whitespace characters" and returns the result as a list of strings.

The following characters are considered "whitespace characters":

- Space (0x20, ' ')
- Form feed (0x0c, '\f')
- Line feed (0x0a, '\n')
- Carriage return (0x0d, '\r')
- Horizontal tab (0x09, '\t')
- Vertical tab (0x0b, '\v')

### Split(int)

`public list<string> Split(int opt)`

Splits a string by whitespace characters and returns the result as a list of strings.

You can pass an option value as an argument to modify the behavior during splitting.

### Split(string)

`list<string> Split(string separator)`

Splits a string by the specified separator and returns the result as a list of strings.

### Split(string, int)

`list<string> Split(string separator, int opt)`

Splits a string by the specified separator and returns the result as a list of strings.

You can pass an option value (opt) as an argument to modify the behavior during splitting.

## Split Options

### SplitOpt_None

`const int SplitOpt_None = 0;`

No special behavior is applied.

### SplitOpt_RemoveEmpty

`const int SplitOpt_RemoveEmpty = 1;`

If the strings contain whitespace characters after splitting, they are discarded.

### SplitOpt_Trim

`const int SplitOpt_Trim = 2;`

Trims existing whitespace characters on before and after the split strings.

### SplitOpt_RemoveAll

`const int SplitOpt_RemoveAll = SplitOpt_RemoveEmpty | SplitOpt_Trim;`

A combination of the SplitOpt_RemoveEmpty and SplitOpt_Trim options.

***

## special operators

### [ ] operator

Gets the character at the specified position in the string as an int value. Assignment to the specified position is also possible.

```
string text = "Hello!";

// get 'H'
int part = text[0];

// Rewrite "Hello!" to "Hello?"
text[text.Length() - 1] = '?';
```

### + operator

Concatenate strings to produce a new string.

```
string text = "Vket";

// create "VketCloud"
string vketcloud = text + "Cloud";

// replace the string itself with the += operator
text += "Cloud";
```

### % operator

Generates a new string by applying various types of values given as arguments to a template string that follows a certain format.

It is also possible to convert numbers to strings, as in the sample code below.

```
int n;
string s;

s = "%d" %n;
```

Place format specifier character starting from "%" inside the string to apply the arguments of % operators in its order.

* %d
  * is a format specifier that represents an integer value.
* %f
  * is a format specifier that represents a floating-point number.
* %s
  * is a format specifier that represents a string.

```
// 1 + 1 = 2
int answer = 2;
hsSystemOutput("1 + 1 = %d\n" % answer);

// VketCloud hello world!
string hello  = "hello world!";
hsSystemOutput("VketCloud %s\n" % hello);

// "int value = myArray[99];"
hsSystemOutput("int %s = %s[%d];\n" % "value" % "myArray" % 99);
```
