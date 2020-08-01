export const normalizeText = (val: number): String =>
  val < 10 ? `0${val}` : `${val}`;
