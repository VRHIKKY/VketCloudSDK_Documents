# HEOAreaCollider Does Not Work When Overlapping with a MeshCollider

## Phenomenon
When a Cube with both a MeshCollider and an HEOAreaCollider overlaps, no Action set on the HEOAreaCollider will function.

In the test environment, the action was set to play particles, but they did not play.

![MeshColliderAndAreaColliderOverrap](img/MeshColliderAndAreaColliderOverrap.jpg)

!!! info "Environment"
    SDK Version: 4.1.1 <br>
    OS: Windows 10 <br>
    Unity: 2019.4.31.f1 <br>
    Browser: Google Chrome

## Steps Taken to Resolve
### ① Playing the particles using HeliScript

Attempted to play the relevant particles using `hel_scene_PlayItem()`, and the particles played successfully.

### ② Adjusting the position of the Cube’s collision box

Changed the position of the Cube to make entry and exit more noticeable, but the particles still did not play.

### ③ Moving the spawn point outside the area collider

Moved the spawn point outside the area collider to make the playback behavior upon entering more observable, but the particles still did not play.

### ④ Removing the MeshCollider

Previously, there was an issue where jumping didn’t work due to a MeshCollider.
Considering this, deactivating the MeshCollider and excluding it was expected to improve behavior.

## Conclusion

Removing the MeshCollider allowed the AreaCollider to function properly.  
Therefore, when an AreaCollider overlaps with a MeshCollider, there is a possibility that the AreaCollider will not operate.
