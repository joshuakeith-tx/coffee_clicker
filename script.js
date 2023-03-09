const coffeeProducers = [
  {
    isVisible: false,
    id: 0,
    name: "Keurig",
    cost: 10,
    rate: 1,
    quantity: 0,
  },
  {
    isVisible: false,
    id: 1,
    name: "Mr.Coffee",
    cost: 50,
    rate: 2,
    quantity: 0,
  },
  {
    isVisible: false,
    id: 2,
    name: "Coffee Urn",
    cost: 500,
    rate: 10,
    quantity: 0,
  },
];

venti = document.getElementById("venti");
cupCounter = document.getElementById("cup-counter");
count = 0;
venti.onclick = function () {
  count += 1;
  cupCounter.innerHTML = count;
};

const producerList = document.getElementById("producers-list");

function addProducer() {
  for (let producer of coffeeProducers) {
    let h2 = document.createElement("h2");
    h2.textContent = producer.name;
    let div1 = document.createElement("div");
    div1.textContent = "Quantity: " + producer.quantity;
    let div2 = document.createElement("div");
    div2.textContent = "Cups/Second: " + producer.rate;
    let div3 = document.createElement("div");
    div3.textContent = "Cost: " + producer.cost;
    const button = document.createElement("button");
    button.textContent = "Buy";
    button.id = producer.id;
    button.addEventListener("click", (e) => {
      console.log(e.target);
    });
    producerList.appendChild(h2);
    producerList.appendChild(button);
    producerList.appendChild(div1);
    producerList.appendChild(div2);
    producerList.appendChild(div3);
  }
}

addProducer();
