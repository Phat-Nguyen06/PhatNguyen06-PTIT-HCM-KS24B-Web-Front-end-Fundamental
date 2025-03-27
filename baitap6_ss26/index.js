function getValidDates(strings) {
    return strings.filter(str => {
        let parts = str.split("/");

        if (parts.length !== 3) return false;

        let day = Number(parts[0]);
        let month = Number(parts[1]);
        let year = Number(parts[2]);

        if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

        if (parts[0].length !== 2 || parts[1].length !== 2 || parts[2].length !== 4) return false;

        return true;
    });
}

let data = ["12/03/2024", "hello", "99/99/9999", "01/01/2000", "abc", "15/08/1995"];
console.log(getValidDates(data));