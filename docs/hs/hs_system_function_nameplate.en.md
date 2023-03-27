
# Built-in functions - nameplate

Functions for dynamically customizing the nameplate displayed above the player avatar's head.

To uniquely identify each player, it uses the ID for receiving custom state/custom data in (network function) [hs_system_function_net.md].

If you specify an empty string for the ID, it will perform the operation on your own nameplate. Also, the argument name means the "name" element of the nameplate itself, not the player's name.


***

## Show/hide

### hsNamePlateSetShow(string, string, bool)
`bool hsNamePlateSetShow(string id, string name, bool show)`

Specify the nameplate by ID and name, show it if show is set to true and hide it if show is set to false.


## Changing text elements

### hsNamePlateClearText(string, string)
`bool hsNamePlateClearText(string id, string name)`

Specify a nameplate by ID and name and clear the text.

### hsNamePlateWriteText(string, string, int, int, string)
`bool hsNamePlateWriteText(string id, string name, int x, int y, string text)`

Specify a nameplate by ID and name and set the new text. You can specify the offset with x, y.


## Changing image elements

### hsNamePlateSetImage(string, string, string)
`bool hsNamePlateSetImage(string id, string name, string fileName)`

Specify a nameplate by ID and name and apply a new image.