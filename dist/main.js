(() => {

  const smallWidget = document.querySelectorAll('.sizes .small');
  const mediumWidget = document.querySelectorAll('.sizes .medium');
  const largeWidget = document.querySelectorAll('.sizes .large');
  const podcast = document.querySelector('.podcast');
  const weather = document.querySelector('.weather');

  const toggle = (size, selector, firstRemovedClass, secondRemovedClass, addedClass) => {

    size.forEach(el => {
      el.addEventListener('click', () => {
        selector.classList.remove(firstRemovedClass, secondRemovedClass);
        selector.classList.add(addedClass, 'active');
      });
    });

  };

  document.addEventListener("DOMContentLoaded", () => {

    toggle(smallWidget, podcast, 'medium', 'large', 'small');
    toggle(mediumWidget, podcast, 'small', 'large', 'medium');
    toggle(largeWidget, podcast, 'small', 'medium', 'large');

    toggle(smallWidget, weather, 'medium', 'large', 'small');
    toggle(mediumWidget, weather, 'small', 'large', 'medium');
    toggle(largeWidget, weather, 'small', 'medium', 'large');
  });
})();