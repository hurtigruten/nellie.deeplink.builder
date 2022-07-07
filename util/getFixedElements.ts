const getFixedElements = () =>
  [...document.body.getElementsByTagName("*")].filter(
    (element) =>
      getComputedStyle(element, null).getPropertyValue("position") === "fixed"
  ) as HTMLElement[];

export default getFixedElements;
