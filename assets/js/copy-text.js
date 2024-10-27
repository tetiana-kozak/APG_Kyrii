  // Функція для копіювання тексту в буфер обміну
  function copyText() {
    // Отримуємо елемент з текстом
    const textToCopy = document.getElementById("textToCopy").innerText;

    // Використовуємо API буфера обміну
    navigator.clipboard.writeText(textToCopy).then(() => {
      document.querySelector('.form-response').classList.add('_visible')
      document.querySelector('.response').innerHTML = 'Текст скопійовано в буфер обміну!'
      setTimeout(()=> {
        document.querySelector('.form-response').classList.remove('_visible')
      }, 5000)
    }).catch((err) => {
      console.error("Не вдалося скопіювати текст: ", err);
    });
  }

  // Функція для копіювання тексту в буфер обміну англ
  function copyTextEng() {
    // Отримуємо елемент з текстом
    const textToCopy = document.getElementById("textToCopyEng").innerText;

    // Використовуємо API буфера обміну
    navigator.clipboard.writeText(textToCopy).then(() => {
      document.querySelector('.form-response').classList.add('_visible')
      document.querySelector('.response').innerHTML = 'The text is copied to the clipboard!'
      console.log('textToCopy', textToCopy)
      setTimeout(()=> {
        document.querySelector('.form-response').classList.remove('_visible')
      }, 5000)
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
  }