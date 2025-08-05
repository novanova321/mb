(() => {
  const $blues = document.querySelector('#blues');
  const $needed = document.querySelector('#needed');
  const $gains = document.querySelector('#gains');
  const $dropped = document.querySelector('#dropped');

  $blues.onkeypress = (evt) => {
    if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
    }
  };
  $blues.onkeyup = () => {
    let num = +$blues.value;
    calculate(num);
  };
  $blues.onchange = () => {
    let num = +$blues.value;
    calculate(num);
  };

  const calculate = (count) => {
    const needed = [
        ['Plank', count * 6],
        ['Reinforced Plank', count * 15],
        ['Iron Ingot', count * 9],
        ['Dark Silver Ingot', count * 18],
        ['Gold Ingot', count * 9],
        ['Radium Alloy', count * 6],
        ['Regular Gem', count],
        ['Flawless Gem', count],
        ['Greater Blood Essence', count * 4],
        ['Primal Blood Essence', count * 2],
    ];

    clearChild($needed);
    for (const [name, val] of needed) {
        const item = document.createElement('li');
        item.innerText = `${val} ${name}`;
        $needed.appendChild(item);
    }

    const dropped = [
        ['Iron Ingot', count * 23],
        ['Plank', count * 22],
        ['Reinforced Plank', count * 37],
        ['Dark Silver Ingot', count * 37],
        ['Gold Ingot', count * 16],
        ['Gem Dust', count * 319],
    ];

    clearChild($dropped);
    for (const [name, val] of dropped) {
        const item = document.createElement('li');
        item.innerText = `${val} ${name}`;
        $dropped.appendChild(item);
    }

    const gains = [
        ['Iron Ingot', count * 14],
        ['Plank', count * 16],
        ['Reinforced Plank', count * 22],
        ['Dark Silver Ingot', count * 19],
        ['Gold Ingot', count * 7],
        ['Gem Dust', count * 319],
    ];

    clearChild($gains);
    for (const [name, val] of gains) {
        const item = document.createElement('li');
        item.innerText = `${val} ${name}`;
        $gains.appendChild(item);
    }
  };

  const clearChild = (node) => {
    while (node.lastElementChild)
        node.removeChild(node.lastElementChild);
  };

  const checkUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const blues = urlParams.get('blues');
    if (!isNaN(blues)) {
        $blues.value = blues;
        calculate(blues);
    }
  }

  checkUrl();
})();
