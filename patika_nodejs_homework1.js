const r = process.argv.slice(2)[0]*1
function main() {
    const da = Math.PI * (r^2)
    console.log(`Yarıçapı (${r}) olan dairenin alanı: (${da})`)
}
main()