# FPS Camera Sample

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
const float FPSCAMERA_MOUSE_SENSITIVITY   = 3.0f;
const float FPSCAMERA_MAX_PITCH    = 85.0f;

component TestPlayerFPSCamera
{
    Player m_Player;

    // Mouse related
    int m_PreMousePosX;
    int m_PreMousePosY;
    HS2DI m_CurrentMousePos;
    bool m_IsMouseLLock;
    bool m_PreMouseLDown;

    // Camera related
    Item m_Camera;
    Vector3 m_CameraPosition;
    float m_Yaw;
    float m_Pitch;

    public TestPlayerFPSCamera()
    {
        m_Player = hsPlayerGet();

        // Turn off drawing so that the player does not obstruct the view
        hsPlayerSetDrawableSelf(false);

        // For camera
        // Get assuming there is a camera type item with name "Camera" in the scene file
        m_Camera = hsGetItem("Camera");
        if(m_Camera !== null) 
        {
            // Set as camera
            m_Camera.SetCamera();
        }
        m_Yaw = 0.0f;
        m_Pitch = 0.0f;
        
        m_PreMousePosX = 0;
        m_PreMousePosY = 0;
        m_PreMouseLDown = false;
    }

    public void Update()
    {
        // Get player position and set it as camera position
        m_CameraPosition = m_Player.GetPos();
        m_CameraPosition.y += 1.6f; // Add height for eye level
        m_Camera.SetPos(m_CameraPosition);

        // Mouse control
        int CurrentMousePosX;
        int CurrentMousePosY;
        hsInputGetMousePos(CurrentMousePosX, CurrentMousePosY);
        bool IsNowDown = hsInputIsMouseLButtonDown();

        // Detect mouse click start
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
                float DeltaMouseX = (CurrentMousePosX - m_PreMousePosX) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * FPSCAMERA_MOUSE_SENSITIVITY;
                float DeltaMouseY = (CurrentMousePosY - m_PreMousePosY) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * FPSCAMERA_MOUSE_SENSITIVITY;

                if(hsCameraGetYRotateReverse()) m_Yaw -= DeltaMouseX;
                else m_Yaw   += DeltaMouseX;
                
                if(hsCameraGetXRotateReverse()) m_Pitch -= DeltaMouseY;
                else m_Pitch += DeltaMouseY;
                
                // Pitch limitation
                m_Pitch = Clamp(m_Pitch, -FPSCAMERA_MAX_PITCH, FPSCAMERA_MAX_PITCH);
                
                // Compose Yaw and Pitch rotations to build FPS camera rotation
                Quaternion Yaw = makeQuaternionYRotation(hsMathDegToRad(m_Yaw));
                Quaternion Pitch = makeQuaternionXRotation(hsMathDegToRad(m_Pitch));
                Quaternion CameraRotate = makeQuaternionMul(Yaw,Pitch);
                
                m_Camera.SetQuaternion(CameraRotate);
            }
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
