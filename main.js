
window.onload = function() {

  const words = document.querySelectorAll('.word');
  const dropbox = document.querySelector('.dropbox');

  function handleDragStart(event) {
    event.dataTransfer.effectAllowed = 'move';
    // event.dataTransfer.setData('text/html', event.target.innerHTML);
    event.dataTransfer.setData('text/plain', event.target.innerHTML);

  }

  function handleDragOver(event) {
    event.preventDefault && event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  function handleDrop(event) {

    const text = event.dataTransfer.getData('text');
    // console.log(text)
    const span = document.createElement('span');
    span.innerHTML = text;
    event.target.appendChild(span);
  }

  words.forEach(word => {
    word.addEventListener('dragstart', handleDragStart, false);
  });

  dropbox.addEventListener('dragover', handleDragOver, false);
  dropbox.addEventListener('drop', handleDrop, false);

}
