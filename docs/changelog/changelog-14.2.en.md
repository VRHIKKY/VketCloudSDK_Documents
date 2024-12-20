# SDK Manual Change Log - Ver 14.2

## January 10 2025 Update

## January 10 2025 - Added Pages

- World Making Guide
    - [Execute Activity Json Method](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/ExecuteActivityJsonMethod.html)

## December 13 2024 Update

## December 13 2024 - Edited Pages

- First Steps
    - [Build and Run](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FirstStep/BuildAndRun.html)
        - Added a note that login and API integration are not possible with local builds.
- HeliScript
    - [Components / Callback Functions](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_component.html)
            - Added a description of the callback - ItemCollider
            - Added a description of the callback - Message
    - Built-in Classes and Functions
        - [Quaternion Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_struct_quaternion.html)
            - Added explanation of the Set function
            - Added explanation of the SetEuler function
            - Added explanation of the SetEulerVector3 function
            - Added explanation of the GetEuler function
            - Added explanation of the GetEulerVector3 function
        - [Item Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_class_item.html)
            - Added explanation of the GetParentItem function
            - Added explanation of the SetUVScale function
            - Added explanation of the SetMaterialColor function
            - Added explanation of the SetAlpha function
            - Added explanation of the SetPlaneZBias function
            - Added explanation of the GetPlaneZBias function
            - Added explanation of the ReplaceBackupTexture function
            - Added explanation of the SetPropertyWithoutNotify function
            - Added explanation of the GetNumofPolygon function
            - Added explanation of the SendMessage function
        - [Date Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_class_date.html)
            - Added explanation of the hsParseDate function
            - Added explanation of the operation methods
            - Added explanation of the comparison methods
    - Built-in Functions
        - [Math](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_math.html)
            - Added explanation of the hsMathAcos function
            - Added explanation of the hsMathAsin function
            - Added explanation of the hsMathDegToRad function
            - Added explanation of the hsMathRadToDeg function
        - [Network](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_net.html)
            - Adjusted the layout of the page
        - [GUI](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_gui.html)
            - Added explanation of the hsCanvasSuspendVisibleLayers function
            - Added explanation of the hsCanvasResumeVisibleLayers function
            - Added explanation of the window system
        - [Common Dialog](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_commondialog.html)
            - Modified the description of the common dialog

## December 13 2024 - Added Page
    
- HeliScript
    - Built-in Classes and Functions
        - [TimeSpan Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_class_timespan.html)
    - Built-in Functions
        - [Input](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_input.html)
            - Added an explanation of the hsInputIsKeyDown function
            - Added an explanation of the hsInputSetKeyValid function
        - [JavaScript](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_js.html)
            - Added an explanation of the collaboration between HeliScript and JavaScript
        - [TextChat](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function_textchat.html)
            - Added a description that the hsTextChatOutput function is not available in SDK 12.3.4 or later.
- FAQ
    - [HEOAreaCollider Does Not Work When Overlapping with a MeshCollider](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/MeshColiderAndAreaColliderOverrap.html)
    - [Procedure for Porting Animation Shader Materials for VRChat to VketCloud](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/VRChatAnimationForVKC.html)
    - [Unable to Retrieve Item with hsItemGetOwnScene() Inside Delegate Function](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/FAQ/hsItemGetOwnScene.html)
- World Making Guide
    - [Implementing text that follows the player](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/PlayerFollowText.html)
    - [Guide To Clear Textures](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/GuideToClearTextures.html)
    - [Light Scattering](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/LightScattering.html)

---

## December 6 2024 Update

## December 6 2024 - Edited Pages

- VKC Components
    - VKC Item
        - [VKC Item Background Texture](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VKCComponents/VKCItemBackgroundTexture.html)
            - Added a link to the usage page.
- World Making Guide
    - [Door Opens After Load](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/DoorOpensAfterLoad.html)
        - Fix layout.

## December 6 2024 - Added Page

