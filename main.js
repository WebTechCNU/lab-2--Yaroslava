function initializePage() {
    // Додаємо декілька квітів до контейнера
    addFlowerToContainer('Red Rose', 'https://th.bing.com/th/id/R.52d2159dd5a496b78891a15132f60c81?rik=IfiGjGOMaaQ2qw&riu=http%3a%2f%2fkartinki-cvetov.ru%2fimages%2frozy%2froza52.jpg&ehk=B3Sc62Wr91JUHzvPUd0vQU77StKP2A9rzcJ67sA88ec%3d&risl=&pid=ImgRaw&r=0', 'This is a beautiful red rose.');
    addFlowerToContainer('Pink Tulip', 'https://th.bing.com/th/id/OIP.gd7bJiSq5NYcxbD_05Jm8AD6D5?pid=ImgDet&w=1024&h=1023&rs=1', 'This is a lovely pink tulip.');
    addFlowerToContainer('White Daisy', 'https://th.bing.com/th/id/OIP.gwljwgjuFLVi5QDjFI4sEQHaEu?pid=ImgDet&w=2560&h=1632&rs=1', 'This is a pretty white daisy.');
  
    // Додаємо обробник події для кнопки "All"
    const allButton = document.querySelector('.filter-button:first-of-type');
    allButton.addEventListener('click', () => {
      clearFlowers();
      addFlowerToContainer('Red Rose', 'https://th.bing.com/th/id/R.52d2159dd5a496b78891a15132f60c81?rik=IfiGjGOMaaQ2qw&riu=http%3a%2f%2fkartinki-cvetov.ru%2fimages%2frozy%2froza52.jpg&ehk=B3Sc62Wr91JUHzvPUd0vQU77StKP2A9rzcJ67sA88ec%3d&risl=&pid=ImgRaw&r=0', 'This is a beautiful red rose.');
      addFlowerToContainer('Pink Tulip', 'https://th.bing.com/th/id/OIP.gd7bJiSq5NYcxbD_05Jm8AD6D5?pid=ImgDet&w=1024&h=1023&rs=1', 'This is a lovely pink tulip.');
      addFlowerToContainer('White Daisy', 'https://th.bing.com/th/id/OIP.gwljwgjuFLVi5QDjFI4sEQHaEu?pid=ImgDet&w=2560&h=1632&rs=1', 'This is a pretty white daisy.');
    });
  
    // Додаємо обробник події для кнопки "Roses"
    const rosesButton = document.querySelector('.filter-button:nth-of-type(2)');
    rosesButton.addEventListener('click', () => {
      clearFlowers();
      addFlowerToContainer('Red Rose', 'https://th.bing.com/th/id/R.52d2159dd5a496b78891a15132f60c81?rik=IfiGjGOMaaQ2qw&riu=http%3a%2f%2fkartinki-cvetov.ru%2fimages%2frozy%2froza52.jpg&ehk=B3Sc62Wr91JUHzvPUd0vQU77StKP2A9rzcJ67sA88ec%3d&risl=&pid=ImgRaw&r=0', 'This is a beautiful red rose.');
    });
  
  