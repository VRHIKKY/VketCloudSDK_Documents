# インターフェース
インターフェースにより、具体的な実装を持たず、クラスが実装しておくべき手続きのみに限定した型を定義できます。

## インターフェースの定義

予約語の interface の次に、インターフェース名を指定したブロックを定義します。

インターフェースには、メソッドのみを定義できます。また、メソッドの中身を実装することはできず、メソッドの名前と型(戻り値と引数)のみが定義可能です。
```
// 形状を表現するインターフェース
interface Shape {
  // Shape は Draw によって描画が可能である、という振る舞いを宣言する
  public void Draw();
}
```

### インターフェース定義の詳細な仕様
- インターフェースのメソッド定義は、必ずpublicでなければなりません。メソッドの public 指定を省くことも可能ですが、その場合は自動的に public であると見なされます。
- メソッドに実体、つまり { } のブロックと、その中にあるコードを書くことはできません。
- クラスと同じくメソッドオーバーロードが可能です。これにより、1つのインタフェースの中に「同名で、戻り値の型も同じだが、引数の個数や型が異なるメソッド」を複数定義できます。

## インターフェースをクラスに実装する
クラス名の後に ":" を置き、その後にインターフェース名を記述することで、クラスがインターフェースを実装することができます。

インターフェースを実装したクラスは、そのインターフェースが定義している全てのメソッドを実装しなければなりません。
```
// 円(Circle)クラスは、インターフェース Shape を実装する
class Circle : Shape {
  // Shapeインターフェースを実装したので、Shapeで定義されているDraw()メソッドの実装が必要。
  public void Draw() {
    hsSystemWriteLine(" *   *");
    hsSystemWriteLine("*     *");
    hsSystemWriteLine(" *   *");
  }
}
```

## クラスが複数のインターフェースを実装する
クラスは、複数のインターフェースを同時に実装できます。
```
// 飛行機能のインターフェース
interface Flyable {
    public void fly(); // 飛ぶ
}

// 撮影機能のインターフェース
interface Shootable {
    public void takePicture(); // 写真を撮る
}

// 輸送機能のインターフェース
interface Transportable {
    public void load(String item); // 荷物を積む
}

// 上記すべてのインターフェースを実装するドローンクラス
class Drone : Flyable, Shootable, Transportable {
  public void fly() { ... }

  public void takePicture() { ... }

  public void load(String item) { ... }
}
```

## インターフェースの拡張
インターフェースは、他のインターフェースを実装し、その際に独自のメソッドを追加して、機能を拡張することができます。
```
// IDrone インターフェースは、 Flyable, Shootable, Transportable のメソッド定義情報を全て継承する
interface IDrane : Flyable, Shootable, Transportable {
  // IDrone で独自のメソッド GetID を追加する
  public void GetID();
}

// Drone クラスは、IDrone インターフェースを実装する
class Drone : IDrone {
  public void fly() { ... }

  public void takePicture() { ... }

  public void load(String item) { ... }

  public void GetID() { ... }
}
```


## サンプルコード
```
// 形状(Shape)が持つべき機能を定義するインターフェース
interface Shape {
  // Shape は Draw によって描画が可能である、という振る舞いを宣言する
  public void Draw();
}

// 円(Circle)クラスが、Shapeインターフェースを実装する
class Circle : Shape {
  // Shapeインターフェースを実装したので、Shapeで定義されているDraw()メソッドの実装が必要
  public void Draw() {
    hsSystemWriteLine(" *   *");
    hsSystemWriteLine("*     *");
    hsSystemWriteLine(" *   *");
  }
}

// 四角(Rectangle)クラスが、Shapeインターフェースを実装する
class Rectangle : Shape {
  public void Draw() {
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
    hsSystemWriteLine("*******");
  }
}

component Comp {
  public Comp() {
    // インターフェース型には、それを実装したクラスを代入できる

    // 図形を表現するインターフェース型変数
    Shape shape;

    // ShapeにCircleを代入する
    shape = new Circle();
    hsSystemWriteLine("[Draw Circle]");
    shape.Draw();

    // ShapeにRectangleを代入する
    shape = new Rectangle();
    hsSystemWriteLine("[Draw Triangle]");
    shape.Draw();
  }
}
```

サンプルコードの実行結果
```
[Draw Circle]
 *   *
*     *
 *   *
[Draw Rectangle]
*******
*******
*******
*******
```
