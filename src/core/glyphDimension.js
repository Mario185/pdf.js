class GlyphDimension {
  Glyph;

  Width;

  Height;

  X;

  Y;

  Transform;

  IsPlaceHolder;

  constructor(glyph, width, height, x, y, transform, isPlaceHolder) {
    this.Glyph = glyph;
    this.Width = width;
    this.Height = height;
    this.X = x;
    this.Y = y;
    this.Transform = transform;
    this.IsPlaceHolder = isPlaceHolder;
  }
}

export { GlyphDimension };
