title: Simple touch controls in Unity

I started trying out Unity since Unity 5, which comes with new UI Component.
The UI Layer makes things very easy. It wraps all UI elements inside a Canvas.
Its easy to scale this and it comes with some predefined scaling and positioning rules.

For creating a custom touch pad, we add a blank image object to the Canvas. We can
position this from UI with respect to the camera. We can attache a sprite to this 
to make it easier for players to identiy the input area and its purpose.

The `SimpleTouchPad` Class exposes a method `GetDirection` which can be checked from the game objet controller 
to see if there are any movements triggered.

<script src="https://gist.github.com/rajarju/c85b40c7ed84f02c189e.js"></script>