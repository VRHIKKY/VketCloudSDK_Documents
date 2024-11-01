# Version 14.2

## HeliodorLib (Engine used in browser-displayed worlds)

### Bug Fixes
* Fixed an issue where the avatar continued to be displayed as a dummy avatar when the other party was temporarily blocked
* Fixed an issue where the MToon outline mask did not work
* Fixed an issue where setting an NG word in the nickname input field at the first transition would display the NG word to others
* Fixed an issue where text chat from users who set an NG word in their nickname did not function correctly
* Fixed an issue where you could not jump well on a slope

### Feature Additions and Adjustments
* When CharaName is not set in ChatGPT collaboration, it is now displayed as ChatGPT
* Added a feature to share photos taken

### HeliScript
* Fixed the warning that was displayed when defining variables with the same name in a function
* Fixed an issue where the escape character "%%" was converted to "%" and the error string was not displayed
* Added an hs function to get the Item class from the instance ID of the Item
* Added hsMathAcos function
* Added hs functions to convert between degrees and radians
