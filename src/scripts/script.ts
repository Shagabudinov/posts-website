let cachedColor: string | null = null;

export const generateColor = (): string => {
    if (cachedColor) {
        return cachedColor;
    }

    const randomHex = () =>
        Math.floor(Math.random() * 256)
            .toString(16)
            .padStart(2, "0");
    const foregroundColor = `${randomHex()}${randomHex()}${randomHex()}`;
    const backgroundColor = `${randomHex()}${randomHex()}${randomHex()}`;
    const color = `${foregroundColor}/${backgroundColor}`;

    cachedColor = color; // Сохраняем цвет в кэше
    return color;
};

export const generateRandomValue = (min = 0, max = 50) => {
    return Math.floor(min + Math.random() * (max - min))
}
