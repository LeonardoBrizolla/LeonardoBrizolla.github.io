const createInfoSuccess = ({ nameClass, title }) => {
  const $title = createTitle({
    nameClass,
    title,
  });

  return `
      ${$title}
      <img
        src="/pokelab/img/gengar-success.gif"
        alt="Gengar pulando feliz"
        style="border-radius: 5px"
      />
  `;
};
