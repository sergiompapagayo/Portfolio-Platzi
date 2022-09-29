window.onload = () => {
  document.querySelector(".arrow-right").addEventListener("click", clickRight);
  document.querySelector(".arrow-left").addEventListener("click", clickLeft);
  document
    .querySelector(".send-button")
    .addEventListener("click", e => validateForm(e));
  document.querySelectorAll(".project").forEach(element => {
    element.addEventListener("click", e => openModal(e));
  });
  document.body.addEventListener("click", e => closeModal(e));
  document.body.addEventListener('keyup', e => listenForEscape(e));
};

/** Esta funcion se llama cuando la persona hace click en la fecha derecha del carousel para navegar a la derecha */
function clickRight() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft < -270) { //si el valor de izquierda es menor a -270, para de mover el contenido
    return;
  }
  let newValue = currentLeft - 270; //270 toma en cuenta el tamaño de la imagen mas sus margines
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
    document.queryselector('.project1').setAttribute('tabindex', '-1');
    document.queryselector('.project1-container').setAttribute('area-hidden', true);
    document.queryselector('.project4').removeAttribute('tabindex');
    document.queryselector('.project4-container').removeAttribute('area-hidden');
    break;
    case -540:
    document.queryselector('.project2').setAttribute('tabindex', '-1');
    document.queryselector('.project2-container').setAttribute('area-hidden', true);
    document.queryselector('.project5').removeAttribute('tabindex');
    document.queryselector('.project5-container').removeAttribute('area-hidden');
    break;
    default:
    break;
  }
}

/** Esta funcion se llama cuando la persona hace click en la fecha izquierda del carousel para navegar a la izquierda */
function clickLeft() {
  const currentLeft = parseInt(
    getComputedStyle(document.querySelector(".project-container")).left,
    10
  );
  if (currentLeft === 0) { //si el valor de izquiera es 0, retornar para no seguir movierno el contenido
    return;
  }
  let newValue = currentLeft + 270;
  document.querySelector(".project-container").style.left = `${newValue}px`;
  switch (newValue) {
    case -270:
    document.queryselector('.project5').setAttribute('tabindex', '-1');
    document.queryselector('.project5-container').setAttribute('area-hidden', true);
    document.queryselector('.project2').removeAttribute('tabindex');
    document.queryselector('.project2-container').removeAttribute('area-hidden');
    break;
    case 0:
    document.queryselector('.project4').setAttribute('tabindex', '-1');
    document.queryselector('.project4-container').setAttribute('area-hidden', true);
    document.queryselector('.project1').removeAttribute('tabindex');
    document.queryselector('.project1-container').removeAttribute('area-hidden');
    break;
    default:
    break;
  }
}

/** Esta funcion valida el formulario antes de enviar la notificación */
function validateForm(e) {
  e.preventDefault();
  const nameField = document.getElementById('name');
  console.log(nameField)
  if (nameField.value === '') {
    document.getElementById('name-error').innerHTML = '! Para enviar el formulario debes ingresar el campo del nombre'
  } else {
    showNotification();
  }
}

/** Esta funcion se llama cuando la persona hace click en el boton de enviar del formulario de contacto */
function showNotification() {
  document.getElementById('name-error').innerHTML = '';
  document.querySelector('.form-container').reset();
  document.querySelector(".notification").style.display = "flex";
  document.querySelector('.notification').innerHTML = 'El formulario fue enviado sin errores';
  setTimeout(function() {
    document.querySelector(".notification").style.display = "none";
  }, 3000);
}

/** Esta funcion escucha por la tecla ESC para cerrar el modal */
function listenForEscape(e) {
  if(e.keyCode === 27) {
    closeModal(e);
  }
}

/** Esta funcion se llama cuando la persona hace click en cualquier porjecto del carousel */
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
  document.getElementById('modal-header').focus();
}

/** Esta funcion se llama para cerrar el modal */
function closeModal(e) {
  // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
  if (
    e.target.className.includes("project") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
