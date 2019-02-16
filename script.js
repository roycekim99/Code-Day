function animate() {
    document.querySelector('blockquote').classList.toggle('animate');
  }
  
  document.addEventListener('click', animate);
  
  setTimeout(animate, 1000);