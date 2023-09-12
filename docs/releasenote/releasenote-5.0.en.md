# 5.0.1
- Settings have been newly integrated with Preference and Controll Panel.
- Tartup Window, which replaces some functions of Controll Panel, has been newly established.
- A added QR code generation function to enter the local environment from a smartphone.
- A added a debug log system that facilitates the error code tracking.
- The addition of a debug log system has made the check tool OBSOLETE.

-------------------

# 5.0.0
■ Function addition / specification change, etc.

- The chat balloon has been returned to the specification that displays it simultaneously on the name tag.
- The emotions do not make free falling and collision judgments.
- TheXTPLANE's texture size 2 is no longer a riding limit.
- The iOS/iPados/macOS is used to perform anti -aliasing processing using FXAA.
- I made HUD hidden with F9 key.
- The camera can rotate with the QE key.
- A added ParticleEditor / Maxparticle.
- A added ParticleEditor / Coloroverlifetime.
- Hemisphere has been added to ParticleEditor / Shape.
- The player's dynamic reflection probe has been adjusted.

■ Function addition / SCENE file

- "DrawcircleShadow" has been added to Motions.
- A added Camera to ITEM Type.(Function to use ITEM's posture as a camera)
- Fontfamily, Textalignment, Charaspace, Linespace, OverflowWrap have been added to TextPlane.
- A added TPSrotate to Player.(Used to capture the camera from the front of the avatar)
- "CircleShadow" has been added to ITEM.(Used when displaying Marukage along with items)

■ Function addition / Heliscript

- Player.showChatballoon (display of balloon) has been added.
- Player.changeMotion/setnextMotion has been added.
- Item.getworkdquaternion/GetworkDrotate has been added.
- Item.getworldpos has been added.
- Item.setCamera/ResetCamera has been added.(Function to use ITEM's posture as a camera)
- Onwindowsactivate has been added.
- Hscanvasgetguipos has been added.
- A added hsclipboardWriteText.(Text copy on the clipboard)
- Onclickempty has been added.(Click the invalid range)
- Vector3.getnormalize has been added.
- HsiteMgetSelf has been added.
- HSSTARTLAYERANIMATION/HSSTARTGUIANIMATION has been added.(UI animation)

■ Bug correction

- Fixed a problem that VketChandOublesideDcutoff is not drawn on both sides.
- Tem.isplay () has modified problems that do not work in Type: Object.