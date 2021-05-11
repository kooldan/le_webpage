class news_block {
  constructor(heading, text, src, href){
    this.heading = heading;
    this.text = text;
    this.src = src;
    this.href = href;
  }
  static createBlocks(arrr){
    let a = [];
    arrr.forEach(function(item, i, arr){
      a[i] = new news_block(item.heading, item.text, item.src, item.href);
    });
    return a;
  }
}
class r_block{
  constructor(text){
    this.text = text;
  }
  static createBlocks(arrr){
    let a = [];
    arrr.forEach(function(item, i, arr){
      a[i] = new r_block(item);
    });
    return a;
  }
}

//create headings l blocks

let news = [
  {
    "heading":"hmmmmmmmmmmmmmmmmmmmm",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus urna, ullamcorper eu velit molestie, dapibus porttitor massa. Proin ac ultrices arcu, eu blandit dui. Quisque accumsan, augue ac dignissim fringilla, justo velit tristique urna, vel ultricies ipsum erat id dui. Nulla et neque quis metus porttitor accumsan. Donec at dui et metus ultrices volutpat. Nulla ex mauris, suscipit fringilla sagittis quis, fringilla quis urna. Etiam convallis metus rhoncus, fringilla ante quis, blandit turpis. Integer ultricies dui et feugiat pharetra. Vestibulum justo felis, varius a augue porttitor, auctor sollicitudin magna. Mauris eu lacus sollicitudin, maximus dolor eget, interdum leo.",
    "src":"../speen.gif", "href":"page.html"
  },
  {
    "heading":"hm",
    "text":"Proin augue libero, maximus non urna quis, rutrum maximus mauris. Quisque dictum congue congue. Ut nec lectus quis est lobortis pharetra vitae ut tellus. Pellentesque sapien orci, auctor sit amet porta vel, rhoncus vestibulum ligula. Maecenas malesuada eros eu lectus aliquam, facilisis ornare tortor semper. Praesent vitae euismod tellus, et aliquet ligula. Fusce sollicitudin rhoncus rhoncus. Vestibulum nec pellentesque nunc. Maecenas ut nibh libero. Pellentesque rhoncus ultrices laoreet. Cras fermentum arcu mollis dolor mollis, eget volutpat mi molestie. Proin euismod vitae turpis sed laoreet. Fusce tempus ex mi, sed rutrum dui egestas vitae.",
    "src":"https://thumbs.gfycat.com/HighEagerIndianrockpython-small.gif", "href":"page2.html"
  },
  {
    "heading":"si",
    "text":"Nullam purus nulla, imperdiet ut pharetra vel, tincidunt vel lacus. Etiam sed auctor urna. Phasellus in bibendum justo, vitae faucibus libero. Maecenas egestas feugiat nisi, eget hendrerit metus. Curabitur suscipit metus imperdiet, feugiat urna non, efficitur augue. Vestibulum non consequat nisi. Quisque tincidunt sapien consequat est sagittis imperdiet. Quisque eget nibh id mi bibendum rhoncus sit amet id purus. Suspendisse mollis vestibulum turpis. Vivamus efficitur eleifend mi. Etiam bibendum fringilla nisl cursus blandit. Curabitur efficitur gravida pellentesque. Phasellus ornare mollis ex, eget vehicula erat. Duis interdum nisl nec magna ultricies, ac semper est consequat. Curabitur quis tortor id odio mattis euismod. Mauris fringilla consequat ipsum eu aliquam.",
    "src":"https://thumbs.gfycat.com/FlawlessDimpledAfricancivet.webp", "href":"page3.html"
  },
  {
    "heading":"problem?",
    "text":"In varius eros tellus. Maecenas vitae lobortis tortor, sed dignissim massa. Pellentesque volutpat diam erat, sit amet bibendum nisl fermentum at. Quisque blandit posuere elit quis commodo. Duis tincidunt, dui sit amet placerat tristique, velit mauris congue magna, at eleifend nisi sapien at risus. Curabitur vulputate sapien in lectus laoreet, et interdum ex laoreet. Maecenas et augue elit. Phasellus eget nulla at sem molestie euismod ac eget neque. Mauris sollicitudin risus arcu. Nam malesuada dolor risus, sed posuere tortor ullamcorper in. Pellentesque eu tempus nibh. Maecenas ac neque a neque laoreet dignissim. Curabitur laoreet, enim vitae egestas faucibus, ligula sem varius sem, quis vehicula sem eros ac mi.",
    "src":"https://thumbs.gfycat.com/ImperturbableBiodegradableCat.webp", "href":"page4.html"
  }
];
