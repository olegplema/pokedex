
export function formatNumber(num: number) {
    const numStr = String(num)
    return "#"+numStr.padStart(3, '0')
}