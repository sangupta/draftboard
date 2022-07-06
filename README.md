# DraftBoard

`draftboard` is a cartesian coordinate based drafting board that can render to SVG and Canvas.
It is useful in creating `drawings` using the cartesian system, which can then be rendered to
top-left coordinate systems. This allows us to think in mathematical system than thinking in
rendering system.

It can be used to create diagrams such as line/pie/bar chart, flow diagrams, gantt charts, etc.

The following are unqiue features of `draftboard`

* Usage of cartesian coordinate system
* Allow moving origin

# Shapes

The following simple shapes form the base of `draftboard`:

* Arc
* Circle (also, radial arc)
* Ellipse
* Line
* Polygon
* Polyline
* Rectangle
* Text

These shapes allow us to form complex shapes by composing them in a single object. For example,
a `Triangle.decompose()` will return an array of `Line` instances. Thus, a renderer, which knows
how to render above simple shapes can readily render the following by just invoking the `decompose()`
method. Available composite shapes are:

* Marker
* Slice
* Triangle

# Author

* [Sandeep Gupta](https://sangupta.com)

# License

MIT License. Copyright (C) 2022, Sandeep Gupta.
