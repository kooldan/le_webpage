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
    "heading":"Block 1",
    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus urna, ullamcorper eu velit molestie, dapibus porttitor massa. Proin ac ultrices arcu, eu blandit dui. Quisque accumsan, augue ac dignissim fringilla, justo velit tristique urna, vel ultricies ipsum erat id dui. Nulla et neque quis metus porttitor accumsan. Donec at dui et metus ultrices volutpat. Nulla ex mauris, suscipit fringilla sagittis quis, fringilla quis urna. Etiam convallis metus rhoncus, fringilla ante quis, blandit turpis. Integer ultricies dui et feugiat pharetra. Vestibulum justo felis, varius a augue porttitor, auctor sollicitudin magna. Mauris eu lacus sollicitudin, maximus dolor eget, interdum leo.",
    "src":"data:image/png;base64,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",
    "href":"#"
  },
  {
    "heading":"Block 2",
    "text":"Proin augue libero, maximus non urna quis, rutrum maximus mauris. Quisque dictum congue congue. Ut nec lectus quis est lobortis pharetra vitae ut tellus. Pellentesque sapien orci, auctor sit amet porta vel, rhoncus vestibulum ligula. Maecenas malesuada eros eu lectus aliquam, facilisis ornare tortor semper. Praesent vitae euismod tellus, et aliquet ligula. Fusce sollicitudin rhoncus rhoncus. Vestibulum nec pellentesque nunc. Maecenas ut nibh libero. Pellentesque rhoncus ultrices laoreet. Cras fermentum arcu mollis dolor mollis, eget volutpat mi molestie. Proin euismod vitae turpis sed laoreet. Fusce tempus ex mi, sed rutrum dui egestas vitae.",
    "src":"data:image/png;base64,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",
    "href":"#"
  },
  {
    "heading":"Block 3",
    "text":"Nullam purus nulla, imperdiet ut pharetra vel, tincidunt vel lacus. Etiam sed auctor urna. Phasellus in bibendum justo, vitae faucibus libero. Maecenas egestas feugiat nisi, eget hendrerit metus. Curabitur suscipit metus imperdiet, feugiat urna non, efficitur augue. Vestibulum non consequat nisi. Quisque tincidunt sapien consequat est sagittis imperdiet. Quisque eget nibh id mi bibendum rhoncus sit amet id purus. Suspendisse mollis vestibulum turpis. Vivamus efficitur eleifend mi. Etiam bibendum fringilla nisl cursus blandit. Curabitur efficitur gravida pellentesque. Phasellus ornare mollis ex, eget vehicula erat. Duis interdum nisl nec magna ultricies, ac semper est consequat. Curabitur quis tortor id odio mattis euismod. Mauris fringilla consequat ipsum eu aliquam.",
    "src":"data:image/png;base64,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",
    "href":"#"
  },
  {
    "heading":"Block 4",
    "text":"In varius eros tellus. Maecenas vitae lobortis tortor, sed dignissim massa. Pellentesque volutpat diam erat, sit amet bibendum nisl fermentum at. Quisque blandit posuere elit quis commodo. Duis tincidunt, dui sit amet placerat tristique, velit mauris congue magna, at eleifend nisi sapien at risus. Curabitur vulputate sapien in lectus laoreet, et interdum ex laoreet. Maecenas et augue elit. Phasellus eget nulla at sem molestie euismod ac eget neque. Mauris sollicitudin risus arcu. Nam malesuada dolor risus, sed posuere tortor ullamcorper in. Pellentesque eu tempus nibh. Maecenas ac neque a neque laoreet dignissim. Curabitur laoreet, enim vitae egestas faucibus, ligula sem varius sem, quis vehicula sem eros ac mi.",
    "src":"data:image/png;base64,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",
    "href":"#"
  }
];
let t = news_block.createBlocks(news);
let m_left = document.querySelector(".m_left");
for(let i = 0; i < t.length; i++){
  let h = document.createElement("a");
  h.href = t[i].href; h.className = "l_block";
  h.innerHTML = "<img class='l_b_img' src='"+t[i].src+"'/><div class='l_b_content'><h1>"+t[i].heading+"</h1><p>"+t[i].text+"</p></div>";
  m_left.appendChild(h);
}
// create headings r blocks
let r_blocks = r_block.createBlocks(["Block R1", "Иван Семёныч", "Угощает", "Голубцами", "Важная информация", "Амогус", "сус"]);
let m_right = document.querySelector(".m_right");
r_blocks.forEach(function(item, i, arr){
  let elem = document.createElement("div");
  elem.className = i+1 != r_blocks.length ? "r_block" : "r_block m_n";
  elem.innerHTML = "<h1>"+item.text+"</h1>";
  m_right.appendChild(elem);
});