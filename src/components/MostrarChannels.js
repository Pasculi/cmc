import React from "react";

const MostrarChannels = () => {
  return (
    <div>
      <h1>Mostrar Señales</h1>
      <div class="group-buscar">
        <label for="buscar__texto">Buscar:</label>
        <input
          id="buscar__canal"
          class="form__input"
          placeholder="Nombre o número de canal"
        />
        <span class="form__input-error"></span>
      </div>
    </div>
  );
};

export default MostrarChannels;
