const elf = document.getElementById('elf');
const btn = document.getElementById('btn');

btn.addEventListener('click', duplicateElf);

let elfArray = ['🧝'];

function duplicateElf() {
  if (elfArray.length < 100) {
    elfArray.push('🧝');
    elf.textContent = '';
    for (const item of elfArray) {
      elf.textContent += item;
    }
  } else {
    elf.textContent = `${elfArray.length} elf has filled the box`;
  }
}

btn.addEventListener('click', duplicateElf);
