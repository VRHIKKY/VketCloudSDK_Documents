#HEO Collider
![HEOCollider](img/HEOCollider.png)

HEOColider is a component that allows you to set how the Box Collider behaves.

| Label | Function |
| ---- | ---- |
| Collider Type | Specifies the type of collider. |
| Collider Target | Specifies the target. |
| Use Physics | Enables physics engine for the Box Collider. |
| Fixed | Allows you to fix the position of the Box Collider. |
| Enable Body | Allows you to choose whether to enable physics calculations when the object is loaded. |
| Mass | Adjusts the mass parameter. |
| Restitution | Adjusts the restitution parameter. |

## Collider Type
| Type | Function |
| ---- | ---- |
| Collider | Serves the role of a collider. |
| Clickable | Allows the player to click on it. |
| Area | A collider that can be passed through. By combining with HEOAreaCollider, you can set any action when entering the range. |
| Occlusion | Enables occlusion when touched. |
| Reflection Probe | Enables reflection probe when touched. |
| In View | Handles the judgement of whether it is in the field of view or not. |

## Collider Target
| Target |
| ---- |
| None |
| Avatar |
| Camera |