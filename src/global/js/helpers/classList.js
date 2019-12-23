const classList = (base, additional) => {
  return base + " " + (typeof additional === "undefined" ? "" : additional);
};

export default classList;
