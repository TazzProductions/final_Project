class Brand {
  constructor(id, PName, BName, img, brandSlug, singleStyle) {
    this.id = id;
    this.PName = PName;
    this.BName = BName;
    this.img = img;
    this.brandSlug = brandSlug;
    this.singleStyle = singleStyle;
  }
}

module.exports = Brand;