# Built-in Functions - Common Dialog

Utility functions to manage common dialogs.

Common dialogs can have various combinations of titles, buttons (OK/Yes/No), and button lengths, resulting in eight possible configurations.

***

## List of Functions

### hsCommonDialogIsOpened

`bool hsCommonDialogIsOpened()`

Checks if a common dialog is already open. Returns `true` if a dialog is open. Only one common dialog can be open at a time, so ensure that no other HeliScript code has opened a dialog before attempting to open a new one.

### hsCommonDialogSetUseTitle

`void hsCommonDialogSetUseTitle(bool Use)`

Sets whether to use a title. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetUseYesNoButton

`void hsCommonDialogSetUseYesNoButton(bool Use)`

Sets whether to use Yes/No buttons. If not used, only the OK button will be available. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetUseLongButton

`void hsCommonDialogSetUseLongButton(bool Use)`

Sets whether to use long buttons. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetTitle

`void hsCommonDialogSetTitle(string Text)`

Sets the title text. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetText

`void hsCommonDialogSetText(string Text)`

Sets the main body text. To include line breaks, use `\n` within the string. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetTextAlignment

`void hsCommonDialogSetTextAlignment(int Alignment)`

Specifies the text alignment for the main body text. Use the values from the table below. Must be set before calling `hsCommonDialogOpen`.

| Value      | Alignment    |
|------------|--------------|
| HSAlignLT  | Top Left     |
| HSAlignCT  | Top Center   |
| HSAlignRT  | Top Right    |
| HSAlignLM  | Middle Left  |
| HSAlignCM  | Middle Center|
| HSAlignRM  | Middle Right |
| HSAlignLB  | Bottom Left  |
| HSAlignCB  | Bottom Center|
| HSAlignRB  | Bottom Right |

### hsCommonDialogSetTextOverflowWrap

`void hsCommonDialogSetTextOverflowWrap(bool OverflowWrap)`

Sets whether to automatically wrap text.

### hsCommonDialogSetTextURLClickable

`void hsCommonDialogSetTextURLClickable(bool URLClickable)`

Sets whether URLs in the text are clickable.

### hsCommonDialogSetOKButtonText

`void hsCommonDialogSetOKButtonText(string Text)`

Sets the text for the OK button. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetYesButtonText

`void hsCommonDialogSetYesButtonText(string Text)`

Sets the text for the Yes button. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetNoButtonText

`void hsCommonDialogSetNoButtonText(string Text)`

Sets the text for the No button. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetOKButtonDelegate

`void hsCommonDialogSetOKButtonDelegate(hsDGCommonDialog dg)`

Sets the delegate function for the OK button click event. The delegate type is `void func(void)`. Must be set before calling `hsCommonDialogOpen`.

Example:

```csharp
hsCommonDialogSetOKButtonDelegate(OnDialogOK);

public void OnDialogOK(void)
{
	system.Output("OnDialogOK callback\n");
	
	hsCommonDialogClose();
}
```

### hsCommonDialogSetYesButtonDelegate

`void hsCommonDialogSetYesButtonDelegate(hsDGCommonDialog dg)`

Sets the delegate function for the Yes button click event. The delegate type is `void func(void)`. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogSetNoButtonDelegate

`void hsCommonDialogSetNoButtonDelegate(hsDGCommonDialog dg)`

Sets the delegate function for the No button click event. The delegate type is `void func(void)`. Must be set before calling `hsCommonDialogOpen`.

### hsCommonDialogOpen

`bool hsCommonDialogOpen()`

Opens the common dialog. Returns `false` if an error occurs, such as if a dialog is already open.<br>
When using in Canvas HeliScript, you need to add `"canvas"` as an argument and call it like `hsCommonDialogOpen("canvas")`. No arguments are needed for non-Canvas cases.

### hsCommonDialogClose

`bool hsCommonDialogClose()`

Closes the common dialog. Returns `false` if an error occurs, such as if the dialog is already closed.

***