- World Making Guide
    - [How to Use VKC Item Background Texture](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/BackgroundTexture.html)
        - Added a page on how to use VKC Item Background Texture.

---

## November 29 2024 Update

## November 29 2024 - Edited Pages

- VKC Components
    - VKC Item
        - [VKC Item Field](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VKCComponents/VKCItemField.html)
            - Add a link to the door to open once the loading is complete.
        - [VKC Node UV Scroller](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VKCComponents/VKCNodeUVScroller.html)
            - Add Samples.
- Troubleshooting
    - [Aligning Unity and Vket Cloud Appearance](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/heoexporter/he_align_unity_to_vketcloud.html)
        - Updated images and text with explanations of the legend

## November 29 2024 -  Added Page

- World Making Guide
    - [Door Open After Load](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/DoorOpensAfterLoad.html)
- FAQ
    - [Solution to Build Error when a Mesh Object without UV2 is attached to Mesh](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FAQ/UV2MeshError.html)
    - [Solution for When Clicking on SphereCollider Does Not Respond](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FAQ/SphereCollider.html)

---

## November 27 2024 Update

## November 27 2024 - Added Page

- Release Note
    - [v14.2](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/releasenote/releasenote-14.4.html)
        - Added release notes for v14.4
        - 
---

## November 22 2024 Update

## November 22 2024 -  Added Page

- FAQ
    - [Solution to Profile Image Error When Creating an Account on Old MyVket](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FAQ/ProfileImage.html)
    - [Solution to Build Error when a Mesh Object without UV2 is attached to Mesh](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FAQ/UV2MeshError.html)
    - [Solution for When Clicking on SphereCollider Does Not Respond](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/FAQ/SphereCollider.html)

## November 22 2024 - Edited Pages

- About VketCloudSDK
    - [Setup SDK](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/AboutVketCloudSDK/SetupSDK_external.html)
        - Add a solution for the issue where the EditorCoroutine package cannot be installed.
- VKC Components
    - VKC Node
        - [VKC Node Collider](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VKCComponents/VKCNodeCollider.html)
            - Added a caution note about the collider type setting.
- HeliScript
    - Built-in Functions
        - [System](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_system_function.html)
            - hsWebReload関数の説明を追加

---

## November 8 2024 Update

## November 8 2024 - Edited Pages

- World Making Guide
    - [Vket Cloud Specifications](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldMakingGuide/UnityGuidelines.html)
        - Added a note about build errors when entering a string other than "\n" in VKC Item Text Plane
- VKC Components
    - VKC Item
        - [VKC Item Text Plane](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VKCComponents/VKCItemTextPlane.html)
            - Added a note about build errors when entering a string other than "\n" in regular expressions
- HeliScript
    - Built-in Classes and Functions
        - [Item Class](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/hs/hs_class_item.html)
            - Added the value to return when not found in the methods GetNodeIndexByName, GetNodeNameByIndex, and GetNodePosByIndex

---

## November 1 2024 Update

## November 1 2024 - Edited Pages

- VKC Components
    - VKC Setting
        - [VKC Player Settings](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/VketCloudSettings/PlayerSettings.html)
            - Added description of Enable Click to Move and Despawn Height (Y)
    - VKC Item
        - [VKC Item Field](https://vrhikky.github.io/VketCloudSDK_Documents/14.1/en/VKCComponents/VKCItemField.html)
            - Added description of Force Raycast Check Disable and Force Collider Disable
        - [VKC Item Object](https://vrhikky.github.io/VketCloudSDK_Documents/14.1/en/VKCComponents/VKCItemObject.html)
            - Added description of Force Raycast Check Disable and Force Collider Disable
- ExternalAPI
    - [About Broker API](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/ExternalAPI/BrokerAPI.html)
        - Updated example code

## November 1 2024 - Added Pages

- World Editing Tips
    - [Hierarchy Icons
](https://vrhikky.github.io/VketCloudSDK_Documents/14.2/en/WorldEditingTips/HierarchyIcons.html)
