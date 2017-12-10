
export const selectCard = (card) => {
  console.log(' you clicked', card);
  return {
    type: "CARD_SELECTED",
    payload: card
  }
}