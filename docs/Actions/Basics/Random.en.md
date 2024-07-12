
# Random

![Random](img/ActionRandom.jpg)

When this node is executed, an action from the subsequent actions in the specified range will be randomly chosen and executed.

| Label | Function |
| ---- | ---- |
| Range | Specify how many actions after the Random node should be included. |

For `Range`, specify how many actions after the Random node should be included in the random lottery.
For example, if the `Range` is set to 3 and the subsequent nodes are as follows,

![RandomSample](img/RandomSample.jpg)

The Random node may only execute one of the three nodes: `Open Links in New Tab` `Warp` `Show Node`. The fourth node, `HideObject`, is excluded from the lottery. That is, `HideObject` will be always executed after executing one of the three preceding nodes.