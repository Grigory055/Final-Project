export const gridCells = (n: number): number => {
  return n * 16;
}

export const isSpaceFree = (walls: Array<string>, x: number, y: number) => {
  // Convert to string format for easy lookup
  const str = `${x},${y}`;
  // Check if walls has an entry at this spot
  const isWallPresent = walls.includes(str);
  return !isWallPresent;
}