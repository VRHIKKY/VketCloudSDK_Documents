# FPSカメラ
Sceneファイルに下記設定を追加
```
	"items": [
        {
            "name": "Camera",
            "type": "camera"
        }
    ]
```

## 実装例

```
const float FPSCAMERA_MOUSE_SENSITIVITY   = 3.0f;
const float FPSCAMERA_MAX_PITCH    = 85.0f;

component TestPlayerFPSCamera
{
    Player m_Player;

    // マウス関連
    int m_PreMousePosX;
    int m_PreMousePosY;
    HS2DI m_CurrentMousePos;
    bool m_IsMouseLLock;
    bool m_PreMouseLDown;

    // カメラ関連
    Item m_Camera;
    Vector3 m_CameraPosition;
    float m_Yaw;
    float m_Pitch;

    public TestPlayerFPSCamera()
    {
        m_Player = hsPlayerGet();

        // プレイヤーで視界が遮られないように描画を切る
        hsPlayerSetDrawableSelf(false);

        // カメラ用
        // シーンファイルにnameが「Camera」のcameraタイプアイテムがある前提で取得する
        m_Camera = hsGetItem("Camera");
        if(m_Camera !== null) 
        {
            // カメラとして設定
            m_Camera.SetCamera();
        }
        m_Yaw = 0.0f;
        m_Pitch = 0.0f;

        // マウス用
        m_PreMousePosX = 0.0f;
        m_PreMousePosY = 0.0f;
        m_CurrentMousePos = new HS2DI();
        m_IsMouseLLock = false;
        m_PreMouseLDown = false;
    }
    
    public void Update()
    {   
        if(m_Player === null || m_Camera === null) return;
        UpdateCameraRotateByMouse();
        UpdateCamera();
    }

    // プレイヤーの頭の位置にカメラを設定
    void UpdateCamera()
    {
        m_CameraPosition = makeVector3(m_Player.GetPos().x,m_Player.GetPos().y + m_Player.GetHeadHeight(), m_Player.GetPos().z);
        m_Camera.SetPos(m_CameraPosition);
    }
    
    void UpdateCameraRotateByMouse()
    {
        // マウスカーソル位置取得
        int CurrentMousePosX,CurrentMousePosY;
        hsInputGetMousePos(CurrentMousePosX,CurrentMousePosY);
        m_CurrentMousePos.SetXY(CurrentMousePosX,CurrentMousePosY);

        // マウスダウン
        bool IsNowDown = hsInputClickButton(HSMouse_Left);
        if(!m_PreMouseLDown && IsNowDown && !hsCanvasGetIsInEmptyArea(m_CurrentMousePos))
        {
            // ドラッグ開始位置がGUIエリア内であればロックをかけドラッグできないようにする
            m_IsMouseLLock = true;
        }
        // マウスアップ
        else if(m_PreMouseLDown && !IsNowDown)
        {
            m_IsMouseLLock = false;
        }
        
        // GUI上でドラッグの場合などはロックがかかるためドラッグ処理を行わない
        if(!m_IsMouseLLock)
        {
            // ドラッグ処理
            bool CurrentLClick = hsInputClickButton(HSMouse_Left);
            if(CurrentLClick)
            {   
                float DeltaMouseX = (CurrentMousePosX - m_PreMousePosX) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * FPSCAMERA_MOUSE_SENSITIVITY;
                float DeltaMouseY = (CurrentMousePosY - m_PreMousePosY) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * FPSCAMERA_MOUSE_SENSITIVITY;

                if(hsCameraGetYRotateReverse()) m_Yaw -= DeltaMouseX;
                else m_Yaw   += DeltaMouseX;
                
                if(hsCameraGetXRotateReverse()) m_Pitch -= DeltaMouseY;
                else m_Pitch += DeltaMouseY;
                
                // ピッチ制限
                m_Pitch = Clamp(m_Pitch, -FPSCAMERA_MAX_PITCH, FPSCAMERA_MAX_PITCH);
                
                // YawとPitchの回転を合成して、FPSカメラの回転を構築
                Quaternion Yaw = makeQuaternionYRotation(hsMathDegToRad(m_Yaw));
                Quaternion Pitch = makeQuaternionXRotation(hsMathDegToRad(m_Pitch));
                Quaternion CameraRotate = makeQuaternionMul(Yaw,Pitch);
                
                m_Camera.SetQuaternion(CameraRotate);
            }
        }

        // 前フレームのマウス状態を記録
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
