
# OpenComicViewer
![OpenComicViewer](img/OpenComicViewer.jpg)

Allows you to display sample comics or catalogs when you click on an Object in the World.

|  Label |  function  |
| ----   | ---- |
| name | From the "data" folder, enter the path to your image file, excluding the "index", "numof" and the "extention" part. (eg. comic/convatlas_) |
| index | Value to distinguish books |
| numof | Maximum number of pages |
| flag | Choose false to make the book open from the right. |

## How to name your images

```
convatlas_509_1.png
convatlas_509_2.png
convatlas_509_3.png
convatlas_509_4.png
convatlas_509_5.png
convatlas_509_6.png
```
Prepare your pages in a similar name as above, with the "index" being after the first "_", and the page number being after the second "_".
If you set the "numof"(max pages) value to 1, it will show a single page in the screen's center without the Advance Page button. (in this case only setting convatlas_509_1.png)
If you wish to change the Tweet button or the Close button, edit the Canvas file in your project.


## The Image Resolution

Your image needs to fit a square, with the resolution being a power of two. 

<img src="img/ComicViewerSample.jpg" width="50%">

If a 1024px file is set, the horizontal pixel will only show up to the 724px mark.
It's recommended to fill the blank space on the right with an elongated pixel to avoid image artifacts caused by bilinear interpolations/mipmaps.
