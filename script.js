const root = document.getElementById('root');
const box = document.getElementById('box');

const deleteMenus = (menus) => {
  menus.map(menu => menu.remove());
}

const buildMenu = (menuId) => {
  if (menuId === 'rootMenu') {
    return (
    `
    <div class="tab" id="tabMain">Backgroud</div>
    <div class="tab" id="tabShadow">Shadow</div>
    `
    )
  }
  if (menuId === 'boxMenu') {
    return ``
  }
}

const createMenu = (ev, menuId) => {
  const menu = document.createElement('div');
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.id = 'bgPicker';
  menu.classList.add(menuId);
  menu.innerHTML = buildMenu(menuId);
  menu.appendChild(colorPicker);
  root.appendChild(menu);
  if (menuId === 'rootMenu') {
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'Reset';
    resetBtn.id = 'resetBtn';
    resetBtn.style.height = '50px';
    resetBtn.style.width = '80px';
    const bgPicker = document.getElementById('bgPicker');
    bgPicker.value = root.style.backgroundColor;
    bgPicker.style.width = '50px';
    bgPicker.style.height = '50px';
    bgPicker.style.border = '1px solid var(--clr2)';
    menu.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
      location.reload();
    })
    bgPicker.addEventListener('input', ev => {
      root.style.backgroundColor = ev.target.value;
    });
    const tabMain = document.getElementById('tabMain');
    const tabShadow = document.getElementById('tabShadow');
    tabMain.addEventListener('click', () => {
      document.getElementById('shadowsContainer').remove();
      menu.style.height = '100px';
      menu.appendChild(colorPicker);
      menu.appendChild(resetBtn);
    })
    tabShadow.addEventListener('click', () => {
      menu.style.height = '150px';
      document.getElementById('bgPicker').remove();
      document.getElementById('resetBtn').remove();
      const container = document.createElement('div');
      const shadowClr = document.createElement('input');
      const shadowX = document.createElement('input');
      const shadowY = document.createElement('input');
      const shadowBlur = document.createElement('input');
      const shadowSpread = document.createElement('input');
      const shadowXLabel = document.createElement('label');
      const shadowYLabel = document.createElement('label');
      const shadowBlurLabel = document.createElement('label');
      const shadowSpreadLabel = document.createElement('label');
      const inOutBtn = document.createElement('button');
      inOutBtn.innerHTML = 'inset';
      inOutBtn.style.width = '50px';
      inOutBtn.style.height = '25px';
      container.id = 'shadowsContainer';
      shadowClr.type = 'color';
      shadowX.type = 'range';
      shadowY.type = 'range';
      shadowBlur.type = 'range';
      shadowSpread.type = 'range';
      shadowX.id = 'shadowX';
      shadowY.id = 'shadowY';
      shadowBlur.id = 'shadowBlur';
      shadowSpread.id = 'shadowSpread';
      shadowY.min = '-100';
      shadowX.min = '-100';
      shadowBlur.min = '0';
      shadowSpread.min = '-100';
      shadowY.max = '100';
      shadowX.max = '100';
      shadowBlur.max = '100';
      shadowSpread.max = '100';
      shadowXLabel.innerHTML = 'X';
      shadowYLabel.innerHTML = 'Y';
      shadowBlurLabel.innerHTML = 'Blur';
      shadowSpreadLabel.innerHTML = 'Spread';
      const shadowXContainer = document.createElement('div');
      const shadowYContainer = document.createElement('div');
      const shadowBlurContainer = document.createElement('div');
      const shadowSpreadContainer = document.createElement('div');
      shadowXContainer.id = 'shadowXCotainer';
      shadowYContainer.id = 'shadowYCotainer';
      shadowBlurContainer.id = 'shadowBlurCotainer';
      shadowSpreadContainer.id = 'shadowSpreadCotainer';
      container.appendChild(shadowClr);
      shadowXContainer.appendChild(shadowX);
      shadowYContainer.appendChild(shadowY);
      shadowBlurContainer.appendChild(shadowBlur);
      shadowSpreadContainer.appendChild(shadowSpread);
      shadowXContainer.appendChild(shadowXLabel);
      shadowYContainer.appendChild(shadowYLabel);
      shadowBlurContainer.appendChild(shadowBlurLabel);
      shadowSpreadContainer.appendChild(shadowSpreadLabel);
      container.appendChild(shadowXContainer);
      container.appendChild(shadowYContainer);
      container.appendChild(shadowBlurContainer);
      container.appendChild(shadowSpreadContainer);
      container.appendChild(inOutBtn);
      menu.appendChild(container);
      let x = 0;
      let y = 0;
      let blur = 0;
      let spread = 0;
      let color = '';
      shadowX.value = x;
      shadowY.value = y;
      shadowBlur.value = blur;
      shadowSpread.value = spread;
      shadowX.addEventListener('input', ev => {
        x = ev.target.value;
        box.style.boxShadow.search('inset') === -1 ? box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}` : box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`;
      })
      shadowY.addEventListener('input', ev => {
        y = ev.target.value;
        box.style.boxShadow.search('inset') === -1 ? box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}` : box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`;
      })
      shadowBlur.addEventListener('input', ev => {
        blur = ev.target.value;
        box.style.boxShadow.search('inset') === -1 ? box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}` : box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`;
      })
      shadowClr.addEventListener('input', ev => {
        color = ev.target.value;
        box.style.boxShadow.search('inset') === -1 ? box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}` : box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`;
      })
      shadowSpread.addEventListener('input', ev => {
        spread = ev.target.value;
        box.style.boxShadow.search('inset') === -1 ? box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color}` : box.style.boxShadow = `${x}px ${y}px ${blur}px ${spread}px ${color} inset`;
      })
      inOutBtn.addEventListener('click', () => {
        if (inOutBtn.innerHTML === 'inset') {
          box.style.boxShadow += ' inset';
          inOutBtn.innerHTML = 'outset';
        }
        else {
          box.style.boxShadow = box.style.boxShadow.replace('inset', '');
          inOutBtn.innerHTML = 'inset';
        }
      })
    })

  }
  if (menuId === 'boxMenu') {
    const bgPicker = document.getElementById('bgPicker');
    bgPicker.value = box.style.backgroundColor;
    bgPicker.style.width = '50px';
    bgPicker.style.height = '50px';
    bgPicker.style.border = '1px solid var(--clr2)';
    bgPicker.addEventListener('input', ev => {
      box.style.backgroundColor = ev.target.value;
    });
  }
  const x = ev.clientX;
  const y = ev.clientY;
  menu.style.left = x + 'px';
  x < root.clientWidth / 2 ? menu.style.left = x + 'px' : menu.style.left = x - menu.clientWidth + 'px';
  menu.style.top = y + 'px';
  Array.from(menu.querySelectorAll('.tab')).map((tab, id) => {
    tab.style.top = y - 20 + 'px';
    x < root.clientWidth / 2 ? tab.style.left = x + id * 90 + 'px': tab.style.left = x - menu.clientWidth + id * 90 + 'px';
  })
}

root.addEventListener('click', ev => {

  if (ev.target.id === 'root') {
    const menus = Array.from(document.querySelectorAll('.rootMenu'));
    menus.length === 0 ? createMenu(ev, 'rootMenu') : deleteMenus(menus);
  }
  if (ev.target.id === 'box') {
    const menus = Array.from(document.querySelectorAll('.boxMenu'));
    menus.length === 0 ? createMenu(ev, 'boxMenu') : deleteMenus(menus);
  }
});
