import { maskMoney } from "../../utils/mask"



export default function valuationCalc(porpertyArray, client, valorIdealRange, curtoPrazoRange, longoPrazoRange) {

    let result = {
        curtoPrazoValue: 0,
        valorIdealValue: 0,
        longoPrazoValue: 0
    }

    const averagePrice = porpertyArray.reduce((a, b) => a + +b.propertyPrice.replace(/\./g, ''), 0) / porpertyArray.length

    const averageAreaTotal = porpertyArray.reduce((a, b) => a + +b.areaTotal, 0) / porpertyArray.length

    const averageAreaTotalPrivativa = porpertyArray.reduce((a, b) => a + +b.areaTotalPrivativa, 0) / porpertyArray.length

    const clientAraeTotalPrivativa = +client?.areaTotalPrivativa

    const clientAraeTotal = +client?.areaTotal

    // console.log(averagePrice,
    //     averageAreaTotal,
    //     averageAreaTotalPrivativa,
    //     clientAraeTotalPrivativa,
    //     clientAraeTotal)

    
    const valorideal = averagePrice * clientAraeTotalPrivativa * (1+valorIdealRange/100) / averageAreaTotal
    const curtoPrazo = valorideal* (1-curtoPrazoRange/100)
    const longoPrazo = valorideal* (1+longoPrazoRange/100)

    result.curtoPrazoValue = maskMoney(curtoPrazo.toFixed(0))
    result.valorIdealValue = maskMoney(valorideal.toFixed(0))
    result.longoPrazoValue = maskMoney(longoPrazo.toFixed(0))


    return result




}