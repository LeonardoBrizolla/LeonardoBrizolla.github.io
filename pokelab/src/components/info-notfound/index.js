const createInfoNotFound = ({ nameClass, title }) => {
  const $title = createTitle({
    nameClass,
    title,
  });

  return `
    <div class="d-flex flex-column align-items-center justify-content-center">
      ${$title}
      <img src="/pokelab/img/gastly.gif" alt="Gastly gif"  width="200" />
    </div>
  `;
};
