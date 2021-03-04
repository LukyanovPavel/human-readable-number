module.exports = function toReadable (number) {

    let numberStr = number.toString();
    let arrObjNum = [
        {num: '1', str: 'one'},
        {num: '2', str: 'two'},
        {num: '3', str: 'three'},
        {num: '4', str: 'four'},
        {num: '5', str: 'five'},
        {num: '6', str: 'six'},
        {num: '7', str: 'seven'},
        {num: '8', str: 'eight'},
        {num: '9', str: 'nine'},
        {num: '10', str: 'ten'},
        {num: '11', str: 'eleven'},
        {num: '12', str: 'twelve'},
        {num: '13', str: 'thirteen'},
        {num: '14', str: 'fourteen'},
        {num: '15', str: 'fifteen'},
        {num: '16', str: 'sixteen'},
        {num: '17', str: 'seventeen'},
        {num: '18', str: 'eighteen'},
        {num: '19', str: 'nineteen'},
        {num: '20', str: 'twenty'},
        {num: '30', str: 'thirty'},
        {num: '40', str: 'forty'},
        {num: '50', str: 'fifty'},
        {num: '60', str: 'sixty'},
        {num: '70', str: 'seventy'},
        {num: '80', str: 'eighty'},
        {num: '90', str: 'ninety'},
    ];

    const funcNumb = (value) => {
        let item = '';
        if (value !== '0') {
            arrObjNum.find(obj => {
                if (obj.num === value) item = obj.str
            })
        }
        return item;
    }

    const funcDecimal = (value) => {
        let item = '';
        if (value[0] !== '0') {
            arrObjNum.find(obj => {
                if (obj.num === value) {
                    item = obj.str;
                } else if (obj.num === value[0] + '0') {
                    item = obj.str + ' ' + funcNumb(value[1]);
                }
            })
        }else item = funcNumb(value[1]);
        return item;
    }

    const funcHundredths = (value) => {
        return funcNumb(value[0]) + ' hundred ' + funcDecimal(value.slice(1));
    }

    if (number === 0) {
        return 'zero';
    } else if (number < 10) {
        return funcNumb(numberStr);
    } else if (number >= 10 && number < 100) {
        return funcDecimal(numberStr);
    } else if (number >= 100 && number < 1000) {
        return funcHundredths(numberStr);
    }
}
