import meat from '@repo/meat'

function main() {
    console.log(`my taco is made using ${meat()}`)
    setTimeout(() => {
        return main()
    }, 2000)
}

main()
