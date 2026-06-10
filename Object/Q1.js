const teas = {
    tea_1: {
        teaname: 'Matcha',
        teaType: 'True Tea',
        Caffeine: 'Low Level',
        taste: 'Rich, vegetal, slightly sweet',
        properties: ['High antioxidants', 'sustained energy', 'improves focus']
    },
    tea_2 : {
        teaname: 'Black Tea',
        teaType: 'True Tea',
        Caffeine: 'Moderate Level',
        taste: 'Strong, bold, malty',
        properties: ['Boosts alertness', 'rich in antioxidants']   
    }
}


const CopyTeas = JSON.parse(JSON.stringify(teas))



teas.tea_1.origin = 'Japan'
console.log(teas)
CopyTeas.tea_1.origin = "China"
console.log(CopyTeas)