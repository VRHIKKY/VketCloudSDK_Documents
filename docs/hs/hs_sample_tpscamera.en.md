# TPS Camera Sample

Add the following settings to the Scene file:

```
	"items": [
        {
            "name": "Camera",
            "type": "camera"
        }
    ]
```

## Implementation Example

```
const float TPSCAMERA_PITCH_LIMIT       = 80.0f;    // Upper limit of camera X-axis rotation
const float TPSCAMERA_PITCH_LIMIT_MINUS = -45.0f;   // Lower limit of camera X-axis rotation
const float TPSCAMERA_DEFAULT_DISTANCE  = -10.0f;   // Distance from player to camera
const float TPSCAMERA_DEFAULT_YAW       = 180.0f;   // Initial Y-axis rotation of camera (180 degrees backward)
const float TPSCAMERA_MOUSE_SENSITIVITY = 3.0f;

component TestPlayerTPSCamera
{
    Player m_Player;

    // Camera related
    Item m_Camera;
    Vector3 m_CameraPosition;
    Quaternion m_CameraCurrentQuaternion;
    Vector3 m_CameraNextEuler;
    Vector3 m_TargetPos;

    // Mouse related
    int m_PreMousePosX;
    int m_PreMousePosY;
    HS2DI m_CurrentMousePos;
    bool m_IsMouseLLock;        // Lock to disable mouse drag
    bool m_PreMouseLDown;       // Previous frame's mouse left click state

    public TestPlayerTPSCamera()
    {
        m_Player = hsPlayerGet();
        
        // For camera
        // Get assuming there is a camera type item with name "Camera" in the scene file
        m_Camera = hsGetItem("Camera");
        if(m_Camera !== null) 
        {
            // Set as camera
            m_Camera.SetCamera();
        }

        // Camera initial settings
        m_CameraNextEuler = makeVector3(0.0f, TPSCAMERA_DEFAULT_YAW, 0.0f);
        
        m_PreMousePosX = 0;
        m_PreMousePosY = 0;
        m_PreMouseLDown = false;
        m_IsMouseLLock = false;
    }

    public void Update()
    {
        // Get player position
        Vector3 PlayerPos = m_Player.GetPos();
        
        // Mouse control
        int CurrentMousePosX;
        int CurrentMousePosY;
        hsInputGetMousePos(CurrentMousePosX, CurrentMousePosY);
        bool IsNowDown = hsInputIsMouseLButtonDown();

        // Detect mouse click start/end
        bool CurrentLClick = false;
        if(IsNowDown && !m_PreMouseLDown)
        {
            m_IsMouseLLock = true;
        }
        else if(!IsNowDown && m_PreMouseLDown)
        {
            m_IsMouseLLock = false;
        }

        if(m_IsMouseLLock && IsNowDown)
        {
            CurrentLClick = true;
        }

        if(m_Camera !== null)
        {
            if(CurrentLClick)
            {   
                // Calculate mouse movement
                float DeltaMouseX = (CurrentMousePosX - m_PreMousePosX) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * TPSCAMERA_MOUSE_SENSITIVITY;
                float DeltaMouseY = (CurrentMousePosY - m_PreMousePosY) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * TPSCAMERA_MOUSE_SENSITIVITY;

                // Update camera rotation
                if(hsCameraGetYRotateReverse()) m_CameraNextEuler.y -= DeltaMouseX;
                else m_CameraNextEuler.y += DeltaMouseX;
                
                if(hsCameraGetXRotateReverse()) m_CameraNextEuler.x -= DeltaMouseY;
                else m_CameraNextEuler.x += DeltaMouseY;
                
                // Apply pitch limitations
                m_CameraNextEuler.x = Clamp(m_CameraNextEuler.x, TPSCAMERA_PITCH_LIMIT_MINUS, TPSCAMERA_PITCH_LIMIT);
            }

            // Set target position (player position + height offset)
            m_TargetPos = PlayerPos;
            m_TargetPos.y += 1.6f; // Eye level height

            // Calculate camera position
            Quaternion CameraRotate = makeQuaternionFromEulerAngles(hsMathDegToRad(m_CameraNextEuler.x), hsMathDegToRad(m_CameraNextEuler.y), hsMathDegToRad(m_CameraNextEuler.z));
            Vector3 CameraDirection = makeVector3(0.0f, 0.0f, TPSCAMERA_DEFAULT_DISTANCE);
            CameraDirection = makeQuaternionMulVector3(CameraRotate, CameraDirection);
            
            m_CameraPosition = makeVector3Add(m_TargetPos, CameraDirection);
            
            // Set camera position and rotation
            m_Camera.SetPos(m_CameraPosition);
            m_Camera.SetQuaternion(CameraRotate);
        }

        // Record previous frame's mouse state
        m_PreMouseLDown = IsNowDown;
        m_PreMousePosX = CurrentMousePosX;
        m_PreMousePosY = CurrentMousePosY;
    }
    
    float Clamp(float value, float minVal, float maxVal)
    {
        if (value < minVal) return minVal;
        if (value > maxVal) return maxVal;
        return value;
    }
}
```
