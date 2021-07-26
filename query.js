const data_ = {
  name: "Italino Original",
  description:
    "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
  short_description:
    "Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.",
  img: "https://ths.cafe/wp-content/uploads/2021/01/THS-Special-Pizza-The-Hunger-Solution.png",
  cost: [
    {
      name: "cm",
      size: 22,
      price: 8,
    },
    {
      name: "cm",
      size: 29,
      price: 10,
    },
    {
      name: "cm",
      size: 32,
      price: 12,
    },
  ],
};
const tooping = [
  { name: "Avocado", price: 1 },
  { name: "Broccoli", price: 1 },
  { name: "Onions", price: 1 },
  { name: "Zucchini", price: 1 },
  { name: "Lobster", price: 2 },
  { name: "Oyster", price: 2 },
  { name: "Salmon", price: 2 },
  { name: "Tuna", price: 2 },
  { name: "Bacon", price: 3 },
  { name: "Duck", price: 3 },
  { name: "Ham", price: 3 },
  { name: "Sausage", price: 3 },
];
const product = [
  {
    name: "Italino Original",
    description:
      "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
    short_description:
      "Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.",
    img: "https://ths.cafe/wp-content/uploads/2021/01/THS-Special-Pizza-The-Hunger-Solution.png",
    cost: [
      {
        name: "cm",
        size: 22,
        price: 8,
      },
      {
        name: "cm",
        size: 29,
        price: 10,
      },
      {
        name: "cm",
        size: 32,
        price: 12,
      },
    ],
  },
  {
    name: "Chiken Hawaii",
    description:
      "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
    short_description:
      "Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.",
    img: "https://i.dlpng.com/static/png/6699618_preview.png",
    cost: [
      {
        name: "cm",
        size: 22,
        price: 8,
      },
      {
        name: "cm",
        size: 29,
        price: 10,
      },
      {
        name: "cm",
        size: 32,
        price: 12,
      },
    ],
  },
  {
    name: "Summer Pizza",
    description:
      "Although the legendary Double Burger really needs no introduction, please allow us... Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
    short_description:
      "Extra-virgin olive oil, garlic, mozzarella, mushrooms and olives.",
    img: "https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png",
    cost: [
      {
        name: "cm",
        size: 22,
        price: 8,
      },
      {
        name: "cm",
        size: 29,
        price: 10,
      },
      {
        name: "cm",
        size: 32,
        price: 12,
      },
    ],
  },
];

function elements(data) {
  detail = document.createElement("div");
  detail.setAttribute("product_name", data.name);
  detail.id = "detail_grids";
  detail.className = "grids";
  bg = document.createElement("img");
  bg.src = data.img;
  cols = document.createElement("div");
  cols.className = "cols";
  cols.appendChild(bg);
  cols1 = document.createElement("div");
  cols1.className = "cols";
  card_p = document.createElement("div");
  card_p.className = "piza-card";
  card_p_h = document.createElement("div");
  card_p_h.className = "piza-card-header";
  card_p_name = document.createElement("h2");
  card_p_name.innerHTML = data.name;
  card_p_name.className = "name";
  card_p_desc = document.createElement("span");
  card_p_desc.innerHTML = data.description;
  card_p_desc.className = "description";

  card_p_h.appendChild(card_p_name);
  card_p_h.appendChild(card_p_desc);

  card_p_b = document.createElement("div");
  card_p_b.className = "piza-card-body";
  card_p_b_c = document.createElement("div");
  card_p_b_c.className = "piza-card-cols";
  card_p_b_name = document.createElement("h6");
  card_p_b_name.innerHTML = "Select Crust";
  card_p_b.appendChild(card_p_b_c);

  card_p_b_c1 = document.createElement("div");
  card_p_b_c1.className = "piza-card-cols";
  c1_name = document.createElement("h6");
  c1_name.innerHTML = "Select Size";
  card_p_b_c1.appendChild(c1_name);
  card_p_b.appendChild(card_p_b_c1);
  ul_1 = document.createElement("ul");

  for (let i = 0; i < data.cost.length; i++) {
    li_1 = document.createElement("li");
    group = document.createElement("div");
    group.className = "group";
    box = document.createElement("box");
    box.className = "box-s";
    size = document.createElement("span");
    size.innerHTML = data.cost[i].size;
    cm = document.createElement("span");
    cm.innerHTML = data.cost[i].name;
    box.appendChild(size);
    box.appendChild(cm);
    price = document.createElement("div");
    price.innerHTML = `$${data.cost[i].price}`;
    price.className = "price";
    group.appendChild(box);
    group.appendChild(price);
    li_1.appendChild(group);
    ul_1.appendChild(li_1);
  }
  card_p_b_c1.appendChild(ul_1);

  ul_ = document.createElement("ul");
  for (let i = 0; i < tooping.length; i++) {
    li_ = document.createElement("li");
    group_t = document.createElement("div");
    group_t.className = "group";
    box = document.createElement("div");
    box.className = "box";
    top_name = document.createElement("span");
    top_name.innerHTML = tooping[i].name;
    group_t.appendChild(box);
    group_t.appendChild(top_name);
    li_.appendChild(group_t);
    ul_.appendChild(li_);
  }
  card_p_b_c.appendChild(card_p_b_name);
  card_p_b_c.appendChild(ul_);

  card_p.appendChild(card_p_h);
  card_p.appendChild(card_p_b);

  h6 = document.createElement("h6");
  h6.innerHTML = "Quantity";
  buttons = document.createElement("div");
  buttons.className = "buttons";
  inputs = document.createElement("input");
  inputs.placeholder = "Quantity";
  inputs.type = "number";
  inputs.min = 1;
  inputs.value = 1;
  field = document.createElement("div");
  field.className = "field";
  field.id = "field-input";
  field.appendChild(inputs);
  btn_ = document.createElement("button");
  btn_n = document.createElement("span");
  btn_n.innerHTML = "Add to card";
  btn_.appendChild(btn_n);
  buttons.appendChild(field);
  buttons.appendChild(btn_);
  card_p.appendChild(h6);
  card_p.appendChild(buttons);
  total = document.createElement("div");
  total.className = "total";
  t_name = document.createElement("span");
  t_name.innerHTML = "Total";
  tt = document.createElement("span");
  tt.innerHTML = "  $0";
  total.appendChild(t_name);
  total.appendChild(tt);
  card_p.appendChild(total);

  cols1.appendChild(card_p);
  detail.appendChild(cols);
  detail.appendChild(cols1);
  d_d = document.getElementById("detail");
  d_d.appendChild(detail);
}

elements(data_);

$(document).ready(function () {
  $(document).on("click", "button", function () {
    const name = $(this).attr("method_name");
    const data = product.filter(function (x) {
      return x.name === name;
    })[0];
    $("#detail_grids").fadeOut(function () {
      $(this).remove();
    });
    elements(data);
  });
});
