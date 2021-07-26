for (let i = 0; i < product.length; i++) {
  const card = document.createElement("div");
  card_image = document.createElement("div");
  image = document.createElement("img");
  image.src = product[i].img;
  card_image.className = "card-image";
  card_image.appendChild(image);

  card_body = document.createElement("div");
  card_name = document.createElement("span");
  card_body.className = "card-body";
  card_name.innerHTML = product[i].name;
  card_name.className = "name";
  card_desc = document.createElement("span");
  card_desc.className = "description";
  card_desc.innerHTML = product[i].short_description;
  pick = document.createElement("div");
  pick.className = "pick-size";
  pick.innerHTML = "Pick Size";
  card_body.appendChild(card_name);
  card_body.appendChild(card_desc);
  card_body.appendChild(pick);

  card_footer = document.createElement("div");
  card_footer.className = "card-footer";

  groups = document.createElement("div");
  groups.className = "groups";
  for (let j = 0; j < product[i].cost.length; j++) {
    group = document.createElement("div");
    group.className = "group";
    size = document.createElement("span");
    size.innerHTML = product[i].cost[j].size;
    cm = document.createElement("span");
    cm.innerHTML = product[i].cost[j].name;
    box = document.createElement("div");
    box.className = "box";
    price = document.createElement("div");
    price.className = "price";
    price.innerHTML = `$${product[i].cost[j].price}`;
    box.appendChild(size);
    box.appendChild(cm);
    group.appendChild(box);
    group.appendChild(price);
    groups.appendChild(group);
  }
  buttons = document.createElement("div");
  buttons.className = "card-button";
  btn = document.createElement("button");
  btn.innerHTML = "Choice";
  btn.setAttribute("method_name", product[i].name);
  buttons.appendChild(btn);
  card_footer.appendChild(groups);
  card_footer.appendChild(buttons);

  card.className = "card";
  card.appendChild(card_image);
  card.appendChild(card_body);
  card.appendChild(card_footer);
  const defaults = document.getElementById("list");
  defaults.appendChild(card);
}
