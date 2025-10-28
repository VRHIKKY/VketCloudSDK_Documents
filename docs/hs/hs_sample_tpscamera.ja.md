# TPSカメラ
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
const float TPSCAMERA_PITCH_LIMIT       = 80.0f;    // カメラのX軸回転の上限
const float TPSCAMERA_PITCH_LIMIT_MINUS = -45.0f;   // カメラのX軸回転の下限
const float TPSCAMERA_DEFAULT_DISTANCE  = -10.0f;   // プレイヤーからカメラまでの距離
const float TPSCAMERA_DEFAULT_YAW       = 180.0f;   // カメラの初期Y軸回転（180度後ろ向き）
const float TPSCAMERA_MOUSE_SENSITIVITY   = 3.0f;

component TestPlayerTPSCamera
{
    Player m_Player;

    // カメラ関連
    Item m_Camera;
    Vector3 m_CameraPosition;
    Quaternion m_CameraCurrentQuaternion;
    Vector3 m_CameraNextEuler;
    Vector3 m_TargetPos;

    // マウス関連
    int m_PreMousePosX;
    int m_PreMousePosY;
    HS2DI m_CurrentMousePos;
    bool m_IsMouseLLock;        // マウスドラッグを無効にするためのロック
    bool m_PreMouseLDown;       // 前フレームのマウス左クリック状態

    public TestPlayerTPSCamera()
    {
        m_Player = hsPlayerGet();
        
        // カメラ用
        // シーンファイルにnameが「Camera」のcameraタイプアイテムがある前提で取得する
        m_Camera = hsGetItem("Camera");
        if(m_Camera !== null) 
        {
            // カメラとして設定
            m_Camera.SetCamera();
        }
        m_CameraCurrentQuaternion = new Quaternion();
        m_CameraNextEuler = makeVector3(TPSCAMERA_DEFAULT_DISTANCE,TPSCAMERA_DEFAULT_YAW,0.0f);
        m_TargetPos = new Vector3();

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

        // マウス入力によるカメラ回転制御
        UpdateCameraRotateByMouse();    

        // カメラの位置・回転を更新   
        UpdateCamera();                 

        // プレイヤー→カメラ方向にレイを飛ばし、遮蔽物があればカメラ位置を補正する
        Vector3 Dir = m_TargetPos.SubNew(m_Camera.GetPos()).GetNormalize();
        UpdateCameraCollisionWorld(m_Camera.GetPos(),Dir);
    }

    void UpdateCameraRotateByMouse()
    {
        int CurrentMousePosX,CurrentMousePosY;
        hsInputGetMousePos(CurrentMousePosX,CurrentMousePosY);
        m_CurrentMousePos.SetXY(CurrentMousePosX,CurrentMousePosY);

        // マウスダウン
        bool IsNowDown = hsInputClickButton(HSMouse_Left);
        if(!m_PreMouseLDown && IsNowDown && !hsCanvasGetIsInEmptyArea(m_CurrentMousePos))
        {
            // ドラッグ開始位置がGUI上であればロックをかけドラッグ操作を無効化
            m_IsMouseLLock = true;
        }
        // マウスアップ
        else if(m_PreMouseLDown && !IsNowDown)
        {
            m_IsMouseLLock = false;
        }

        // ロックされていない場合のみドラッグ処理を行う
        if(!m_IsMouseLLock)
        {
            bool CurrentLClick = hsInputClickButton(HSMouse_Left);
            if(CurrentLClick)
            {   
                // マウス移動量
                float DeltaMouseX = (CurrentMousePosX - m_PreMousePosX) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * TPSCAMERA_MOUSE_SENSITIVITY;
                float DeltaMouseY = (CurrentMousePosY - m_PreMousePosY) * hsCameraGetRotateSpeed() * hsSystemGetDeltaTime() * TPSCAMERA_MOUSE_SENSITIVITY;
                
                // カメラ設定「上下操作」によって傾ける方向を反転させる
                if(hsCameraGetXRotateReverse()) m_CameraNextEuler.x = Clamp(m_CameraNextEuler.x + DeltaMouseY, TPSCAMERA_PITCH_LIMIT_MINUS, TPSCAMERA_PITCH_LIMIT);
                else m_CameraNextEuler.x = Clamp(m_CameraNextEuler.x - DeltaMouseY, TPSCAMERA_PITCH_LIMIT_MINUS, TPSCAMERA_PITCH_LIMIT);
                
                // カメラ設定「左右操作」によって傾ける方向を反転させる
                if(hsCameraGetYRotateReverse()) m_CameraNextEuler.y -= DeltaMouseX;
                else m_CameraNextEuler.y += DeltaMouseX;
            }
        }
        
        // 前フレームのマウスクリックと位置の状態を保存
        m_PreMouseLDown = IsNowDown;
        m_PreMousePosX = CurrentMousePosX;
        m_PreMousePosY = CurrentMousePosY;
    }

    void UpdateCamera()
    {
        // カメラの回転を計算
        Quaternion CameraYRotate = makeQuaternionYRotation(hsMathDegToRad(m_CameraNextEuler.y));
        Quaternion CameraXRoate = makeQuaternionXRotation(hsMathDegToRad(m_CameraNextEuler.x));
        Quaternion NextRotate = makeQuaternionMul(CameraYRotate,CameraXRoate);
        Quaternion NormNextRotate = GetNormailizeQuaternion(NextRotate);
        m_CameraCurrentQuaternion = NormNextRotate;
        
        // プレイヤーの背後にカメラを配置するための位置を計算
        Vector3 OffsetPos = makeVector3(0.0f, 0.0f, TPSCAMERA_DEFAULT_DISTANCE);
        Vector3 Direction = OffsetPos.Rotate(m_CameraCurrentQuaternion).GetNormalize();
        OffsetPos = makeVector3(Direction.x * TPSCAMERA_DEFAULT_DISTANCE,Direction.y * TPSCAMERA_DEFAULT_DISTANCE,Direction.z * TPSCAMERA_DEFAULT_DISTANCE);
        m_TargetPos = makeVector3(m_Player.GetPos().x,m_Player.GetPos().y + m_Player.GetHeadHeight(), m_Player.GetPos().z);
        Vector3 FinalPos = makeVector3Add(m_TargetPos,OffsetPos);
        Quaternion FinalRotate = makeQuaternionMul(m_CameraCurrentQuaternion,makeQuaternionYRotation(hsMathDegToRad(TPSCAMERA_DEFAULT_YAW)));
        m_Camera.SetPos(FinalPos);
        m_Camera.SetQuaternion(FinalRotate);
    }
    
    void UpdateCameraCollisionWorld(Vector3 Origin , Vector3 Dir)
    {
        float Length = m_TargetPos.Distance(m_Camera.GetPos());
        HSRaycastHIT HitItem = hsItemRaycast(Origin, Dir, Length);
        if(HitItem === null) return;
        m_Camera.SetPos(HitItem.Pos);
    }
    
    Quaternion GetNormailizeQuaternion(Quaternion q)
    {
        Quaternion Result = new Quaternion();
        float Denom = hsMathSqrt(q.x * q.x + q.y * q.y + q.z * q.z + q.w * q.w);
        if(Denom!=0.0f)
        {
            Result.x = q.x / Denom;
            Result.y = q.y / Denom;
            Result.z = q.z / Denom;
            Result.w = q.w / Denom;
        }
        return Result;
    }
    
    float Clamp(float value, float minVal, float maxVal)
    {
        if (value < minVal) return minVal;
        if (value > maxVal) return maxVal;
        return value;
    }
}
```
